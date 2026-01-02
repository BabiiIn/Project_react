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
