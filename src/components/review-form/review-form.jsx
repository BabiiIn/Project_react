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

export const ReviewForm = ({ restaurantId }) => {
  const { form, dispatch } = useForm();
  const { user } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отзыв для ресторана:', restaurantId);
    console.log('Введённые данные:', form);

    // В будущем здесь будет отправка отзыва на сервер
    dispatch({ type: CLEAR_ACTION });
  };

  if (!user) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Имя:
        <input
          type="text"
          value={form.name}
          onChange={(e) =>
            dispatch({ type: UPDATE_NAME_ACTION, payload: e.target.value })
          }
        />
      </label>

      <label>
        Отзыв:
        <textarea
          value={form.text}
          onChange={(e) =>
            dispatch({ type: UPDATE_TEXT_ACTION, payload: e.target.value })
          }
        />
      </label>

      <label>
        <ReviewCounter
          value={form.rating}
          onChange={(newValue) =>
            dispatch({ type: UPDATE_RATING_ACTION, payload: newValue })
          }
        />
      </label>

      <div className={styles.buttons}>
        <Button type="submit" variant="primary">
          Отправить
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => dispatch({ type: CLEAR_ACTION })}
        >
          Очистить
        </Button>
      </div>
    </form>
  );
};
