

import React from 'react';
import { Button } from '@mui/material';

// import { HomeStyled } from './HomeStyledstyled';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  // const handleClickLogout = () => {
  //   navigate('/logout');
  // }

  return (
    <>
    <div type="text"
              placeholder="Search Contacts"
              variant="outlined"
              margin="normal"
              fullWidth>
      <h2>Welcome to the Phonebook web application! </h2>
      <p>This web application is a tool with a lot of functionality that will simplify the process of organizing and managing your personal phone book.</p>
      <p>Choose the action you want to take:</p>

      <Button
        
        variant="contained"
        style={{ backgroundColor:	'gray', color: 'white' }}
        onClick={() => navigate('/register')}

    
      >
       Registration
      </Button>
        <Button 
    variant="contained"
     style={{ backgroundColor:	'gray', color: 'white', margin: '50px' }}
        
        onClick={() => navigate('/login')}
    
      >
       Authentication
      </Button>
      </div>
      </>
  );
  
};

// export default Home;

