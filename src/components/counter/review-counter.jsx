import { Counter } from './counter';


export const ReviewCounter = ({
  value,
  onChange,
  isVisible = true,
  min = 1,
  max = 5,
}) => {
  if (!isVisible) return null;

  const handleIncrement = () => onChange(Math.min(max, value + 1));
  const handleDecrement = () => onChange(Math.max(min, value - 1));
  const handleReset = () => onChange(min);

  return (
    <Counter
      count={value}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onReset={handleReset}
      label="Рейтинг"
    />
  );
};





