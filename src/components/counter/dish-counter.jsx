import { useSelector, useDispatch } from 'react-redux';
import { Counter } from './counter';
import {
  addToCart,
  removeFromCart,
  resetDish,
} from '../../redux/entities/cart/cartSlice';
import { selectCartItemById } from '../../redux/entities/cart/cartSelectors';

export const DishCounter = ({ dishId, isVisible = true }) => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => selectCartItemById(state, dishId));
  const count = cartItem ? cartItem.count : 0;

  if (!isVisible) {
    return null;
  }

  return (
    <Counter
      count={count}
      onIncrement={() => dispatch(addToCart(dishId))}
      onDecrement={() => dispatch(removeFromCart(dishId))}
      onReset={() => dispatch(resetDish(dishId))}
    />
  );
};
