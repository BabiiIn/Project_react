import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../constants/api';
import { selectRestaurantIds } from './slice';

export const getRestaurants = createAsyncThunk(
  'restaurants/getRestaurants',
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${API_URL}/api/restaurants`);
    const result = await response.json();

    if (!Array.isArray(result) || result.length === 0) {
      return rejectWithValue('empty result');
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      const ids = selectRestaurantIds(getState());
      return ids.length === 0;
    },
  }
);
