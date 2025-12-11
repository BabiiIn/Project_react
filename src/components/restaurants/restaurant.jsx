import { useSelector } from 'react-redux';
import { Menu } from '../menu/menu';
import { Reviews } from '../reviews/reviews';
import { ReviewForm } from '../review-form/review-form';
import styles from './restaurant.module.css';

export const Restaurant = ({ restaurant }) => {
  const { id, name, menu, reviews } = restaurant;

  const dishes = useSelector((state) => state.dishes);
  const reviewsData = useSelector((state) => state.reviews);

  if (!name) {
    return null;
  }

  return (
    <div className={styles.restaurant}>
      <h2>{name}</h2>
      <section>
        <h3>Меню</h3>

        <Menu dishes={menu.map((dishId) => dishes[dishId])} />
      </section>

      <section>
        <h3>Отзывы</h3>

        <Reviews reviews={reviews.map((reviewId) => reviewsData[reviewId])} />
        <ReviewForm key={id} restaurantId={id} />
      </section>
    </div>
  );
};
