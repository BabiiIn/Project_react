import {
  useForm,
  UPDATE_NAME_ACTION,
  UPDATE_TEXT_ACTION,
  UPDATE_RATING_ACTION,
  CLEAR_ACTION,
} from './use-form';
import { ReviewCounter } from '../counter/reviewCounter';

export const ReviewForm = () => {
  const { form, dispatch } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Введённые данные:', form);
    dispatch({ type: CLEAR_ACTION });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        maxWidth: '300px',
      }}
    >
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

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button type="submit">Отправить</button>
        <button type="button" onClick={() => dispatch({ type: CLEAR_ACTION })}>
          Очистить
        </button>
      </div>
    </form>
  );
};
