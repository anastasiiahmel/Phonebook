import { createSlice } from '@reduxjs/toolkit';
import {  loginUser, logoutUser,refreshUser, registerUser } from './operations';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initialState = {
  token: '',
  profile: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state) => {
  state.isLoading = false
}

const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};


const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.profile = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.profile = payload.user;
        state.isLoggedIn = true;
        
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.token = '';
        state.profile = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.profile = payload;
        state.isLoggedIn = true;
      })
      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher((action) => action.type.endsWith('/fulfilled'), handleFulfilled);
  },

});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const registerReducer = persistReducer(
  persistConfig,
  slice.reducer
);