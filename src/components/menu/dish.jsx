// src/components/dish/dish.jsx
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/dishesSlice";
import { useUser } from "../../context/user-context";
import { DishCounter } from "../counter/dish-counter";
import styles from "./dish.module.css";

export const Dish = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const { user } = useUser();

  if (!dish) return null;

  return (
    <article className={styles.dish}>
      <header className={styles.header}>
        <h2 className={styles.name}>{dish.name}</h2>
        <span className={styles.price}>{dish.price} ₽</span>
      </header>

      {dish.ingredients?.length > 0 && (
        <section className={styles.ingredientsSection}>
          <h3 className={styles.ingredientsTitle}>Ингредиенты</h3>
          <ul className={styles.ingredients}>
            {dish.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
        </section>
      )}

      {/* 👇 теперь счётчик под ингредиентами */}
      {user && (
        <div className={styles.counter}>
          <DishCounter dishId={dish.id} />
        </div>
      )}
    </article>
  );
};
