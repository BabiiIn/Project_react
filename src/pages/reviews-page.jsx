// // import { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { useParams } from 'react-router';
// // import { selectRestaurantById } from '../redux/entities/restaurant/restaurantsSlice';
// // import {
// //   selectRequestStatus as selectReviewsStatus,
// //   selectRequestError as selectReviewsError,
// // } from '../redux/entities/reviews/reviewsSlice';
// // import { getReviewsByRestaurantId } from '../redux/entities/reviews/get-reviews-by-restaurant-id';
// // import { getUsers } from '../redux/entities/users/get-users';
// // import { REQUEST_STATUS } from '../redux/constants/request-status';
// // import { Reviews } from '../components/reviews/reviews';
// // import { ReviewForm } from '../components/review-form/review-form';
// // import { useUser } from '../context/user-context';

// // export const ReviewsPage = () => {
// //   const { restaurantId } = useParams();
// //   const dispatch = useDispatch();

// //   const restaurant = useSelector((state) =>
// //     selectRestaurantById(state, restaurantId)
// //   );

// //   const status = useSelector((state) =>
// //     selectReviewsStatus(state, restaurantId)
// //   );

// //   const error = useSelector((state) => selectReviewsError(state, restaurantId));
// //   const { user } = useUser();

// //   useEffect(() => {
// //     if (restaurantId) {
// //       dispatch(getReviewsByRestaurantId(restaurantId));
// //     }
// //   }, [restaurantId, dispatch]);

// //   useEffect(() => {
// //     dispatch(getUsers());
// //   }, [dispatch]);

// //   if (status === REQUEST_STATUS.PENDING || status === REQUEST_STATUS.IDLE) {
// //     return <p>Загрузка отзывов…</p>;
// //   }

// //   if (status === REQUEST_STATUS.REJECTED) {
// //     return <p>Ошибка: {error}</p>;
// //   }

// //   if (!restaurant) return <p>Ресторан не найден</p>;

// //   return (
// //     <div>
// //       <h3>Отзывы о {restaurant.name}</h3>
// //       <Reviews reviewIds={restaurant.reviews} />
// //       {user && <ReviewForm restaurantId={restaurantId} />}
// //     </div>
// //   );
// // };

// // src/pages/reviews-page.jsx
// // import { useParams } from 'react-router';
// // import { useGetRestaurantByIdQuery } from '../redux/services/api';
// // import { Reviews } from '../components/reviews/reviews';
// // import { ReviewForm } from '../components/review-form/review-form';
// // import { useUser } from '../context/user-context';

// // export const ReviewsPage = () => {
// //   const { restaurantId } = useParams();
// //   const { user } = useUser();

// //   const {
// //     data: restaurant,
// //     isLoading,
// //     isError,
// //     error,
// //   } = useGetRestaurantByIdQuery(restaurantId);

// //   if (isLoading) {
// //     return <p>Загрузка отзывов…</p>;
// //   }

// //   if (isError) {
// //     return <p>Ошибка: {error?.data?.message || 'Ошибка загрузки отзывов'}</p>;
// //   }

// //   if (!restaurant) {
// //     return <p>Ресторан не найден</p>;
// //   }

// //   return (
// //     <div>
// //       <h3>Отзывы о {restaurant.name}</h3>
// //       <Reviews reviewIds={restaurant.reviews} />
// //       {user && <ReviewForm restaurantId={restaurantId} />}
// //     </div>
// //   );
// // };

// // src/pages/reviews-page.jsx
// import { useParams } from 'react-router';
// import {
//   useGetRestaurantByIdQuery,
//   useGetReviewsByRestaurantIdQuery,
// } from '../redux/services/api';
// import { Reviews } from '../components/reviews/reviews';
// import { ReviewForm } from '../components/review-form/review-form';
// import { useUser } from '../context/user-context';

// export const ReviewsPage = () => {
//   const { restaurantId } = useParams();
//   const { user } = useUser();

//   const { data: restaurant, isLoading: isRestaurantLoading } =
//     useGetRestaurantByIdQuery(restaurantId);

//   const {
//     data: reviews,
//     isLoading: isReviewsLoading,
//     isError,
//     error,
//   } = useGetReviewsByRestaurantIdQuery(restaurantId);

//   if (isRestaurantLoading || isReviewsLoading) {
//     return <p>Загрузка отзывов…</p>;
//   }

//   if (isError) {
//     return <p>Ошибка: {error?.data?.message || 'Ошибка загрузки отзывов'}</p>;
//   }

//   if (!restaurant) {
//     return <p>Ресторан не найден</p>;
//   }

//   return (
//     <div>
//       <h3>Отзывы о {restaurant.name}</h3>
//       <Reviews reviews={reviews} />
//       {user && <ReviewForm restaurantId={restaurantId} />}
//     </div>
//   );
// };

// // src/pages/reviews-page.jsx
// import { useParams } from 'react-router';
// import {
//   useGetRestaurantByIdQuery,
//   useGetReviewsByRestaurantIdQuery,
//   useGetUsersQuery,
// } from '../redux/services/api';
// import { Reviews } from '../components/reviews/reviews';
// import { ReviewForm } from '../components/review-form/review-form';
// import { useUser } from '../context/user-context';
// // import { useState } from 'react';

