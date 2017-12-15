import { combineReducers } from 'redux';
import * as fromFoods from './foods/foods';

const rootReducer = combineReducers({
  foods: fromFoods.reducer,
});

export default rootReducer;

//- Selectors
export const getFood = (state, food) => fromFoods.getFood(state.foods, food);
export const getAllFoods = state => fromFoods.getAllFoods(state.foods);
