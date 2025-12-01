import { restaurants } from '../../constants/mock';
import { Layout } from '../layout/layout';
import { RestaurantTabs } from '../restaurant-tabs/restaurant-tabs';
import { ReviewForm } from '../review-form/review-form';
import { useScrollProgress } from '../scroll-progress/useScrollProgress';
import { ProgressBar } from '../scroll-progress/progressBar';
import { DebugScrollBlock } from '../scroll-progress/debugScrollBlock';

export const App = ({ title, debugScroll = false }) => {
  const progress = useScrollProgress();

  return (
    <Layout sidebar={<div>SIDEBAR</div>}>
      <ProgressBar progress={progress} />

      <div className="some-class" style={{ color: 'blue' }}>
        <h1>{title}</h1>
        <RestaurantTabs restaurants={restaurants} />
        <ReviewForm />
        {debugScroll && <DebugScrollBlock height={3000} />}
      </div>
    </Layout>
  );
};
