import { useSelector } from 'react-redux';
import { DishCounter } from '../counter/dish-counter';
import styles from './dish.module.css';
import { useUser } from '../../context/user-context';
import { selectDishById } from '../../redux/entities/dishes/dishesSlice';

export const Dish = ({ dishId }) => {
  const { user } = useUser();

  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish) {
    return null;
  }

  return (
    <div className={styles.dish}>
      <div className={styles.info}>
        <span className={styles.name}>{dish.name}</span>
        <span className={styles.price}>{dish.price} ₽</span>
      </div>

      {user && (
        <div className={styles.counter}>
          <DishCounter dishId={dish.id} />
        </div>
      )}
    </div>
  );
};
