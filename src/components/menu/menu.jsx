import { DishCounter } from '../counter/dishCounter';

export const Menu = ({ menu = [] }) => {
  const safeMenu = Array.isArray(menu) ? menu : [];

  if (safeMenu.length === 0) {
    return <p>Меню пока пусто.</p>;
  }

  return (
    <ul>
      {safeMenu.map((dish) => (
        <li key={dish.id}>
          {dish.name}
          <DishCounter dishId={dish.id} />
        </li>
      ))}
    </ul>
  );
};
