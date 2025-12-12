import { Review } from "./review";
import styles from "./reviews.module.css";

export const Reviews = ({ reviewIds = [] }) => {
  const safeReviewIds = Array.isArray(reviewIds) ? reviewIds : [];

  if (safeReviewIds.length === 0) {
    return <p>Пока нет отзывов.</p>;
  }

  return (
    <ul className={styles.reviews}>
      {safeReviewIds.map((id) => (
        <Review key={id} reviewId={id} />
      ))}
    </ul>
  );
};
