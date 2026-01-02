import { useDispatch } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  resetDish,
} from '../redux/entities/cart/cartSlice';

export const useCartActions = () => {
  const dispatch = useDispatch();

  const add = (dishId) => dispatch(addToCart(dishId));
  const remove = (dishId) => dispatch(removeFromCart(dishId));
  const reset = (dishId) => dispatch(resetDish(dishId));

  return { add, remove, reset };
};
