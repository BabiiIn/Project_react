import { DishCounter } from '../counter/dish-counter';
import styles from './dish.module.css';
import { useUser } from '../../context/user-context';

export const Dish = ({ dish }) => {
  const { user } = useUser();
  return (
    <div className={styles.dish}>
      <div className={styles.info}>
        <span className={styles.name}>{dish.name}</span>
        <span className={styles.price}>{dish.price} ₽</span>
      </div>

      {user && (
        <div className={styles.counter}>
          <DishCounter _dishId={dish.id} />
        </div>
      )}
    </div>
  );
};
