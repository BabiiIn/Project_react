import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDishEntities } from '../../redux/entities/dishes/dishesSlice';
import styles from './menu.module.css';
import cardStyles from './card.module.css';

export const Menu = ({ dishIds = [] }) => {
  const safeDishIds = Array.isArray(dishIds) ? dishIds : [];

  const dishEntities = useSelector(selectDishEntities);

  if (safeDishIds.length === 0) {
    return <p>Меню пока пусто.</p>;
  }

  return (
    <ul className={styles.menu}>
      {safeDishIds.map((id) => {
        const dish = dishEntities[id];
        if (!dish) return null;

        return (
          <li key={id} className={cardStyles.card}>
            <Link to={`/dish/${id}`} className={styles.link}>
              <span className={styles.name}>{dish.name}</span>
              <span className={styles.price}>{dish.price} ₽</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
