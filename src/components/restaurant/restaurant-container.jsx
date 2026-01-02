import { useGetRestaurantByIdQuery } from '../../redux/services/api';
import { Restaurant } from './restaurant';

export const RestaurantContainer = ({ id }) => {
  const {
    data: restaurant,
    isLoading,
    isError,
  } = useGetRestaurantByIdQuery(id);

  if (isLoading) {
    return <p>Загрузка ресторана…</p>;
  }

  if (isError) {
    return <p>Ошибка загрузки ресторана</p>;
  }

  if (!restaurant) {
    return <p>Ресторан не найден</p>;
  }

  return <Restaurant id={restaurant.id} name={restaurant.name} />;
};
