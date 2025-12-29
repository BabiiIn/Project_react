import { useReducer, useEffect } from 'react';

export const UPDATE_NAME_ACTION = 'UPDATE_NAME_ACTION';
export const UPDATE_TEXT_ACTION = 'UPDATE_TEXT_ACTION';
export const UPDATE_RATING_ACTION = 'UPDATE_RATING_ACTION';
export const CLEAR_ACTION = 'CLEAR_ACTION';

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_NAME_ACTION:
      return { ...state, name: payload };

    case UPDATE_TEXT_ACTION:
      return { ...state, text: payload };

    case UPDATE_RATING_ACTION:
      return { ...state, rating: payload };

    case CLEAR_ACTION:
      return payload;

    default:
      return state;
  }
};

export const useForm = (initialValues, key) => {
  const [form, dispatch] = useReducer(
    reducer,
    initialValues,
    () => initialValues
  );

  useEffect(() => {
    dispatch({ type: CLEAR_ACTION, payload: initialValues });
  }, [key]);

  return { form, dispatch };
};
