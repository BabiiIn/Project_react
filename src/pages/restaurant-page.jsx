import { useParams } from 'react-router';
import { RestaurantContainer } from '../components/restaurant/restaurant-container';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  return <RestaurantContainer id={restaurantId} />;
};
