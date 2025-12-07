import styles from './button.module.css';
import classNames from 'classnames';
import { useTheme } from '../../context/theme-context'; // импортируем хук

export const Button = ({
  children,
  type = 'button',
  variant = 'primary', // варианты: primary, secondary
  onClick,
  className,
  ...props
}) => {
  const { theme } = useTheme(); // получаем текущую тему из контекста
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        styles.button,
        styles[variant],
        styles[theme], // добавляем класс темы
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
