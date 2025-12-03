import { Menu } from '../menu/menu';
import { Reviews } from '../reviews/reviews';
import { ReviewForm } from '../review-form/review-form'; // новый импорт

export const RestaurantListItem = ({ restaurant }) => {
  const { id, name, menu, reviews } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <li>
      <h2>{name}</h2>
      <h3>Меню</h3>
      <Menu menu={menu} />
      <h3>Отзывы</h3>
      <Reviews reviews={reviews} />

      <ReviewForm key={id} restaurantId={id} />
    </li>
  );
};
