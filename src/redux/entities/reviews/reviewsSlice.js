import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../constants/normalized-mock';
import { arrayToObject } from '../../../utils/normalize';

const initialState = arrayToObject(normalizedReviews);

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    addReview: (state, action) => {
      const review = action.payload;
      state[review.id] = review;
    },
  },
});

export const { addReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;
