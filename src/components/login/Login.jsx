
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Button, TextField, Typography, Container, Box} from '@mui/material';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(value);
  };

  const handleLoginSuccess = async (token) => {
    localStorage.setItem('authToken', token);
    Notify.success('Authentication is successful !!!')

    navigate('/contacts');

    <Button
      variant="contained"
      style={{ backgroundColor: 'red', color: 'white' }}
      onClick={() => navigate('/logout')}
    >
      Go Out
    </Button>
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/login',
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        handleLoginSuccess(response.data.token);
      }
    } catch (error) {
  
       Notify.failure('An error occurred during authentication !')
      
    }
  };

  return (
    <Container maxWidth="100vh">
      <Typography variant="h3" align="center">Authentication</Typography>
        <Box maxWidth="100vh"
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
          <Button type="submit" variant="contained" color="primary"
   sx={{
    display: 'block',
    margin: '0 auto',}}>
          Sign in
        </Button>
      </form>
      </Box>
    </Container>
  );
};

export default Login;

