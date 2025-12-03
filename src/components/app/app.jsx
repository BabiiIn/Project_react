import { restaurants } from '../../constants/mock';
import { Layout } from '../layout/layout';
import { RestaurantTabs } from '../restaurant-tabs/restaurant-tabs';
import { ReviewForm } from '../review-form/review-form';
import { DebugScrollBlock } from '../scroll-progress/debugScrollBlock';
import { ScrollProgressContainer } from '../scroll-progress/scrollProgressContainer';

export const App = ({ title, debugScroll = false }) => {
  return (
    <Layout sidebar={<div>SIDEBAR</div>}>
      <ScrollProgressContainer />

      <div className="some-class" style={{ color: 'blue' }}>
        <h1>{title}</h1>
        <RestaurantTabs restaurants={restaurants} />

        {debugScroll && <DebugScrollBlock height={3000} />}
      </div>
    </Layout>
  );
};
