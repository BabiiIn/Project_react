import { DishCounter } from '../counter/dish-counter';
import styles from './dish.module.css';
import { useUser } from '../../context/user-context'; // импортируем хук

export const Dish = ({ dish }) => {
  const { user } = useUser(); // достаём пользователя из контекста
  return (
    <div className={styles.dish}>
      <div className={styles.info}>
        <span className={styles.name}>{dish.name}</span>
        <span className={styles.price}>{dish.price} ₽</span>
      </div>

      {/* Кнопки +/- доступны только авторизованному пользователю */}
      {user && (
        <div className={styles.counter}>
          <DishCounter _dishId={dish.id} />
        </div>
      )}
    </div>
  );
};
