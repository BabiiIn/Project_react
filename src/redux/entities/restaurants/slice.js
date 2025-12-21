import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getRestaurants } from './get-restaurants';

const adapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: adapter.getInitialState({ requestStatus: 'idle' }),
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRequestStatus: (state) => state.requestStatus,
  },
  reducers: {
    addRestaurant: adapter.addOne,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = 'pending';
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = 'rejected';
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        state.requestStatus = 'fulfilled';
        adapter.setAll(state, payload);
      }),
});

const selectSlice = (state) => state.restaurants;

export const { selectById } = adapter.getSelectors(selectSlice);
export const {
  selectRestaurantIds,
  selectRestaurantById,
  selectRequestStatus,
} = restaurantsSlice.selectors;

export default restaurantsSlice.reducer;
