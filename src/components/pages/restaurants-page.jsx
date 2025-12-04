import { useState } from 'react';
import { Restaurant } from '../restaurants/restaurant';
import { Tab } from '../tab/tab';

export const RestaurantsPage = ({ restaurants = [] }) => {
  const [activeId, setActiveId] = useState(
    restaurants.length > 0 ? restaurants[0].id : null
  );

  if (restaurants.length === 0) {
    return <p>Рестораны пока не загружены.</p>;
  }

  const activeRestaurant = restaurants.find((r) => r.id === activeId);

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        {restaurants.map((restaurant) => (
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
