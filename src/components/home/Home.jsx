import React from 'react';
import { useNavigate } from 'react-router-dom';

import {  Box, } from '@mui/material';
import { motion } from 'framer-motion';

export const Home = () => {
  // const navigate = useNavigate();
   return (
    <>
      {/* <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <div>
          <Typography variant="h2" align="center">
            Welcome to the Phonebook web application!
           </Typography>
           <Typography variant="body1" align="center">
          <p>This web application is a tool with a lot of functionality that will simplify the process of organizing and managing your personal phone book.</p>
             </Typography>
              <Typography variant="body1" align="center">
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
      </Box> */}
   
      <motion.div
            className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
>
         <Box
           maxWidth="100vh"

          sx={{
          display: 'block',
            margin: '0 auto',
          marginBottom: '50px',
        backgroundColor: 'gray', // Задаємо сірий колір фону
        padding: '50px', // Додаткові стилі, за необхідності
      }} textAlign={"Center"}>
            <h1>
               Welcome to the Phonebook web application!
                 
            </h1>
       
          </Box>
       
       </motion.div>


    </>
  );
};


