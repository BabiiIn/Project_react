import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectUserIds } from './usersSlice';
import { API_URL } from '../../constants/api';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, { rejectWithValue }) => {
    const res = await fetch(`${API_URL}/api/users`);
    const data = await res.json();

    if (!Array.isArray(data)) {
      return rejectWithValue('empty result');
    }

    return data;
  },
  {
    condition: (_, { getState }) => {
      const ids = selectUserIds(getState());
      return ids.length === 0;
    },
  }
);
