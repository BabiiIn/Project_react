import { useSelector, useDispatch } from 'react-redux';
import { useUser } from '../../context/user-context';
import { clearCart } from '../../redux/entities/cart/cartSlice';
import styles from './cart.module.css';

export const Cart = () => {
  const { user } = useUser();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const dishes = useSelector((state) => state.dishes);

  if (!user) {
    return null;
  }

  const dishIds = Object.keys(cartItems);

  if (dishIds.length === 0) {
    return <div className={styles.cart}>Корзина пуста</div>;
  }

  const total = dishIds.reduce((sum, id) => {
    return sum + dishes[id].price * cartItems[id];
  }, 0);

  return (
    <div className={styles.cart}>
      <h2>Корзина</h2>
      <ul>
        {dishIds.map((id) => (
          <li key={id}>
            <span>{dishes[id].name}</span>
            <span>{cartItems[id]} шт.</span>
            <span>{dishes[id].price * cartItems[id]} ₽</span>
          </li>
        ))}
      </ul>

      <div className={styles.total}>
        <strong>Итого:</strong> {total} ₽
      </div>

      <button
        className={styles.clearButton}
        onClick={() => dispatch(clearCart())}
      >
        Очистить корзину
      </button>
    </div>
  );
};
