export const Counter = ({
  count,
  onIncrement,
  onDecrement,
  onReset,
  label = 'Количество',
}) => {
  return (
    <div>
      <div style={{ marginBottom: '0.5rem' }}>
        {label}: {count}
      </div>

      <div>
        <button type="button" onClick={onIncrement}>
          +
        </button>
        <button type="button" onClick={onDecrement}>
          -
        </button>
        <button type="button" onClick={onReset}>
          Сброс
        </button>
      </div>
    </div>
  );
};
