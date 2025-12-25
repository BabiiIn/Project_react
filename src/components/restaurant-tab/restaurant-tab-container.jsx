import { TabLink } from '../tab-link/tab-link';

export const RestaurantTabContainer = ({ restaurant }) => {
  if (!restaurant) {
    return <span>Нет данных</span>;
  }

  return (
    <TabLink to={`/restaurants/${restaurant.id}`}>{restaurant.name}</TabLink>
  );
};
