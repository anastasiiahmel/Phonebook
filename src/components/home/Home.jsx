import React from 'react';


import {  Box, } from '@mui/material';
import { motion } from 'framer-motion';

export const Home = () => {
   return (
    <>
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
          marginTop: '200px',
        backgroundColor: 'gray', 
        padding: '50px',
      }} textAlign={"Center"}>
            <h1>
               Welcome to the Phonebook web application! 
            </h1>
          </Box>
       </motion.div>


    </>
  );
};