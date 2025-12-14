import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Restaurant } from '../restaurants/restaurant';
import { Tab } from '../tab/tab';
import styles from './restaurants-page.module.css';
import { selectRestaurantIds } from '../../redux/entities/restaurant/restaurantSlice';

export const RestaurantsPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

  const [activeId, setActiveId] = useState(
    restaurantIds.length > 0 ? restaurantIds[0] : null
  );

  if (restaurantIds.length === 0) {
    return <p>Рестораны пока не загружены.</p>;
  }

  return (
    <div>
      <div className={styles.tabsContainer}>
        {restaurantIds.map((id) => (
          <Tab
            key={id}
            restaurantId={id}
            isActive={id === activeId}
            onClick={() => setActiveId(id)}
          />
        ))}
      </div>

      {activeId && <Restaurant restaurantId={activeId} />}
    </div>
  );
};
