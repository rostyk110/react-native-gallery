import { LOAD_PHOTOS } from '../types';

export const loadPhotos = (url) => async (dispatch) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();

    return dispatch({
      type: LOAD_PHOTOS,
      payload: data.results,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
