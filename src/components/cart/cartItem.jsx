import { useSelector } from 'react-redux';
import { selectCartItemById } from '../../redux/entities/cart/cartSelectors';
import { selectDishById } from '../../redux/entities/dishes/dishesSlice';
import { useCartActions } from '../../hooks/useCartActions';
import styles from './cart.module.css';
import { CartButton } from './cartButton';

export const CartItem = ({ dishId }) => {
  const { add, remove } = useCartActions();

  const item = useSelector((state) => selectCartItemById(state, dishId));
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!item) return null;

  const subtotal = (dish?.price ?? 0) * item.count;

  return (
    <li className={styles.item}>
      <span>{dish?.name ?? 'Неизвестное блюдо'}</span>
      <span>{item.count} шт.</span>
      <span>{subtotal} ₽</span>

      <div className={styles.buttons}>
        <CartButton onClick={() => add(dishId)}>+</CartButton>
        <CartButton onClick={() => remove(dishId)} disabled={item.count === 0}>
          −
        </CartButton>
      </div>
    </li>
  );
};
