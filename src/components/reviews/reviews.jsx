import { Review } from "./review";
import styles from "./reviews.module.css";

export const Reviews = ({ reviews = [] }) => {
  const safeReviews = Array.isArray(reviews) ? reviews : [];

  if (safeReviews.length === 0) {
    return <p>Пока нет отзывов.</p>;
  }

  return (
    <ul className={styles.reviews}>
      {safeReviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
};

