import { useTheme } from '../../context/theme-context';
import { Button } from '../button/button';
import { useUser } from '../../context/user-context';
import styles from "./header.module.css";

export const Header = () => {
  const { toggleTheme } = useTheme();
  const { user, login, logout } = useUser();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My App</h1>
      <Button onClick={toggleTheme} variant="secondary">
        Switch Theme
      </Button>

      {user ? (
        <>
          <span className={styles.userName}>{user.name}</span>
          <Button onClick={logout} variant="primary">
            Logout
          </Button>
        </>
      ) : (
        <Button onClick={login} variant="primary">
          Login
        </Button>
      )}
    </header>
  );
};
