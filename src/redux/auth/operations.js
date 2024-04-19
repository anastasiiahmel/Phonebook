import { createAsyncThunk } from '@reduxjs/toolkit';
import { logIn, logOut, refresh, singUp } from 'redux/service/api';

export const registerUser = createAsyncThunk(
    'auth/register',
    async (dataUser, thunkAPI) => {
      try {
        return singUp(dataUser);
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const loginUser = createAsyncThunk(
    'auth/login',
    async (dataUser, thunkAPI) => {
      try {
        return logIn(dataUser);
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
      try {
        logOut();
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


  export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      try {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        if (!token) thunkAPI.rejectWithValue('Unable to refresh user');
        return refresh();
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );