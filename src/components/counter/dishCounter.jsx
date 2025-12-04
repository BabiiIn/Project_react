import { useCounter } from "./use-counter";
import { Counter } from "./counter";

export const DishCounter = ({ _dishId, isVisible = true }) => {
  const { count, increment, decrement, reset } = useCounter(0, 5, 0); 

  if (!isVisible) {
    return null;
  }

  return (
    <Counter
      count={count}
      onIncrement={increment}
      onDecrement={decrement}
      onReset={reset}
    />
  );
};
