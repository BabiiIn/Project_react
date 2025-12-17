import { Tabs } from '../tabs/tabs';
import { TabLink } from '../tab-link/tab-link';
import { Outlet } from 'react-router';

export const Restaurant = ({ id, name }) => {
  if (!name) return null;

  return (
    <section>
      <h2>{name}</h2>

      <Tabs>
        <TabLink to={`/restaurants/${id}/menu`}>Меню</TabLink>
        <TabLink to={`/restaurants/${id}/reviews`}>Отзывы</TabLink>
      </Tabs>

      <Outlet />
    </section>
  );
};
