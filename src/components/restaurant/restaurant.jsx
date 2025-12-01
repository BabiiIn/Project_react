import { Menu } from '../menu/menu';
import { Reviews } from '../reviews/reviews';

export const RestaurantListItem = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

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
    </li>
  );
};
