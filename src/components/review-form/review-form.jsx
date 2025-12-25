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
import { useEffect } from 'react';
import {
  useAddReviewMutation,
  useUpdateReviewMutation,
} from '../../redux/services/api';

export const ReviewForm = ({ restaurantId, editingReview, onFinishEdit }) => {
  const { form, dispatch } = useForm();
  const { user } = useUser();

  const [addReview, { isLoading: isAdding }] = useAddReviewMutation();
  const [updateReview, { isLoading: isUpdating }] = useUpdateReviewMutation();

  // Если редактируем — заполняем форму
  useEffect(() => {
    if (editingReview) {
      dispatch({ type: UPDATE_NAME_ACTION, payload: editingReview.name || '' });
      dispatch({ type: UPDATE_TEXT_ACTION, payload: editingReview.text });
      dispatch({
        type: UPDATE_RATING_ACTION,
        payload: editingReview.rating,
      });
    } else {
      dispatch({ type: CLEAR_ACTION });
    }
  }, [editingReview, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    if (editingReview) {
      // режим редактирования
      await updateReview({
        reviewId: editingReview.id,
        review: {
          restaurantId,
          userId: String(user.id),
          text: form.text,
          rating: form.rating,
        },
      });

      // очищаем форму после редактирования
      dispatch({ type: CLEAR_ACTION });
      onFinishEdit();
      return;
    }

    // режим создания
    await addReview({
      restaurantId,
      review: {
        restaurantId,
        userId: String(user.id),
        text: form.text,
        rating: form.rating,
      },
    });

    dispatch({ type: CLEAR_ACTION });
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
            dispatch({ type: CLEAR_ACTION });
            onFinishEdit();
          }}
        >
          Отмена
        </Button>
      </div>
    </form>
  );
};
