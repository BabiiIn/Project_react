// import { restaurants } from '../../constants/mock';
import { Layout } from '../layout/layout';
import { RestaurantsPage } from '../pages/restaurants-page';
import styles from './app.module.css';
import { ThemeProvider } from '../../context/theme-context';
import { Header } from '../header/header';
import { UserProvider } from '../../context/user-context';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

export const App = ({ title, debugScroll = false }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <Layout debugScroll={debugScroll}>
            <Header />
            <h1 className={styles.appTitle}>{title}</h1>
            {/* 👇 убираем restaurants пропс */}
            <RestaurantsPage />
            {/* <RestaurantsPage restaurants={restaurants} /> */}
          </Layout>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};
