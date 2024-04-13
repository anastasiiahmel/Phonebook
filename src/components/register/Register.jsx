import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, TextField, Typography, Container, Box } from '@mui/material';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import { selectLogIn } from 'redux/auth/selectors';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectLogIn);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    isLoggedIn && navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,

    }

    dispatch(registerUser(dataUser)).unwrap()
      .then(() => {
        Notify.success('Register success!');
        return navigate('/contacts');
      }).catch((e) => {
        Notify.failure('Duplicate, Email');
    });
  };
  
  return (
    <Container maxWidth="xs">
      <Typography variant="h4">Registration</Typography>
      <Box mt={2}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            margin="normal"
          />
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
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;