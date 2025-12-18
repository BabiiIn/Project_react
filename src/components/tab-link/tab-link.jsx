import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './tab-link.module.css';

export const TabLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.root, {
          [styles.isActive]: isActive,
        })
      }
    >
      {children}
    </NavLink>
  );
};
