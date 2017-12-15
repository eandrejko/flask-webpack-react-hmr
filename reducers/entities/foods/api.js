import * as fromFoods from './foods';

export const addFood = food =>
  async function(dispatch, getState) {
    dispatch(fromFoods.addFood(food));
  };
