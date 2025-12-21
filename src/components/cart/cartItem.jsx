import { useSelector, useDispatch } from 'react-redux';
import { selectCartItemById } from '../../redux/entities/cart/cartSelectors';
import { selectDishById } from '../../redux/entities/dishes/dishesSlice';
import { addToCart, removeFromCart } from '../../redux/entities/cart/cartSlice';
import { getDishById } from '../../redux/entities/dishes/get-dish-by-id';
import styles from './cart.module.css';
import { CartButton } from './cartButton';

export const CartItem = ({ dishId }) => {
  const dispatch = useDispatch();

  const item = useSelector((state) => selectCartItemById(state, dishId));
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!item) return null;

  const subtotal = (dish?.price ?? 0) * item.count;

  const handlePlus = () => {
    dispatch(addToCart(dishId));
    dispatch(getDishById(dishId));
  };

  const handleMinus = () => {
    dispatch(removeFromCart(dishId));
  };

  return (
    <li className={styles.item}>
      <span>{dish?.name ?? 'Неизвестное блюдо'}</span>
      <span>{item.count} шт.</span>
      <span>{subtotal} ₽</span>

      <div className={styles.buttons}>
        <CartButton onClick={handlePlus}>+</CartButton>
        <CartButton onClick={handleMinus} disabled={item.count === 0}>
          −
        </CartButton>
      </div>
    </li>
  );
};
