import { createSlice, createSelector } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../constants/normalized-mock';
import { normalizeArray } from '../../../utils/normalize';

const initialState = normalizeArray(normalizedReviews);

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    addReview: (state, action) => {
      const review = action.payload;
      state.ids.push(review.id);
      state.entities[review.id] = review;
    },
  },
});

// --- Селекторы ---
export const selectReviewsState = (state) => state.reviews;

export const selectReviewIds = (state) => state.reviews.ids;
export const selectReviewEntities = (state) => state.reviews.entities;

export const selectReviewById = (state, id) => state.reviews.entities[id];

export const selectReviewsArray = createSelector(
  [selectReviewIds, selectReviewEntities],
  (ids, entities) => ids.map((id) => entities[id])
);

export const { addReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;
