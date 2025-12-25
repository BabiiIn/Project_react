// import { Review } from './review';
// import styles from './reviews.module.css';

// export const Reviews = ({ reviewIds = [] }) => {
//   const safeReviewIds = Array.isArray(reviewIds) ? reviewIds : [];

//   if (safeReviewIds.length === 0) {
//     return <p>Пока нет отзывов.</p>;
//   }

//   return (
//     <ul className={styles.reviews}>
//       {safeReviewIds.map((id) => (
//         <Review key={id} reviewId={id} />
//       ))}
//     </ul>
//   );
// };

// src/components/reviews/reviews.jsx
// import { Review } from './review';
// import styles from './reviews.module.css';

// export const Reviews = ({ reviews = [] }) => {
//   const safeReviews = Array.isArray(reviews) ? reviews : [];

//   if (safeReviews.length === 0) {
//     return <p>Пока нет отзывов.</p>;
//   }

//   return (
//     <ul className={styles.reviews}>
//       {safeReviews.map((review) => (
//         <Review key={review.id} reviewId={review.id} />
//       ))}
//     </ul>
//   );
// };

// // src/components/reviews/reviews.jsx
// import { Review } from './review';
// import styles from './reviews.module.css';

// export const Reviews = ({ reviews = [] }) => {
//   const safeReviews = Array.isArray(reviews) ? reviews : [];

//   if (safeReviews.length === 0) {
//     return <p>Пока нет отзывов.</p>;
//   }

//   return (
//     <ul className={styles.reviews}>
//       {safeReviews.map((review) => (
//         <Review key={review.id} review={review} />
//       ))}
//     </ul>
//   );
// };
// src/components/reviews/reviews.jsx
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
