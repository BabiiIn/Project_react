// import { useSelector, useDispatch } from 'react-redux';
// import { Counter } from './counter';
// import {
//   addToCart,
//   removeFromCart,
//   resetDish,
// } from '../../redux/entities/cart/cartSlice';
// import { selectCartItemById } from '../../redux/entities/cart/cartSelectors';
// import { getDishById } from '../../redux/entities/dishes/get-dish-by-id';

// export const DishCounter = ({ dishId, isVisible = true }) => {
//   const dispatch = useDispatch();

//   const cartItem = useSelector((state) => selectCartItemById(state, dishId));
//   const count = cartItem ? cartItem.count : 0;

//   if (!isVisible) {
//     return null;
//   }

//   const handleIncrement = () => {
//     dispatch(addToCart(dishId));
//     dispatch(getDishById(dishId));
//   };

//   const handleDecrement = () => {
//     dispatch(removeFromCart(dishId));
//   };

//   const handleReset = () => {
//     dispatch(resetDish(dishId));
//   };

//   return (
//     <Counter
//       count={count}
//       onIncrement={handleIncrement}
//       onDecrement={handleDecrement}
//       onReset={handleReset}
//     />
//   );
// };

import { useSelector } from 'react-redux';
import { Counter } from './counter';
import { selectCartItemById } from '../../redux/entities/cart/cartSelectors';
import { useCartActions } from '../../hooks/useCartActions';

export const DishCounter = ({ dishId, isVisible = true }) => {
  const { add, remove, reset } = useCartActions();

  const cartItem = useSelector((state) => selectCartItemById(state, dishId));
  const count = cartItem ? cartItem.count : 0;

  if (!isVisible) return null;

  return (
    <Counter
      count={count}
      onIncrement={() => add(dishId)}
      onDecrement={() => remove(dishId)}
      onReset={() => reset(dishId)}
    />
  );
};
