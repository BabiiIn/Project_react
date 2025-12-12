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
const selectUsersState = (state) => state.users;

export const selectUserIds = createSelector(
  [selectUsersState],
  (users) => users.ids
);

export const selectUserEntities = createSelector(
  [selectUsersState],
  (users) => users.entities
);

export const selectUserById = createSelector(
  [selectUserEntities, (_, id) => id],
  (entities, id) => entities[id]
);

export const selectUsersArray = createSelector(
  [selectUserIds, selectUserEntities],
  (ids, entities) => ids.map((id) => entities[id])
);

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
