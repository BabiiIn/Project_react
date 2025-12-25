// // src/redux/services/api.js
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const api = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
//   tagTypes: ['Restaurants', 'Dishes', 'Reviews', 'Users'],
//   endpoints: () => ({}),
// });

// // ---- Restaurants endpoints ----
// export const restaurantsApi = api.injectEndpoints({
//   endpoints: (build) => ({
//     getRestaurants: build.query({
//       query: () => '/api/restaurants',
//       providesTags: ['Restaurants'],
//     }),

//     getRestaurantById: build.query({
//       query: (id) => `/api/restaurant/${id}`,
//       providesTags: (result, error, id) => [{ type: 'Restaurants', id }],
//     }),

//     // 🔥 БЛЮДА
//     getDishesByRestaurantId: build.query({
//       query: (restaurantId) => `/api/dishes?restaurantId=${restaurantId}`,
//       providesTags: (result, error, restaurantId) => [
//         { type: 'Dishes', id: restaurantId },
//       ],
//     }),

//     // 🔥 ОТЗЫВЫ
//     getReviewsByRestaurantId: build.query({
//       query: (restaurantId) => `/api/reviews?restaurantId=${restaurantId}`,
//       providesTags: (result, error, restaurantId) => [
//         { type: 'Reviews', id: restaurantId },
//       ],
//     }),
//     // 🔥 ПОЛЬЗОВАТЕЛИ
//     getUsers: build.query({
//       query: () => '/api/users',
//       providesTags: ['Users'],
//     }),

//     getUserById: build.query({
//       query: (id) => `/api/users/${id}`,
//       providesTags: (result, error, id) => [{ type: 'Users', id }],
//     }),
//   }),
// });

// // хуки, которые мы позже начнём использовать в компонентах
// export const {
//   useGetRestaurantsQuery,
//   useGetRestaurantByIdQuery,
//   useGetDishesByRestaurantIdQuery,
//   useGetReviewsByRestaurantIdQuery,
//   useGetUsersQuery,
//   useGetUserByIdQuery,
// } = restaurantsApi;
// src/redux/services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Restaurants', 'Dishes', 'Reviews', 'Users'],
  endpoints: () => ({}),
});

// ---- Endpoints ----
export const restaurantsApi = api.injectEndpoints({
  endpoints: (build) => ({
    // 🔥 РЕСТОРАНЫ
    getRestaurants: build.query({
      query: () => '/api/restaurants',
      providesTags: ['Restaurants'],
    }),

    getRestaurantById: build.query({
      query: (id) => `/api/restaurant/${id}`,
      providesTags: (result, error, id) => [{ type: 'Restaurants', id }],
    }),

    // 🔥 БЛЮДА
    getDishesByRestaurantId: build.query({
      query: (restaurantId) => `/api/dishes?restaurantId=${restaurantId}`,
      providesTags: (result, error, restaurantId) => [
        { type: 'Dishes', id: restaurantId },
      ],
    }),

    // 🔥 ОТЗЫВЫ
    getReviewsByRestaurantId: build.query({
      query: (restaurantId) => `/api/reviews?restaurantId=${restaurantId}`,
      providesTags: (result, error, restaurantId) => [
        { type: 'Reviews', id: restaurantId },
      ],
    }),

    // ⭐ ДОБАВЛЕНИЕ ОТЗЫВА
    addReview: build.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/api/review/${restaurantId}`,
        method: 'POST',
        body: review,
      }),
      invalidatesTags: (result, error, { restaurantId }) => [
        { type: 'Reviews', id: restaurantId },
      ],
    }),

    // 🔥 ПОЛЬЗОВАТЕЛИ
    getUsers: build.query({
      query: () => '/api/users',
      providesTags: ['Users'],
    }),

    getUserById: build.query({
      query: (id) => `/api/users/${id}`,
      providesTags: (result, error, id) => [{ type: 'Users', id }],
    }),
    // ⭐ ОБНОВЛЕНИЕ ОТЗЫВА
    updateReview: build.mutation({
      query: ({ reviewId, review }) => ({
        url: `/api/review/${reviewId}`,
        method: 'PATCH',
        body: review,
      }),
      invalidatesTags: ['Reviews'],
    }),
    
    deleteReview: build.mutation({
      query: (reviewId) => ({
        url: `/api/review/${reviewId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Reviews'],
    }),
  }),
});

// ---- Hooks ----
export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetDishesByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useAddReviewMutation,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = restaurantsApi;
