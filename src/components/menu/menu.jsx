import { CounterComponent } from '../counter/counter-component';

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
          <CounterComponent dishId={dish.id} />
        </li>
      ))}
    </ul>
  );
};
