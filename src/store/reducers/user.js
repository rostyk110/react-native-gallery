import { REGISTER_USER, SIGN_OUT, SHOW_ERROR, HIDE_ERROR } from '../types';
import { LOGIN_USER } from '../types';

const initialState = {
  isLogged: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogged: true,
      };
    case REGISTER_USER:
      return {
        ...state,
        isLogged: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        isLogged: false,
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: { msg: action.error },
      };
    case HIDE_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
