import * as fromFoods from './foods';

export const addFood = food => async (dispatch, getState) => {
  dispatch(fromFoods.addFood(food));
};
