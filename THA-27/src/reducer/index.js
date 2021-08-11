import todoreducer from './todoreducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todo: todoreducer,
});

export default rootReducer;
