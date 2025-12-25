import { useParams } from 'react-router';
import { RestaurantContainer } from '../components/restaurant/restaurant-container';
import { Outlet } from 'react-router';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  console.log('RestaurantPage → restaurantId:', restaurantId);
  return (
    <>
      <RestaurantContainer id={restaurantId} />
      <Outlet />
    </>
  );
};
