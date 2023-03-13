import { createSlice } from '@reduxjs/toolkit';

import { addContact, fetchContacts, deleteContact } from 'redux/operations';
const initialState = {
  items: [],
  loading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts, store => {
        store.loading = true;
      })
      .addCase(fetchContacts, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchContacts, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(addContact, store => {
        store.loading = true;
      })
      .addCase(addContact, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(addContact, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(deleteContact, store => {
        store.loading = true;
      })
      .addCase(deleteContact, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(deleteContact, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default contactsSlice.reducer;
