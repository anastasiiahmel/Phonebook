import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { message } from 'antd';

import { logoutUser } from 'redux/auth/operations';
import { selectUserToken } from 'redux/auth/selectors';
import { ButtonGoOut } from './AccountMenu.styled';

const AccountMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const isLoginUser = useSelector(selectUserToken);

  const handleLogout = async () => {
    dispatch(logoutUser());
    navigate('/home');
    setError(null);
    message.success('Log out success!');
  };

  return (
    <>
      {isLoginUser ? (
        error ? (
          <p>Error: {error}</p>
        ) : (
          <ButtonGoOut onClick={handleLogout}>Log Out</ButtonGoOut>
        )
      ) : null}
    </>
  );
};

export default AccountMenu;
