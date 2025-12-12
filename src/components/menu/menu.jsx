import { useSelector } from 'react-redux';
import { Dish } from './dish';
import styles from './menu.module.css';
import cardStyles from './card.module.css';
import { selectDishById } from '../../redux/entities/dishes/dishesSlice';

export const Menu = ({ dishIds = [] }) => {
  const safeDishIds = Array.isArray(dishIds) ? dishIds : [];

  const dishes = useSelector((state) =>
    safeDishIds.map((id) => selectDishById(state, id))
  );

  if (dishes.length === 0) {
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
