import { LOAD_PHOTOS } from '../types';

const initialState = {
  allPhotos: [],
  loading: true
};

export const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PHOTOS:
      return {
        ...state,
        allPhotos: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
