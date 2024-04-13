import React from 'react';
import { NavLink } from 'react-router-dom';

import UserMenu from '../userMenu/UserMenu';

import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import {selectLogIn } from 'redux/auth/selectors'; 

const Navigation = () => {

  const isAuthenticated = useSelector(selectLogIn);

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <NavLink to="/home" style={linkStyle} exact={true.toString()}>
            Home
          </NavLink>
        </li>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          paddingLeft={150}
        >
          <li style={liStyle}>
            {isAuthenticated ? (
              <NavLink to="/contacts" style={linkStyle}>
                Contacts
              </NavLink>
            ) : (
              <NavLink to="/login" style={linkStyle}>
                Log in
              </NavLink>
            )}
          </li>
          {!isAuthenticated && (
            <li style={liStyle}>
              <NavLink to="/register" style={linkStyle}>
                Sign up
              </NavLink>
            </li>
          )}
        </Box>
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
