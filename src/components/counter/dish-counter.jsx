import { useDispatch, useSelector } from 'react-redux';
import { Counter } from './counter';
import {
  addToCart,
  removeFromCart,
  resetDish,
} from '../../redux/entities/cart/cartSlice';

export const DishCounter = ({ _dishId, isVisible = true }) => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.cart.items[_dishId] || 0);

  if (!isVisible) {
    return null;
  }

  return (
    <Counter
      count={count}
      onIncrement={() => dispatch(addToCart(_dishId))}
      onDecrement={() => dispatch(removeFromCart(_dishId))}
      onReset={() => dispatch(resetDish(_dishId))}
    />
  );
};
