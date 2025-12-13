import { useSelector } from 'react-redux';
import { Menu } from '../menu/menu';
import { Reviews } from '../reviews/reviews';
import { ReviewForm } from '../review-form/review-form';
import styles from './restaurant.module.css';
import { selectRestaurantById } from '../../redux/entities/restaurant/restaurantSlice';

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  const { id, name, menu, reviews } = restaurant;
  const menuIds = Array.isArray(menu) ? menu : [];
  const reviewIds = Array.isArray(reviews) ? reviews : [];

  return (
    <div className={styles.restaurant}>
      <h2>{name}</h2>

      <section>
        <h3>Меню</h3>
        <Menu dishIds={menuIds} />
      </section>

      <section>
        <h3>Отзывы</h3>
        <Reviews reviewIds={reviewIds} />
        <ReviewForm key={id} restaurantId={id} />
      </section>
    </div>
  );
};
