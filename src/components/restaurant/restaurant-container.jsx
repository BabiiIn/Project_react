import { useGetRestaurantByIdQuery } from '../../redux/services/api';
import { Restaurant } from './restaurant';

export const RestaurantContainer = ({ id }) => {
  const {
    data: restaurant,
    isLoading,
    isError,
    error,
  } = useGetRestaurantByIdQuery(id);

  console.log('restaurant from RTK Query:', restaurant);
  console.log('error:', error);
  console.log('isError:', isError);
  console.log('isLoading:', isLoading);
  console.log('RENDER RestaurantContainer, id =', id);
  console.log('RestaurantContainer FILE PATH:', import.meta.url);

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
