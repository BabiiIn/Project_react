import { useParams } from 'react-router';
import {
  useGetRestaurantByIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useDeleteReviewMutation,
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
        onDelete={handleDelete}
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
