import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantById } from './restaurantsSlice';
import { API_URL } from '../../constants/api';
import { REQUEST_STATUS } from '../../constants/request-status';

export const getRestaurantById = createAsyncThunk(
  'restaurants/getRestaurantById',
  async (id, { rejectWithValue }) => {
    const res = await fetch(`${API_URL}/api/restaurant/${id}`);
    const data = await res.json();

    if (!data || typeof data !== 'object') {
      return rejectWithValue('empty result');
    }

    return data;
  },
  {
    condition: (id, { getState }) => {
      const state = getState();
      const restaurant = selectRestaurantById(state, id);

      if (!restaurant) return true;

      const status = state.restaurants.requestStatusById[id];
      return status !== REQUEST_STATUS.FULFILLED;
    },
  }
);
