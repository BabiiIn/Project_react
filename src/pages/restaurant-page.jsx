import { useParams } from 'react-router';
import { RestaurantContainer } from '../components/restaurant/restaurant-container';
import { Outlet } from 'react-router';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  return (
    <>
      <RestaurantContainer id={restaurantId} />
      <Outlet />
    </>
  );
};
