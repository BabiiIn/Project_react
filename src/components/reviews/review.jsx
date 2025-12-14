import { useSelector } from 'react-redux';
import styles from './review.module.css';
import { selectUserById } from '../../redux/entities/users/usersSlice';
import { selectReviewById } from '../../redux/entities/reviews/reviewsSlice';

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  const user = useSelector((state) => selectUserById(state, review?.userId));

  if (!review) return null;

  return (
    <li className={styles.review}>
      <div className={styles.header}>
        <span className={styles.author}>{user ? user.name : 'Аноним'}</span>
        <span className={styles.rating}>Рейтинг: {review.rating}</span>
      </div>
      <p className={styles.text}>{review.text}</p>
    </li>
  );
};
