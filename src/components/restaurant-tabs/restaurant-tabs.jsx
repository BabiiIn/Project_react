import { useState } from 'react';
import { RestaurantListItem } from '../restaurant/restaurant';

export const RestaurantTabs = ({ restaurants = [] }) => {
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
          <button
            key={restaurant.id}
            onClick={() => setActiveId(restaurant.id)}
            style={{
              marginRight: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: activeId === restaurant.id ? '#ccc' : '#eee',
              border: '1px solid #999',
              cursor: 'pointer',
            }}
          >
            {restaurant.name}
          </button>
        ))}
      </div>

      <ul>
        {activeRestaurant && (
          <RestaurantListItem restaurant={activeRestaurant} />
        )}
      </ul>
    </div>
  );
};
