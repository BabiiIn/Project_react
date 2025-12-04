import styles from './review.module.css';

export const Review = ({ review }) => {
  return (
    <li className={styles.review}>
      <div className={styles.header}>
        <span className={styles.author}>{review.user}</span>
        <span className={styles.rating}>Рейтинг: {review.rating}</span>
      </div>
      <p className={styles.text}>{review.text}</p>
    </li>
  );
};
