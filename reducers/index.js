import { combineReducers } from 'redux';
import foods from './foods';

const rootReducer = combineReducers({
  foods,
});

export default rootReducer;
