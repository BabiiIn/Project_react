import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDishById,
  selectRequestStatus,
  selectRequestError,
} from '../../redux/entities/dishes/dishesSlice';
import { getDishById } from '../../redux/entities/dishes/get-dish-by-id';
import { Dish } from './dish';
import { REQUEST_STATUS } from '../../redux/constants/request-status';

export const DishContainer = ({ id }) => {
  const dispatch = useDispatch();
  const dish = useSelector((state) => selectDishById(state, id));

  const status = useSelector((state) => selectRequestStatus(state));

  const error = useSelector((state) => selectRequestError(state));

  useEffect(() => {
    dispatch(getDishById(id));
  }, [dispatch, id]);

  if (status === REQUEST_STATUS.PENDING || status === REQUEST_STATUS.IDLE) {
    return <p>Загрузка блюда…</p>;
  }

  if (status === REQUEST_STATUS.REJECTED) {
    return <p>Ошибка: {error}</p>;
  }

  if (!dish) return <p>Блюдо не найдено</p>;

  return <Dish dishId={id} />;
};