// export const ReviewsPage = () => {
//   const { restaurantId } = useParams();
//   const { user } = useUser();

//   // ресторан
//   const { data: restaurant, isLoading: isRestaurantLoading } =
//     useGetRestaurantByIdQuery(restaurantId);

//   // отзывы
//   const {
//     data: reviews,
//     isLoading: isReviewsLoading,
//     isError,
//     error,
//   } = useGetReviewsByRestaurantIdQuery(restaurantId);

//   // пользователи
//   const { data: users = [], isLoading: isUsersLoading } = useGetUsersQuery();

//   console.log("USERS FROM SERVER:", users);

//   if (isRestaurantLoading || isReviewsLoading || isUsersLoading) {
//     return <p>Загрузка отзывов…</p>;
//   }

//   if (isError) {
//     return <p>Ошибка: {error?.data?.message || 'Ошибка загрузки отзывов'}</p>;
//   }

//   if (!restaurant) {
//     return <p>Ресторан не найден</p>;
//   }

//   return (
//     <div>
//       <h3>Отзывы о {restaurant.name}</h3>

//       {/* Передаём отзывы + пользователей */}
//       <Reviews reviews={reviews} users={users} />

//       {user && <ReviewForm restaurantId={restaurantId} />}
//     </div>
//   );
// };
// src/pages/reviews-page.jsx
// import { useParams } from 'react-router';
// import {
//   useGetRestaurantByIdQuery,
//   useGetReviewsByRestaurantIdQuery,
//   useGetUsersQuery,
// } from '../redux/services/api';
// import { Reviews } from '../components/reviews/reviews';
// import { ReviewForm } from '../components/review-form/review-form';
// import { useUser } from '../context/user-context';
// import { useState } from 'react';

// export const ReviewsPage = () => {
//   const { restaurantId } = useParams();
//   const { user } = useUser();
//   const [deleteReview] = useDeleteReviewMutation();
//   const handleDelete = async (reviewId) => {
//     await deleteReview(reviewId);
//   };

//   // состояние: какой отзыв редактируем
//   const [editingReview, setEditingReview] = useState(null);

//   // ресторан
//   const { data: restaurant, isLoading: isRestaurantLoading } =
//     useGetRestaurantByIdQuery(restaurantId);

//   // отзывы
//   const {
//     data: reviews,
//     isLoading: isReviewsLoading,
//     isError,
//     error,
//   } = useGetReviewsByRestaurantIdQuery(restaurantId);

//   // пользователи
//   const { data: users = [], isLoading: isUsersLoading } = useGetUsersQuery();

//   if (isRestaurantLoading || isReviewsLoading || isUsersLoading) {
//     return <p>Загрузка отзывов…</p>;
//   }

//   if (isError) {
//     return <p>Ошибка: {error?.data?.message || 'Ошибка загрузки отзывов'}</p>;
//   }

//   if (!restaurant) {
//     return <p>Ресторан не найден</p>;
//   }

//   return (
//     <div>
//       <h3>Отзывы о {restaurant.name}</h3>

//       <Reviews
//         reviews={reviews}
//         users={users}
//         onEdit={(review) => setEditingReview(review)}
//       />

//       {user && (
//         <ReviewForm
//           restaurantId={restaurantId}
//           editingReview={editingReview}
//           onFinishEdit={() => setEditingReview(null)}
//         />
//       )}
//     </div>
//   );
// };
import { useParams } from 'react-router';
import {
  useGetRestaurantByIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useDeleteReviewMutation, // ← добавили импорт
} from '../redux/services/api';
import { Reviews } from '../components/reviews/reviews';
import { ReviewForm } from '../components/review-form/review-form';
import { useUser } from '../context/user-context';
import { useState } from 'react';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const { user } = useUser();

  // удаление отзыва
  const [deleteReview] = useDeleteReviewMutation();
  const handleDelete = async (reviewId) => {
    await deleteReview(reviewId);
  };

  // состояние: какой отзыв редактируем
  const [editingReview, setEditingReview] = useState(null);

  // ресторан
  const { data: restaurant, isLoading: isRestaurantLoading } =
    useGetRestaurantByIdQuery(restaurantId);

  // отзывы
  const {
    data: reviews,
    isLoading: isReviewsLoading,
    isError,
    error,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);

  // пользователи
  const { data: users = [], isLoading: isUsersLoading } = useGetUsersQuery();

  if (isRestaurantLoading || isReviewsLoading || isUsersLoading) {
    return <p>Загрузка отзывов…</p>;
  }

  if (isError) {
    return <p>Ошибка: {error?.data?.message || 'Ошибка загрузки отзывов'}</p>;
  }

  if (!restaurant) {
    return <p>Ресторан не найден</p>;
  }

  return (
    <div>
      <h3>Отзывы о {restaurant.name}</h3>

      <Reviews
        reviews={reviews}
        users={users}
        onEdit={(review) => setEditingReview(review)}
        onDelete={handleDelete} // ← добавили передачу функции удаления
      />

      {user && (
        <ReviewForm
          restaurantId={restaurantId}
          editingReview={editingReview}
          onFinishEdit={() => setEditingReview(null)}
        />
      )}
    </div>
  );
};
