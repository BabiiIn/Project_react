import { restaurants } from '../../constants/mock';
import { Reviews } from '../reviews/reviews';
import { RestaurantListItem } from '../restaurant/restaurant';
import { Layout } from '../layout/layout';
import { RestaurantTabs } from '../restaurant-tabs/restaurant-tabs';

export const App = ({ title }) => {
  return (
    <Layout sidebar={<div>SIDEBAR</div>}>
      <div className="some-class" style={{ color: 'red' }}>
        <h1>{title}</h1>
        <RestaurantTabs restaurants={restaurants} />
      </div>
      <div>footer</div>
    </Layout>
  );
};
