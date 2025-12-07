import { restaurants } from '../../constants/mock';
import { Layout } from '../layout/layout';
import { RestaurantsPage } from '../pages/restaurants-page';
import styles from './app.module.css';

export const App = ({ title, debugScroll = false }) => {
  return (
    <Layout debugScroll={debugScroll}>
      <h1 className={styles.appTitle}>{title}</h1>
      <RestaurantsPage restaurants={restaurants} />
    </Layout>
  );
};
