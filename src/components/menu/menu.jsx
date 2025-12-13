import { Dish } from './dish';
import styles from './menu.module.css';
import cardStyles from './card.module.css';

export const Menu = ({ dishIds = [] }) => {
  const safeDishIds = Array.isArray(dishIds) ? dishIds : [];

  if (safeDishIds.length === 0) {
    return <p>Меню пока пусто.</p>;
  }

  return (
    <ul className={styles.menu}>
      {safeDishIds.map((id) => (
        <li key={id} className={cardStyles.card}>
          <Dish dishId={id} />
        </li>
      ))}
    </ul>
  );
};
