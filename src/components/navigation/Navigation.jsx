import React from 'react';

import UserMenu from '../userMenu/UserMenu';

import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import {selectLogIn } from 'redux/auth/selectors'; 

import { LinksItem, LinksRoute, ListUserMenu, PageNav } from './Navigation.styled';

const Navigation = () => {

  const isAuthenticated = useSelector(selectLogIn);

  return (
    <PageNav>
      <ListUserMenu>
        <LinksItem>
          <LinksRoute to="/home" exact={true.toString()}>
            Home
          </LinksRoute>
        </LinksItem>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <LinksItem>
            {isAuthenticated ? (
              <LinksRoute to="/contacts">
                Contacts
              </LinksRoute>
            ) : (
              <LinksRoute to="/login">
                Log in
              </LinksRoute>
            )}
          </LinksItem>
          {!isAuthenticated && (
            <LinksItem>
              <LinksRoute to="/register">
                Sign up
              </LinksRoute>
            </LinksItem>
          )}
        </Box>
      </ListUserMenu>
      <UserMenu />
    </PageNav>
  );
};

export default Navigation;
