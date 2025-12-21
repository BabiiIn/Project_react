import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRestaurantById,
  selectRestaurantStatusById,
  selectRequestError,
} from '../../redux/entities/restaurant/restaurantsSlice';
import { getRestaurantById } from '../../redux/entities/restaurant/get-restaurant-by-id';
import { Restaurant } from './restaurant';
import { REQUEST_STATUS } from '../../redux/constants/request-status';

export const RestaurantContainer = ({ id }) => {
  const dispatch = useDispatch();

  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const status = useSelector((state) => selectRestaurantStatusById(state, id));

  const error = useSelector(selectRequestError);

  useEffect(() => {
    if (id) {
      dispatch(getRestaurantById(id));
    }
  }, [dispatch, id]);

  if (status === REQUEST_STATUS.PENDING || status === REQUEST_STATUS.IDLE) {
    return <p>Загрузка ресторана…</p>;
  }

  if (status === REQUEST_STATUS.REJECTED) {
    return <p>Ошибка: {error}</p>;
  }

  if (!restaurant) return <p>Ресторан не найден</p>;

  return <Restaurant id={id} name={restaurant.name} />;
};
