import styles from "./counter.module.css";
import { Button } from "../button/button";

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
        {label}: <span className={styles.value}>{count}</span>
      </div>

      <div className={styles.controls}>
        <Button type="button" onClick={onIncrement} variant="primary">
          +
        </Button>
        <Button type="button" onClick={onDecrement} variant="primary">
          -
        </Button>
        <Button type="button" onClick={onReset} variant="secondary">
          Сброс
        </Button>
      </div>
    </div>
  );
};
