import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './entities/restaurant/restaurantsSlice';
import dishesReducer from './entities/dishes/dishesSlice';
import reviewsReducer from './entities/reviews/reviewsSlice';
import usersReducer from './entities/users/usersSlice';
import cartReducer from './entities/cart/cartSlice';

const loggerMiddleware = (_store) => (next) => (action) => {
  // middleware logic

  console.log(action);

  return next(action);
};

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    dishes: dishesReducer,
    reviews: reviewsReducer,
    users: usersReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(loggerMiddleware),
});
