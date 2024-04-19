import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, allContacts,firstLogin, deleteContact, updateToken } from "redux/service/api";


export const getAllContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, thunkAPI) => {
    try {
      if (firstLogin.status) {
        await updateToken();
        firstLogin.status = false // Оновлення токена
      }
      return await allContacts(); // Отримання контактів
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
      'contacts/addContact',
      async (dataUser, thunkAPI) => {
        try {
          return addContact(dataUser)
        } catch (error) { 
          return thunkAPI.rejectWithValue(error.message);
        }
      });

export const deleteContacts = createAsyncThunk(
        'contacts/deleteContact',
        async (id, thunkAPI) => {
          try {
            return deleteContact(id)
          } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
          }
        });