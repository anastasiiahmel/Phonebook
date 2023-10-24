import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Register from './register/Register';
import Login from './login/Login';
import Contacts from './contacts/Contacts';
import { Home } from '../page/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path="/register" element={<Register />} />
           <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/*" element={<Navigate to="/home" />} /> {/* Додано перенаправлення на /contacts за замовчуванням */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;