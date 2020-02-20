import { createStore, combineReducers, applyMiddleware } from 'redux';
import { photoReducer } from './reducers/photo';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  photo: photoReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
