import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRestaurantIds,
  selectRequestStatus as selectRestaurantsStatus,
  selectRequestError as selectRestaurantsError,
} from '../redux/entities/restaurant/restaurantsSlice';
import { getRestaurants } from '../redux/entities/restaurant/get-restaurants';
import { REQUEST_STATUS } from '../redux/constants/request-status';
import { Tabs } from '../components/tabs/tabs';
import { RestaurantTabContainer } from '../components/restaurant-tab/restaurant-tab-container';
import { Outlet } from 'react-router';

export const RestaurantsPage = () => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector(selectRestaurantIds);
  const status = useSelector(selectRestaurantsStatus);
  const error = useSelector(selectRestaurantsError);

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  if (status === REQUEST_STATUS.PENDING || status === REQUEST_STATUS.IDLE) {
    return <p>Загрузка ресторанов…</p>;
  }

  if (status === REQUEST_STATUS.REJECTED) {
    return <p>Ошибка: {error}</p>;
  }

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
