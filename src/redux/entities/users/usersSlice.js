import { createSlice, createSelector } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../constants/normalized-mock';
import { normalizeArray } from '../../../utils/normalize';

const initialState = normalizeArray(normalizedUsers);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = action.payload;
      state.ids.push(user.id);
      state.entities[user.id] = user;
    },
  },
});

// --- Селекторы ---
export const selectUsersState = (state) => state.users;

export const selectUserIds = (state) => state.users.ids;
export const selectUserEntities = (state) => state.users.entities;

export const selectUserById = (state, id) => state.users.entities[id];

export const selectUsersArray = createSelector(
  [selectUserIds, selectUserEntities],
  (ids, entities) => ids.map((id) => entities[id])
);

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
