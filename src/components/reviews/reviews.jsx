import { Review } from './review';
import styles from './reviews.module.css';

export const Reviews = ({ reviews = [], users = [], onEdit, onDelete }) => {
  const safeReviews = Array.isArray(reviews) ? reviews : [];
  const safeUsers = Array.isArray(users) ? users : [];

  if (safeReviews.length === 0) {
    return <p>Пока нет отзывов.</p>;
  }

  return (
    <ul className={styles.reviews}>
      {safeReviews.map((review) => {
        const user = safeUsers.find((u) => u.id === review.userId);

        return (
          <Review
            key={review.id}
            review={review}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};
