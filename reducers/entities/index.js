import { combineReducers } from 'redux';
import * as fromFoods from './foods/foods';

//- Reducer

export const entities = combineReducers({
  foods: fromFoods.reducer,
});

//- Selectors

export const getFood = (state, food) => fromFoods.getFood(state.foods, food);
export const getAllFoods = state => fromFoods.getAllFoods(state.foods);
