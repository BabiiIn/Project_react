import { DishCounter } from '../counter/dish-counter';
import styles from './dish.module.css';

export const Dish = ({ dish }) => {
  return (
    <li className={styles.dish}>
      <div className={styles.info}>
        <span className={styles.name}>{dish.name}</span>
        <span className={styles.price}>{dish.price} ₽</span>
      </div>
      <div className={styles.counter}>
        <DishCounter _dishId={dish.id} />
      </div>
    </li>
  );
};
