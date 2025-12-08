import { useUser } from '../../context/user-context';
import { Button } from '../button/button';
import styles from './header.module.css';

export const UserControls = () => {
  const { user, login, logout } = useUser();

  return user ? (
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
  );
};
