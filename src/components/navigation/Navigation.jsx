import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import UserMenu from '../userMenu/UserMenu';

const Navigation = () => {
  const isAuthenticated = useState(!!localStorage.getItem('authToken'));

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
          <li style={liStyle}>
          <Link to="/home" style={linkStyle}>
           Home
          </Link>
        </li>
         
        <li style={liStyle}>
          {isAuthenticated ? (
            <Link to="/contacts" style={linkStyle}>
              Contacts
            </Link>
          ) : (
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
          )}
        </li>
      </ul>
      <UserMenu />
    </nav>
  );
};

const navStyle = {
  background: '	#696969',
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
