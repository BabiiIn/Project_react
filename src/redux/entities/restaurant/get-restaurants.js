import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantIds } from './restaurantsSlice';
import { API_URL } from '../../constants/api';

export const getRestaurants = createAsyncThunk(
  'restaurants/getRestaurants',
  async (_, { rejectWithValue }) => {
    const res = await fetch(`${API_URL}/api/restaurants`);
    const data = await res.json();
    if (!Array.isArray(data) || !data.length) {
      return rejectWithValue('empty result');
    }
    return data;
  },
  {
    condition: (_, { getState }) => {
      const ids = selectRestaurantIds(getState());
      return !ids.length;
    },
  }
);
