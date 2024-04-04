import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Navigation from './navigation/Navigation';
import Register from './register/Register';
import Login from './login/Login';
import Contacts from './contacts/Contacts';
import { Home } from './home/Home';

const App = () => {

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





