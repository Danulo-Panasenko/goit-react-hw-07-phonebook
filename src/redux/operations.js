import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63fda3861626c165a09c779c.mockapi.io/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await axios.get('/contacts');
      return data;
    } catch (response) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
  // const isDublicate = contName => {
  //   const normalizedName = contName.toLowerCase();
  //   const result = filteredContacts.find(({ name }) => {
  //     return name.toLowerCase() === normalizedName;
  //   });
  //   return Boolean(result);
  // };
  // if (isDublicate(name)) {
  //   alert(`${name} is already in contacts`);
  //   return false;
  // }
  // {
  //   condition: ({ name }, { getState }) => {
  //     const { contacts } = getState();
  //     const normalizedTitle = name.toLowerCase();

  //     const result = contacts.items.find(({ name }) => {
  //       return name.toLowerCase() === normalizedTitle;
  //     });
  //     if (result) {
  //       alert(`${name} is already in contacts`);
  //       return false;
  //     }
  //   },
  // }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const result = await axios.post('/contacts', contact);
      return result;
    } catch (response) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (response) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
