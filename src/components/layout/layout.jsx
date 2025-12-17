import { ScrollProgressContainer } from '../scroll-progress/scrollProgressContainer';
import { DebugScrollBlock } from '../scroll-progress/debugScrollBlock';
import styles from './layout.module.css';
import { Cart } from '../cart/cart';
import { Outlet } from 'react-router';
import { Header } from '../header/header';

export const Layout = ({ debugScroll = true }) => {
  return (
    <div className={styles.layout}>
      <ScrollProgressContainer />
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Cart />
      {debugScroll && <DebugScrollBlock height={3000} />}
      <footer className={styles.footer}>
        <p>My App Footer</p>
      </footer>
    </div>
  );
};
