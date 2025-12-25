import { useParams } from 'react-router';
import {
  useGetRestaurantByIdQuery,
  useGetDishesByRestaurantIdQuery,
} from '../redux/services/api';
import { Menu } from '../components/menu/menu';

export const MenuPage = () => {
  const { restaurantId } = useParams();

  const { data: restaurant, isLoading: isRestaurantLoading } =
    useGetRestaurantByIdQuery(restaurantId);

  const {
    data: dishes,
    isLoading: isDishesLoading,
    isError,
    error,
  } = useGetDishesByRestaurantIdQuery(restaurantId);

  if (isRestaurantLoading || isDishesLoading) {
    return <p>Загрузка меню…</p>;
  }

  if (isError) {
    return <p>Ошибка: {error?.data?.message || 'Ошибка загрузки меню'}</p>;
  }

  if (!restaurant) {
    return <p>Ресторан не найден</p>;
  }

  return (
    <div>
      <h3>Меню ресторана {restaurant.name}</h3>
      <Menu dishes={dishes} />
    </div>
  );
};
