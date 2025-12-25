import { useSelector } from 'react-redux';
import { Counter } from './counter';
import { selectCartItemById } from '../../redux/entities/cart/cartSelectors';
import { useCartActions } from '../../hooks/useCartActions';

export const DishCounter = ({ dishId, isVisible = true }) => {
  const { add, remove, reset } = useCartActions();

  const cartItem = useSelector((state) => selectCartItemById(state, dishId));
  const count = cartItem ? cartItem.count : 0;

  if (!isVisible) return null;

  return (
    <Counter
      count={count}
      onIncrement={() => add(dishId)}
      onDecrement={() => remove(dishId)}
      onReset={() => reset(dishId)}
    />
  );
};
