import { createSlice } from '@reduxjs/toolkit';
import {  addContacts, deleteContacts, getAllContacts} from './operations';

export const initialState = {
  items: [],
  isLoading: false,
  error: false,
  filter: '',
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = false;
};

const handleRejected = (state, { error }) => { 
  state.isLoading = false;
  state.error = error.message;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        const deleteItem = state.items.filter(el => el.id !== payload.id);
        state.items = deleteItem;
      })
      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher((action) => action.type.endsWith('/fulfilled'), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContacts } = contactsSlice.actions;