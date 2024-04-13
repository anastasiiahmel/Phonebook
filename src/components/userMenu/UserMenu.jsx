import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { logoutUser } from 'redux/auth/operations';
import { selectUserToken, selectUserName } from 'redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  
  const userName = useSelector(selectUserName);
  const isLoginUser = useSelector(selectUserToken);

  const handleLogout = async () => {
    dispatch(logoutUser());
    navigate('/home');
    setError(null);
    Notify.success('Log out success!');
  };

  return (
    <div>
      {isLoginUser ? (
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          {error ? (
            <p>Error: {error}</p>
          ) : (
            <>
              <p>Congratulations: {userName} !!!</p>
              <Button
                variant="contained"
                style={{ backgroundColor: 'red', color: 'white', marginLeft: '10px' }}
                onClick={handleLogout}
              >
                Go Out
              </Button>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default UserMenu;
