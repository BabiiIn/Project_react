import { useSelector } from 'react-redux';
import styles from './review.module.css';

// export const Review = ({ review }) => {

export const Review = ({ review }) => {
  // достаём пользователя по userId
  const user = useSelector((state) => state.users[review.userId]);

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
