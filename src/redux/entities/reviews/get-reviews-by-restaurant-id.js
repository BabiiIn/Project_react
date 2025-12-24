import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../constants/api';

export const getReviewsByRestaurantId = createAsyncThunk(
  'reviews/getReviewsByRestaurantId',
  async (restaurantId, { rejectWithValue }) => {
    const res = await fetch(
      `${API_URL}/api/reviews?restaurantId=${restaurantId}`
    );
    const data = await res.json();
    if (!Array.isArray(data)) {
      return rejectWithValue('empty result');
    }
    return data;
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();

      const restaurant = state.restaurants.entities[restaurantId];
      if (!restaurant) return true;

      if (!restaurant.reviews || restaurant.reviews.length === 0) return true;

      const allLoaded = restaurant.reviews.every(
        (id) => state.reviews.entities[id]
      );

      return !allLoaded;
    },
  }
);
