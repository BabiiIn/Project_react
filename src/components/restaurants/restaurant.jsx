import { Menu } from '../menu/menu';
import { Reviews } from '../reviews/reviews';
import { ReviewForm } from '../review-form/review-form';
import styles from './restaurant.module.css';

export const Restaurant = ({ restaurant }) => {
  const { id, name, menu, reviews } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <div className={styles.restaurant}>
      <h2>{name}</h2>
      <section>
        <h3>Меню</h3>
        <Menu dishes={menu} />
      </section>

      <section>
        <h3>Отзывы</h3>
        <Reviews reviews={reviews} />
        <ReviewForm key={id} restaurantId={id} />
      </section>
    </div>
  );
};
