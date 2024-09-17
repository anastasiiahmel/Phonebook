import React from 'react';

import AccountMenu from '../AccountMenu/AccountMenu';

import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUserName, selectUserToken } from 'redux/auth/selectors';

import {
  LinksRoute,
  ListUserMenu,
  PageNav,
  WrapperGoOut,
} from './Navigation.styled';

const Navigation = () => {
  const isAuthenticated = useSelector(selectUserToken);
  const userName = useSelector(selectUserName);
  return (
    <PageNav>
      <ListUserMenu>
        <LinksRoute to="/home" exact={true.toString()}>
          Home
        </LinksRoute>
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          {isAuthenticated ? (
            <WrapperGoOut>
              <LinksRoute to="/contacts">{userName}</LinksRoute>
              <AccountMenu />
            </WrapperGoOut>
          ) : (
            <LinksRoute to="/login">Log in</LinksRoute>
          )}

          {!isAuthenticated && <LinksRoute to="/register">Sign up</LinksRoute>}
        </Box>
      </ListUserMenu>
    </PageNav>
  );
};

export default Navigation;
