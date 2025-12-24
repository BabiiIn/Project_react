import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../constants/api';

export const getDishesByRestaurantId = createAsyncThunk(
  'dishes/getDishesByRestaurantId',
  async (restaurantId, { rejectWithValue }) => {
    const res = await fetch(
      `${API_URL}/api/dishes?restaurantId=${restaurantId}`
    );
    const data = await res.json();
    if (!Array.isArray(data) || !data.length) {
      return rejectWithValue('empty result');
    }
    return data;
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurant = state.restaurants.entities[restaurantId];

      if (!restaurant || !restaurant.menu) return true;

      return restaurant.menu.some((id) => !state.dishes.entities[id]);
    },
  }
);
