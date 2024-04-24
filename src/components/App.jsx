import React, { useEffect, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { refreshUser } from 'redux/auth/operations';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


import { Loader } from './Loader/Loader';
import Navigation from './Navigation/Navigation';

const Home = React.lazy(() => import('./pages/Home'));
const Contacts = React.lazy(() => import('./pages/Contacts'));
const Register = React.lazy(() => import('./pages/Register'));
const Login = React.lazy(() => import('./pages/Login'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/contacts' element={<PrivateRoute><Contacts /></PrivateRoute>} />
          <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
          <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
