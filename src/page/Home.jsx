// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Navigate, useNavigate } from 'react-router-dom';
// import {

//   Button,
 
// } from '@mui/material';


// export const Home = () => {
// const navigate = useNavigate();
//  const  handleClickRegistr = ()=> {
//   navigate('/logout')
// }
      
//   return (
//     <div>
//       <h2>
//         Вітаємо на реєструванні !!!
//       </h2>
//        <Button
//       variant="contained"
//       style={{ backgroundColor: 'red', color: 'white' }}
//       onClick={handleClickRegistr}
//     >
//       Go Out
//     </Button>
//     </div>
//   );
// };

import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  // const handleClickLogout = () => {
  //   navigate('/logout');
  // }

  return (
    <div>
      <h2>Welcome to the Phonebook web application! </h2>
      <p>This web application is a tool with a lot of functionality that will simplify the process of organizing and managing your personal phone book.</p>
      <p>Choose the action you want to take:</p>
      <Button
        
        variant="contained"
        // style={{ backgroundColor: 'red', color: 'white' }}
        onClick={() => navigate('/register')}
        style={linkStyle}
    
      >
       Registration
      </Button>
        <Button
        variant="contained"
        style={{ backgroundColor: 'red', color: 'white' }}
        
        onClick={() => navigate('/login')}
    
      >
       Authentication
      </Button>
    </div>
  );
  
};

// export default Home;
const liStyle = {
  margin: '0 10px',
};
