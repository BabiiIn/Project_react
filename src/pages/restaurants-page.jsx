import { Tabs } from '../components/tabs/tabs';
import { RestaurantTabContainer } from '../components/restaurant-tab/restaurant-tab-container';
import { Outlet } from 'react-router';
import { useGetRestaurantsQuery } from '../redux/services/api';

export const RestaurantsPage = () => {
  const {
    data: restaurants,
    isLoading,
    isError,
    error,
  } = useGetRestaurantsQuery();

  if (isLoading) {
    return <p>Загрузка ресторанов…</p>;
  }

  if (isError) {
    const message =
      (error && error.data && error.data.message) ||
      'Ошибка загрузки ресторанов';
    return <p>Ошибка: {message}</p>;
  }

  if (!restaurants || restaurants.length === 0) {
    return <p>Рестораны пока не загружены.</p>;
  }

  return (
    <div>
      <h1>Доставка доступна из ресторанов:</h1>
      <Tabs>
        {restaurants.map((restaurant) => (
          <RestaurantTabContainer key={restaurant.id} restaurant={restaurant} />
        ))}
      </Tabs>
      <Outlet />
    </div>
  );
};
