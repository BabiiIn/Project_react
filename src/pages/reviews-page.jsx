import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectRestaurantById } from '../redux/entities/restaurant/restaurantsSlice';
import {
  selectRequestStatus as selectReviewsStatus,
  selectRequestError as selectReviewsError,
} from '../redux/entities/reviews/reviewsSlice';
import { getReviewsByRestaurantId } from '../redux/entities/reviews/get-reviews-by-restaurant-id';
import { getUsers } from '../redux/entities/users/get-users';
import { REQUEST_STATUS } from '../redux/constants/request-status';
import { Reviews } from '../components/reviews/reviews';
import { ReviewForm } from '../components/review-form/review-form';
import { useUser } from '../context/user-context';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const status = useSelector((state) =>
    selectReviewsStatus(state, restaurantId)
  );

  const error = useSelector((state) => selectReviewsError(state, restaurantId));
  const { user } = useUser();

  useEffect(() => {
    if (restaurantId) {
      dispatch(getReviewsByRestaurantId(restaurantId));
    }
  }, [restaurantId, dispatch]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (status === REQUEST_STATUS.PENDING || status === REQUEST_STATUS.IDLE) {
    return <p>Загрузка отзывов…</p>;
  }

  if (status === REQUEST_STATUS.REJECTED) {
    return <p>Ошибка: {error}</p>;
  }

  if (!restaurant) return <p>Ресторан не найден</p>;

  return (
    <div>
      <h3>Отзывы о {restaurant.name}</h3>
      <Reviews reviewIds={restaurant.reviews} />
      {user && <ReviewForm restaurantId={restaurantId} />}
    </div>
  );
};
