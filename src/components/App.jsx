
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import Register from './register/Register';
import Login from './login/Login';
import Contacts from './contacts/Contacts';
import { Home } from './home/Home';

import Navigation from './navigation/Navigation';
import {  refreshUser } from 'redux/auth/operations';

 const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return (
    <>
       <Navigation />
      <Routes>
      <Route path='/home' element={<Home/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>

    </>
  );
};

export default App;