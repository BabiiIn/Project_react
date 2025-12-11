import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Restaurant } from '../restaurants/restaurant';
import { Tab } from '../tab/tab';
import styles from './restaurants-page.module.css';

export const RestaurantsPage = () => {
  const restaurants = useSelector((state) => state.restaurants);

  const restaurantsArray = Object.values(restaurants);

  const [activeId, setActiveId] = useState(
    restaurantsArray.length > 0 ? restaurantsArray[0].id : null
  );

  if (restaurants.length === 0) {
    return <p>Рестораны пока не загружены.</p>;
  }

  const activeRestaurant = restaurantsArray.find((r) => r.id === activeId);

  return (
    <div>
      <div className={styles.tabsContainer}>
        {restaurantsArray.map((restaurant) => (
          <Tab
            key={restaurant.id}
            label={restaurant.name}
            isActive={restaurant.id === activeId}
            onClick={() => setActiveId(restaurant.id)}
          />
        ))}
      </div>

      {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
    </div>
  );
};
