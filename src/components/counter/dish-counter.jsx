import { useDispatch, useSelector } from 'react-redux';
import { Counter } from './counter';
import {
  addToCart,
  removeFromCart,
  resetDish,
  selectCartItemById,
} from '../../redux/entities/cart/cartSlice';

export const DishCounter = ({ dishId, isVisible = true }) => {
  const dispatch = useDispatch();

  // Получаем объект товара из корзины через селектор
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
