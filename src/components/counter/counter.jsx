import styles from "./counter.module.css";

export const Counter = ({
  count,
  onIncrement,
  onDecrement,
  onReset,
  label = "Количество",
}) => {
  return (
    <div className={styles.counter}>
      <div className={styles.label}>
        {label}: {count}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          onClick={onIncrement}
          className={styles.button}
        >
          +
        </button>
        <button
          type="button"
          onClick={onDecrement}
          className={styles.button}
        >
          -
        </button>
        <button
          type="button"
          onClick={onReset}
          className={styles.button}
        >
          Сброс
        </button>
      </div>
    </div>
  );
};
