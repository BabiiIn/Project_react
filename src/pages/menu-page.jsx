// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router';
// import { selectRestaurantById } from '../redux/entities/restaurant/restaurantsSlice';
// import {
//   selectRequestStatus as selectDishesStatus,
//   selectRequestError as selectDishesError,
// } from '../redux/entities/dishes/dishesSlice';
// import { getDishesByRestaurantId } from '../redux/entities/dishes/get-dishes-by-restaurant-id';
// import { REQUEST_STATUS } from '../redux/constants/request-status';
// import { Menu } from '../components/menu/menu';

// export const MenuPage = () => {
//   const { restaurantId } = useParams();
//   const dispatch = useDispatch();

//   const restaurant = useSelector((state) =>
//     selectRestaurantById(state, restaurantId)
//   );

//   const status = useSelector((state) =>
//     selectDishesStatus(state, restaurantId)
//   );

//   const error = useSelector((state) => selectDishesError(state, restaurantId));

//   useEffect(() => {
//     if (restaurantId) {
//       dispatch(getDishesByRestaurantId(restaurantId));
//     }
//   }, [dispatch, restaurantId]);

//   if (status === REQUEST_STATUS.PENDING || status === REQUEST_STATUS.IDLE) {
//     return <p>Загрузка меню…</p>;
//   }

//   if (status === REQUEST_STATUS.REJECTED) {
//     return <p>Ошибка: {error}</p>;
//   }

//   if (!restaurant) return <p>Ресторан не найден</p>;

//   return (
//     <div>
//       <h3>Меню ресторана {restaurant.name}</h3>
//       <Menu dishIds={restaurant.menu} />
//     </div>
//   );
// };

// src/pages/menu-page.jsx
// import { useParams } from 'react-router';
// import { useGetRestaurantByIdQuery } from '../redux/services/api';
// import { Menu } from '../components/menu/menu';

// export const MenuPage = () => {
//   const { restaurantId } = useParams();

//   const {
//     data: restaurant,
//     isLoading,
//     isError,
//     error,
//   } = useGetRestaurantByIdQuery(restaurantId);

//   if (isLoading) {
//     return <p>Загрузка меню…</p>;
//   }

//   if (isError) {
//     return <p>Ошибка: {error?.data?.message || 'Ошибка загрузки меню'}</p>;
//   }

//   if (!restaurant) {
//     return <p>Ресторан не найден</p>;
//   }

//   return (
//     <div>
//       <h3>Меню ресторана {restaurant.name}</h3>
//       <Menu dishIds={restaurant.menu} />
//     </div>
//   );
// };

// src/pages/menu-page.jsx
import { useParams } from 'react-router';
import { useGetRestaurantByIdQuery, useGetDishesByRestaurantIdQuery } from '../redux/services/api';
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
