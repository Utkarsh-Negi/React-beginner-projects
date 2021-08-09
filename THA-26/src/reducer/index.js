import Reducer from './counter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userState: Reducer,
});

export default rootReducer;
