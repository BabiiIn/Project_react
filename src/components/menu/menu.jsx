import { Link } from 'react-router-dom';
import styles from './menu.module.css';
import cardStyles from './card.module.css';

export const Menu = ({ dishes = [] }) => {
  const safeDishes = Array.isArray(dishes) ? dishes : [];

  if (safeDishes.length === 0) {
    return <p>Меню пока пусто.</p>;
  }

  return (
    <ul className={styles.menu}>
      {safeDishes.map((dish) => (
        <li key={dish.id} className={cardStyles.card}>
          <Link to={`/dish/${dish.id}`} className={styles.link}>
            <span className={styles.name}>{dish.name}</span>
            <span className={styles.price}>{dish.price} ₽</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
