
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


import Register from './register/Register';
import Login from './login/Login';
import Contacts from './contacts/Contacts';
import { Home } from './home/Home';

import Navigation from './navigation/Navigation';
import { refresh } from 'redux/auth/operations';

 const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);


  return (
    <>
       <Navigation />
      <Routes>
        <Route path='/' >
          <Route index element={<Home />} />
          <Route path='/contacts' element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>} />

          <Route path='/register' element={
            <PublicRoute>
              <Register />
            </PublicRoute>} />
          <Route  path='/login' element={
            <PublicRoute>
              <Login />
            </PublicRoute>} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>

    </>
  );
};

export default App;