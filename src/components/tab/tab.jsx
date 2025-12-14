import { useSelector } from 'react-redux';
import styles from './tab.module.css';
import { selectRestaurantById } from '../../redux/entities/restaurant/restaurantSlice';

export const Tab = ({ restaurantId, isActive, onClick }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return (
    <button
      className={`${styles.tab} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      {restaurant.name}
    </button>
  );
};
