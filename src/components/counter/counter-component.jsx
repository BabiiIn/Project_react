import { useCounter } from './use-counter';

export const CounterComponent = ({ dishId, isVisible = true }) => {
  const { count, increment, decrement, reset } = useCounter(0, 5);

  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <p>Количество: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Сброс</button>
    </div>
  );
};
