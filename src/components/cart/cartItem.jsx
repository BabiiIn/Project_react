import { useSelector } from 'react-redux';
import { selectCartItemById } from '../../redux/entities/cart/cartSelectors';
import { selectDishById } from '../../redux/entities/dishes/dishesSlice';

export const CartItem = ({ dishId }) => {
  const item = useSelector((state) => selectCartItemById(state, dishId));
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!item) return null;

  return (
    <li>
      <span>{dish?.name ?? 'Неизвестное блюдо'}</span>
      <span>{item.count} шт.</span>
      <span>{(dish?.price ?? 0) * item.count} ₽</span>
    </li>
  );
};
