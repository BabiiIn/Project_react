import {
  useForm,
  UPDATE_NAME_ACTION,
  UPDATE_TEXT_ACTION,
  UPDATE_RATING_ACTION,
  CLEAR_ACTION,
} from './use-form';
import { ReviewCounter } from '../counter/review-counter';
import styles from './reviewForm.module.css';
import { Button } from '../button/button';
import { useUser } from '../../context/user-context';

export const ReviewForm = ({
  restaurantId,
  editingReview,
  onFinishEdit,
  onAddReview,
  onUpdateReview,
  isAdding,
  isUpdating,
}) => {
  const { user } = useUser();

  const initialValues = editingReview
    ? {
        name: editingReview.name || '',
        text: editingReview.text,
        rating: editingReview.rating,
      }
    : {
        name: '',
        text: '',
        rating: 5,
      };

  const { form, dispatch } = useForm(initialValues, editingReview?.id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    const payload = {
      restaurantId,
      review: {
        userId: String(user.id),
        text: form.text,
        rating: form.rating,
      },
    };

    if (editingReview) {
      await onUpdateReview({
        reviewId: editingReview.id,
        review: payload.review,
      });

      dispatch({ type: CLEAR_ACTION, payload: initialValues });
      onFinishEdit();
      return;
    }

    await onAddReview(payload);
    dispatch({ type: CLEAR_ACTION, payload: initialValues });
  };

  if (!user) return null;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h4>{editingReview ? 'Редактировать отзыв' : 'Добавить отзыв'}</h4>

      <label>
        Имя:
        <input
          type="text"
          value={form.name}
          onChange={(e) =>
            dispatch({
              type: UPDATE_NAME_ACTION,
              payload: e.target.value,
            })
          }
        />
      </label>

      <label>
        Отзыв:
        <textarea
          value={form.text}
          onChange={(e) =>
            dispatch({
              type: UPDATE_TEXT_ACTION,
              payload: e.target.value,
            })
          }
        />
      </label>

      <label>
        <ReviewCounter
          value={form.rating}
          onChange={(newValue) =>
            dispatch({
              type: UPDATE_RATING_ACTION,
              payload: newValue,
            })
          }
        />
      </label>

      <div className={styles.buttons}>
        <Button
          type="submit"
          variant="primary"
          disabled={isAdding || isUpdating}
        >
          {editingReview
            ? isUpdating
              ? 'Сохранение…'
              : 'Сохранить'
            : isAdding
              ? 'Отправка…'
              : 'Отправить'}
        </Button>

        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            dispatch({ type: CLEAR_ACTION, payload: initialValues });
            onFinishEdit();
          }}
        >
          Отмена
        </Button>
      </div>
    </form>
  );
};
