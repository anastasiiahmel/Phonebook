import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Button } from '@mui/material';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Logout = () => {
  const [error, setError] = useState(null);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsUserLoggedIn(token !== null);

    if (token) {
      loadUserEmail(token);
    }
  }, []);

  const loadUserEmail = async (token) => {
    try {
      const response = await axios.get('https://connections-api.herokuapp.com/users/current', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUserEmail(response.data.email);
      }
    } catch (error) {
       Notify.failure('Email loading error:', error)
    }
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('authToken');

      if (!token) {
        throw new Error('The authorization token is missing');
      }

      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        localStorage.removeItem('authToken');
        setIsLoggedOut(true);
        Notify.success('User exit successful !!!');
        navigate('/home');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      }
    }
  };

  return (
    <div>
      {isUserLoggedIn && !isLoggedOut ? (
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          {error ? (
            <p>Error: {error}</p>
          ) : (
            <>
              <p>Congratulations: {userEmail} !!!</p>
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

export default Logout;
