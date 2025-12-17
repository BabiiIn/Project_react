import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/dishesSlice';
import { Dish } from './dish';

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  if (!dish) return null;

  return <Dish dishId={id} />;
};
