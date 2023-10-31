
import React from 'react';
import { NavLink } from 'react-router-dom';

import UserMenu from '../userMenu/UserMenu';

// import { Box } from '@mui/material';

const Navigation = () => {
  const isAuthenticated = !!localStorage.getItem('authToken');

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <NavLink to="/home" style={linkStyle} exact>
            Home
          </NavLink>
        </li>

        <li style={liStyle}>
          {isAuthenticated ? (
            <NavLink to="/contacts" style={linkStyle} activeStyle={{ color: 'red' }}>
              Contacts
            </NavLink>
          ) : (
            <NavLink to="/login" style={linkStyle} activeStyle={{ color: 'red' }}>
              Login
            </NavLink>
          )}
        </li>

        {!isAuthenticated && (
          <li style={liStyle}>
            <NavLink to="/register" style={linkStyle} activeStyle={{ color: 'red' }}>
              Sign up
            </NavLink>
          </li>
        )}
      </ul>
      <UserMenu />
    </nav>
  );
};

const navStyle = {
  background: '#696969',
  color: '#fff',
  padding: '10px',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
};

const liStyle = {
  margin: '0 10px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
};

export default Navigation;
