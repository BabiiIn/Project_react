// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   selectRestaurantById,
//   selectRestaurantStatusById,
//   selectRequestError,
// } from '../../redux/entities/restaurant/restaurantsSlice';
// import { getRestaurantById } from '../../redux/entities/restaurant/get-restaurant-by-id';
// import { Restaurant } from './restaurant';
// import { REQUEST_STATUS } from '../../redux/constants/request-status';

// export const RestaurantContainer = ({ id }) => {
//   const dispatch = useDispatch();

//   const restaurant = useSelector((state) => selectRestaurantById(state, id));

//   const status = useSelector((state) => selectRestaurantStatusById(state, id));

//   const error = useSelector(selectRequestError);

//   useEffect(() => {
//     if (id) {
//       dispatch(getRestaurantById(id));
//     }
//   }, [dispatch, id]);

//   if (status === REQUEST_STATUS.PENDING || status === REQUEST_STATUS.IDLE) {
//     return <p>Загрузка ресторана…</p>;
//   }

//   if (status === REQUEST_STATUS.REJECTED) {
//     return <p>Ошибка: {error}</p>;
//   }

//   if (!restaurant) return <p>Ресторан не найден</p>;

//   return <Restaurant id={id} name={restaurant.name} />;
// };

// src/components/restaurant/restaurant-container.jsx
// src/components/restaurant/restaurant-container.jsx

// Дубль 2
// import { useGetRestaurantsQuery } from '../../redux/services/api';
// import { Restaurant } from './restaurant';

// export const RestaurantContainer = ({ id }) => {
//   const {
//     data: restaurants,
//     isLoading,
//     isError,
//     error,
//   } = useGetRestaurantsQuery();

//   console.log('id из URL:', id, typeof id);
//   console.log('restaurants:', restaurants);
//   console.log("restaurants full:", JSON.stringify(restaurants, null, 2));

//   if (isLoading) {
//     return <p>Загрузка ресторана…</p>;
//   }

//   if (isError) {
//     const message =
//       (error && error.data && error.data.message) ||
//       'Ошибка загрузки ресторана';
//     return <p>Ошибка: {message}</p>;
//   }

//   if (!restaurants || restaurants.length === 0) {
//     return <p>Рестораны пока не загружены.</p>;
//   }

//   const restaurant = restaurants.find((r) => String(r.id) === String(id));

//   if (!restaurant) {
//     return <p>Ресторан не найден</p>;
//   }

//   return <Restaurant id={restaurant.id} name={restaurant.name} />;
// };

// Дубль 3
// import { useGetRestaurantsQuery } from '../../redux/services/api';
// import { Restaurant } from './restaurant';

// export const RestaurantContainer = ({ id }) => {
//   const {
//     data: restaurants,
//     isLoading,
//     isError,
//     error,
//   } = useGetRestaurantsQuery();

//   console.log('RestaurantContainer → id prop:', id);

//   if (isLoading) {
//     return <p>Загрузка ресторана…</p>;
//   }

//   if (isError) {
//     const message =
//       (error && error.data && error.data.message) ||
//       'Ошибка загрузки ресторана';
//     return <p>Ошибка: {message}</p>;
//   }

//   if (!restaurants) {
//     return <p>Загрузка ресторана…</p>;
//   }

//   const restaurant = restaurants.find((r) => String(r.id) === String(id));

//   if (!restaurant) {
//     return <p>Ресторан не найден</p>;
//   }

//   return <Restaurant id={restaurant.id} name={restaurant.name} />;
// };

// Дубль 4
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
  console.log("RENDER RestaurantContainer, id =", id);
  console.log("RestaurantContainer FILE PATH:", import.meta.url);



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
