import { combineReducers } from 'redux';
import * as fromFoods from './foods/foods';

export const entities = combineReducers({
  foods: fromFoods.reducer,
});
