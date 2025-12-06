import styles from './button.module.css';
import classNames from 'classnames';

export const Button = ({
  children,
  type = 'button',
  variant = 'primary', // варианты: primary, secondary
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
