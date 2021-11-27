import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://619d4882131c600017088e81.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
      try {
        const { data } = await axios.get('/contacts/');
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }  
  }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue }) => {
        try {
          const { data } = await axios.post('/contacts/', contact);
          return data;
        } catch (error) {
          return rejectWithValue(error);
        }  
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { rejectWithValue }) => {
        try {
          const { data: { id } } = await axios.delete(`/contacts/${contactId}`);
          return id;
        } catch (error) {
          return rejectWithValue(error);
        }  
    }
);
