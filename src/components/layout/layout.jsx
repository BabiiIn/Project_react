import { ScrollProgressContainer } from '../scroll-progress/scrollProgressContainer';
import { DebugScrollBlock } from '../scroll-progress/debugScrollBlock';
import styles from './layout.module.css';
import { Cart } from '../cart/cart';
import { Outlet } from 'react-router';
import { Header } from '../header/header';

export const Layout = ({ debugScroll = false }) => {
  return (
    <div className={styles.layout}>
      <ScrollProgressContainer />
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      {/* <Cart /> */}
      {debugScroll && <DebugScrollBlock height={3000} />}
      <footer className={styles.footer}>
        <p>© 2025 My App — All rights reserved</p>
      </footer>
    </div>
  );
};
