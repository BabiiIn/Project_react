// import { useSelector } from 'react-redux';
// import {
//   selectRestaurantById,
//   selectRequestStatus as selectRestaurantsStatus,
//   selectRequestError as selectRestaurantsError,
// } from '../../redux/entities/restaurant/restaurantsSlice';
// import { TabLink } from '../tab-link/tab-link';
// import { REQUEST_STATUS } from '../../redux/constants/request-status';

// export const RestaurantTabContainer = ({ id }) => {
//   const restaurant = useSelector((state) => selectRestaurantById(state, id));
//   const status = useSelector(selectRestaurantsStatus);
//   const error = useSelector(selectRestaurantsError);

//   if (status === REQUEST_STATUS.PENDING || status === REQUEST_STATUS.IDLE) {
//     return <span>Загрузка…</span>;
//   }

//   if (status === REQUEST_STATUS.REJECTED) {
//     return <span>Ошибка: {error}</span>;
//   }

//   if (!restaurant) {
//     return <span>Нет данных</span>;
//   }

//   return <TabLink to={`/restaurants/${id}`}>{restaurant.name}</TabLink>;
// };

// src/components/restaurant-tab/restaurant-tab-container.jsx
import { TabLink } from '../tab-link/tab-link';

export const RestaurantTabContainer = ({ restaurant }) => {
  if (!restaurant) {
    return <span>Нет данных</span>;
  }

  return (
    <TabLink to={`/restaurants/${restaurant.id}`}>
      {restaurant.name}
    </TabLink>
  );
};
