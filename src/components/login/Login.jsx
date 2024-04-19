import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, TextField, Typography, Container, Box } from '@mui/material';
import { message } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import {selectLogIn } from 'redux/auth/selectors';
import { loginUser } from 'redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectLogIn);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  useEffect(() => {
    isLoggedIn && navigate('/contacts');
  }, [isLoggedIn, navigate]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataUser = {
      email: formData.email,
      password: formData.password,
    };

    dispatch(loginUser(dataUser))
    .then(() => {  
      message.success('Login success!');
    }).catch((e) => {
      message.error('Login error, Email or Password wrong!');
  });
  };

  return (
    <Container maxWidth="100vh">
      <Typography variant="h3" align="center">Authentication</Typography>
      <Box
        maxWidth="100vh"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        paddingLeft={50}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" sx={{ display: 'block', margin: '0 auto' }}>
            Sign in
          </Button>
          
        </form>
      </Box>
    </Container>
  );
};

export default Login;
