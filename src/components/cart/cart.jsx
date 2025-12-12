import { useSelector, useDispatch } from 'react-redux';
import { useUser } from '../../context/user-context';
import { clearCart } from '../../redux/entities/cart/cartSlice';
import { selectCartWithDishes } from '../../redux/entities/cart/cartSelectors';
import styles from './cart.module.css';

export const Cart = () => {
  const { user } = useUser();
  const dispatch = useDispatch();

  const cartWithDishes = useSelector(selectCartWithDishes);

  if (!user) return null;
  if (cartWithDishes.length === 0) {
    return <div className={styles.cart}>Корзина пуста</div>;
  }

  const total = cartWithDishes.reduce(
    (sum, { item, dish }) => sum + (dish?.price ?? 0) * item.count,
    0
  );

  return (
    <div className={styles.cart}>
      <h2>Корзина</h2>
      <ul>
        {cartWithDishes.map(({ item, dish }) => (
          <li key={item.id}>
            <span>{dish?.name ?? 'Неизвестное блюдо'}</span>
            <span>{item.count} шт.</span>
            <span>{(dish?.price ?? 0) * item.count} ₽</span>
          </li>
        ))}
      </ul>

      <div className={styles.total}>
        <strong>Итого:</strong> {total} ₽
      </div>

      <button className={styles.clearButton} onClick={() => dispatch(clearCart())}>
        Очистить корзину
      </button>
    </div>
  );
};
