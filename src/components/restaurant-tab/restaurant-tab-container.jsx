import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/restaurantSlice';
import { TabLink } from '../tab-link/tab-link';

export const RestaurantTabContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) return null;

  return <TabLink to={`/restaurants/${id}`}>{restaurant.name}</TabLink>;
};
