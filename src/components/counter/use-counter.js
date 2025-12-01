import { useState } from 'react';

export function useCounter(
  initialValue = 0,
  maxValue = Infinity,
  minValue = 0
) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((c) => (c + 1 <= maxValue ? c + 1 : c));

  const decrement = () => setCount((c) => (c - 1 >= minValue ? c - 1 : c));

  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}
