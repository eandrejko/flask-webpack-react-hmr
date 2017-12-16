import { combineReducers } from 'redux';
import * as fromImage from './image/image';

export const ui = combineReducers({
  image: fromImage.reducer,
});
