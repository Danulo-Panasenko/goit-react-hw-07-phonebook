import { createSlice } from '@reduxjs/toolkit';
// import { customAlphabet } from 'nanoid';
import {
  fetchAllContactsLoading,
  fetchAllContactsSuccess,
  fetchAllContactsError,
  fetchAddContactsLoading,
  fetchAddContactsSuccess,
  fetchAddContactsError,
  fetchDeleteContactsLoading,
  fetchDeleteContactsSuccess,
  fetchDeleteContactsError,
} from './contacts-actions';
// const nanoid = customAlphabet('1234567890', 2);
const initialState = {
  items: [],
  loading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchAllContactsLoading]: store => {
      store.loading = true;
    },
    [fetchAllContactsSuccess]: (store, { payload }) => {
      console.log(payload);
      store.loading = false;
      store.items = payload;
    },
    [fetchAllContactsError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [fetchAddContactsLoading]: store => {
      store.loading = true;
    },
    [fetchAddContactsSuccess]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [fetchAddContactsError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [fetchDeleteContactsLoading]: store => {
      store.loading = true;
    },
    [fetchDeleteContactsSuccess]: (store, { payload }) => {
      store.loading = false;
      const index = store.items.findIndex(item => item.id === payload);
      store.items.splice(index, 1);
    },
    [fetchDeleteContactsError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;
