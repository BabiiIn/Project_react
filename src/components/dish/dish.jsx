import { useSelector } from 'react-redux';
import { DishCounter } from '../counter/dish-counter';
import styles from './dish.module.css';
import { useUser } from '../../context/user-context';
import { selectDishById } from '../../redux/entities/dishes/dishesSlice';

export const Dish = ({ dishId }) => {
  const { user } = useUser();
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish) return null;

  return (
    <div className={styles.dish}>
      <h2 className={styles.name}>{dish.name}</h2>
      <p className={styles.price}>Цена: {dish.price} ₽</p>

      {dish.ingredients && dish.ingredients.length > 0 && (
        <ul className={styles.ingredients}>
          {dish.ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
      )}

      {user && (
        <div className={styles.counter}>
          <DishCounter dishId={dish.id} />
        </div>
      )}
    </div>
  );
};
