import { Menu } from '../menu/menu';
import { Reviews } from '../reviews/reviews';
import { ReviewForm } from '../review-form/review-form';
import styles from './restaurant.module.css';

export const Restaurant = ({ restaurant }) => {
  const { id, name, menu, reviews } = restaurant ?? {};

  const menuIds = Array.isArray(menu) ? menu : [];
  const reviewIds = Array.isArray(reviews) ? reviews : [];

  if (!name) {
    return null;
  }

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
