import styles from './button.module.css';
import classNames from 'classnames';
import { useTheme } from '../../context/theme-context';

export const Button = ({
  children,
  type = 'button',
  variant = 'primary', // варианты: primary, secondary
  onClick,
  className,
  ...props
}) => {
  const { theme } = useTheme();
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        styles.button,
        styles[variant],
        styles[theme],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
