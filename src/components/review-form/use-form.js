import { useReducer } from "react";

const INITIAL_FORM = {
  name: "",
  text: "",
  rating: 5,
};

const UPDATE_NAME_ACTION = "UPDATE_NAME_ACTION";
const UPDATE_TEXT_ACTION = "UPDATE_TEXT_ACTION";
const UPDATE_RATING_ACTION = "UPDATE_RATING_ACTION";
const CLEAR_ACTION = "CLEAR_ACTION";

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
      return INITIAL_FORM;
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);
  return { form, dispatch };
};

export {
  UPDATE_NAME_ACTION,
  UPDATE_TEXT_ACTION,
  UPDATE_RATING_ACTION,
  CLEAR_ACTION,
};
