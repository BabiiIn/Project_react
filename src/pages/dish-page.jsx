import { useParams } from 'react-router';
import { DishContainer } from '../components/dish/dish-container';

export const DishPage = () => {
  const { dishId } = useParams();
  return <DishContainer id={dishId} />;
};
