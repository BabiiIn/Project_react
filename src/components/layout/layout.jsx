import { ScrollProgressContainer } from '../scroll-progress/scrollProgressContainer';
import { DebugScrollBlock } from '../scroll-progress/debugScrollBlock';
import styles from './layout.module.css';

export const Layout = ({ children, debugScroll = false }) => {
  return (
    <div className={styles.layout}>
      <ScrollProgressContainer />

      <header className={styles.header}>
        <h1>My App: Delivery from Restaurants</h1>
      </header>

      <main className={styles.main}>{children}</main>

      {debugScroll && <DebugScrollBlock height={3000} />}

      <footer className={styles.footer}>
        <p>My App Footer</p>
      </footer>
    </div>
  );
};
