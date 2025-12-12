import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Restaurant } from '../restaurants/restaurant';
import { Tab } from '../tab/tab';
import styles from './restaurants-page.module.css';
import {
  selectRestaurantIds,
  selectRestaurantById,
} from '../../redux/entities/restaurant/restaurantSlice';

export const RestaurantsPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const restaurants = useSelector((state) =>
    restaurantIds.map((id) => selectRestaurantById(state, id))
  );

  const [activeId, setActiveId] = useState(
    restaurantIds.length > 0 ? restaurantIds[0] : null
  );

  if (restaurantIds.length === 0) {
    return <p>Рестораны пока не загружены.</p>;
  }

  const activeRestaurant = restaurants.find((r) => r.id === activeId);

  return (
    <div>
      <div className={styles.tabsContainer}>
        {restaurantIds.map((id) => {
          const restaurant = restaurants.find((r) => r.id === id);
          return (
            <Tab
              key={id}
              label={restaurant?.name}
              isActive={id === activeId}
              onClick={() => setActiveId(id)}
            />
          );
        })}
      </div>

      {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
    </div>
  );
};
