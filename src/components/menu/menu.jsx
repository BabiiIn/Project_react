import { Dish } from './dish';
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
          <Dish dish={dish} />
        </li>
      ))}
    </ul>
  );
};
