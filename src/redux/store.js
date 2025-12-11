import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './entities/restaurant/restaurantSlice';
import dishesReducer from './entities/dishes/dishesSlice';
import reviewsReducer from './entities/reviews/reviewsSlice';
import usersReducer from './entities/users/usersSlice';
import cartReducer from './entities/cart/cartSlice';

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    dishes: dishesReducer,
    reviews: reviewsReducer,
    users: usersReducer,
    cart: cartReducer,
  },
});
