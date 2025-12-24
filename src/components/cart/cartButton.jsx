import styles from './cartButton.module.css';

export const CartButton = ({ onClick, children, disabled = false }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};
