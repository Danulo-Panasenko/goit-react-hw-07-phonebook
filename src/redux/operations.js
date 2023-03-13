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
