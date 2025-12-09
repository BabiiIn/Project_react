import styles from './header.module.css';
import { ThemeSwitcher } from './themeSwitcher';
import { UserControls } from './userControls';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My App</h1>
      <ThemeSwitcher />
      <UserControls />
    </header>
  );
};
