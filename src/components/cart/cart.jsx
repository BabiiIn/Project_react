import { useSelector, useDispatch } from 'react-redux';
import { useUser } from '../../context/user-context';
import { clearCart } from '../../redux/entities/cart/cartSlice';
import { selectCartIds } from '../../redux/entities/cart/cartSelectors';
import styles from './cart.module.css';
import { Button } from '../button/button';
import { CartItem } from './cartItem';

export const Cart = () => {
  const { user } = useUser();
  const dispatch = useDispatch();
  const cartIds = useSelector(selectCartIds);

  if (!user) return null;
  if (cartIds.length === 0) {
    return <div className={styles.cart}>Корзина пуста</div>;
  }

  return (
    <div className={styles.cart}>
      <h2>Корзина</h2>
      <ul>
        {cartIds.map((id) => (
          <CartItem key={id} dishId={id} />
        ))}
      </ul>

      <Button
        variant="secondary"
        className={styles.clearButton}
        onClick={() => dispatch(clearCart())}
      >
        Очистить корзину
      </Button>
    </div>
  );
};
