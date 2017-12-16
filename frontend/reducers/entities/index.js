import { combineReducers } from 'redux';
import * as fromFoods from './foods/foods';

//- Reducer

export const entities = combineReducers({
  foods: fromFoods.reducer,
});

//- Selectors

export const getAllFoods = state => fromFoods.getAllFoods(state.foods);
