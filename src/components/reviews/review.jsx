// // import { useSelector } from 'react-redux';
// // import styles from './review.module.css';
// // import { selectUserById } from '../../redux/entities/users/usersSlice';
// // import { selectReviewById } from '../../redux/entities/reviews/reviewsSlice';

// // export const Review = ({ reviewId }) => {
// //   const review = useSelector((state) => selectReviewById(state, reviewId));
// //   const user = useSelector((state) => selectUserById(state, review?.userId));

// //   if (!review) return null;

// //   return (
// //     <li className={styles.review}>
// //       <div className={styles.header}>
// //         <span className={styles.author}>{user ? user.name : 'Аноним'}</span>
// //         <span className={styles.rating}>Рейтинг: {review.rating}</span>
// //       </div>
// //       <p className={styles.text}>{review.text}</p>
// //     </li>
// //   );
// // };

// // src/components/reviews/review.jsx
// // import styles from './review.module.css';
// // import { useSelector } from 'react-redux';
// // import { selectUserById } from '../../redux/entities/users/usersSlice';

// // export const Review = ({ review }) => {
// //   const user = useSelector((state) => selectUserById(state, review.userId));

// //   return (
// //     <li className={styles.review}>
// //       <div className={styles.header}>
// //         <span className={styles.author}>{user ? user.name : 'Аноним'}</span>
// //         <span className={styles.rating}>Рейтинг: {review.rating}</span>
// //       </div>
// //       <p className={styles.text}>{review.text}</p>
// //     </li>
// //   );
// // };
// import styles from './review.module.css';
// import { useGetUserByIdQuery } from '../../redux/services/api';

// export const Review = ({ review }) => {
//   const { data: user } = useGetUserByIdQuery(review.userId);

//   return (
//     <li className={styles.review}>
//       <div className={styles.header}>
//         <span className={styles.author}>{user ? user.name : 'Аноним'}</span>
//         <span className={styles.rating}>Рейтинг: {review.rating}</span>
//       </div>
//       <p className={styles.text}>{review.text}</p>
//     </li>
//   );
// };
// src/components/reviews/review.jsx
// import styles from './review.module.css';

// export const Review = ({ review, user }) => {
//   return (
//     <li className={styles.review}>
//       <div className={styles.header}>
//         <span className={styles.author}>
//           {user ? user.name : 'Аноним'}
//         </span>
//         <span className={styles.rating}>
//           Рейтинг: {review.rating}
//         </span>
//       </div>

//       <p className={styles.text}>{review.text}</p>
//     </li>
//   );
// };

// src/components/reviews/review.jsx
import styles from './review.module.css';
import { useUser } from '../../context/user-context';

export const Review = ({ review, user: author, onEdit, onDelete }) => {
  const { user } = useUser();

  const canEdit = user && user.id === review.userId;

  return (
    <li className={styles.review}>
      <div className={styles.header}>
        <span className={styles.author}>{author ? author.name : 'Аноним'}</span>
        <span className={styles.rating}>Рейтинг: {review.rating}</span>
      </div>

      <p className={styles.text}>{review.text}</p>

      
      {canEdit && (
        <div className={styles.actions}>
          <button className={styles.editButton} onClick={() => onEdit(review)}>
            ✏️ Редактировать
          </button>

          <button
            className={styles.deleteButton}
            onClick={() => onDelete(review.id)}
          >
            🗑 Удалить
          </button>
        </div>
      )}
    </li>
  );
};
