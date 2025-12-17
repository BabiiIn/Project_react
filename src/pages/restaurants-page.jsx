import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../redux/entities/restaurant/restaurantSlice';
import { Tabs } from '../components/tabs/tabs';
import { RestaurantTabContainer } from '../components/restaurant-tab/restaurant-tab-container';
import { Outlet } from 'react-router';

export const RestaurantsPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

  if (!restaurantIds.length) {
    return <p>Рестораны пока не загружены.</p>;
  }

  return (
    <div>
      <h1>Доставка доступна из ресторанов:</h1>
      <Tabs>
        {restaurantIds.map((id) => (
          <RestaurantTabContainer key={id} id={id} />
        ))}
      </Tabs>
      <Outlet />
    </div>
  );
};
