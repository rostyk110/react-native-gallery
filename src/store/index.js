import { createStore, combineReducers, applyMiddleware } from 'redux';
import { photoReducer } from './reducers/photo';
import { userReducer } from './reducers/user';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  photo: photoReducer,
  users: userReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
