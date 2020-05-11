import {
  LOGIN_USER,
  REGISTER_USER,
  SIGN_OUT,
  SHOW_ERROR,
  HIDE_ERROR,
} from '../types';
import * as firebase from 'firebase';

export const loginUser = (email, password) => async (dispatch) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);

    return dispatch({
      type: LOGIN_USER,
    });
  } catch (e) {
    return dispatch({
      type: SHOW_ERROR,
      error: e.message,
    });
  }
};

export const registerUser = (email, password) => async (dispatch) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);

    return dispatch({
      type: REGISTER_USER,
    });
  } catch (e) {
    return dispatch({
      type: SHOW_ERROR,
      error: e.message,
    });
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const hideError = () => {
  return {
    type: HIDE_ERROR,
  };
};
