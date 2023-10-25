

import React from 'react';
import { Button, Box, Typography  } from '@mui/material';

// import { HomeStyled } from './HomeStyledstyled';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  // const handleClickLogout = () => {
  //   navigate('/logout');
  // }

   return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <div>
          <Typography variant="h2" align="center">
            Welcome to the Phonebook web application!
           </Typography>
           <Typography variant="body1" align="center">
          <p>This web application is a tool with a lot of functionality that will simplify the process of organizing and managing your personal phone book.</p>
             <p>Choose the action you want to take:</p>
             </Typography>
        </div>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          variant="contained"
          style={{ backgroundColor: 'gray', color: 'white', margin: '10vh' }}
          onClick={() => navigate('/register')}
        >
          Registration
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: 'gray', color: 'white'  }}
          onClick={() => navigate('/login')}
        >
          Authentication
        </Button>
      </Box>
    </>
  );
};

// export default Home;

