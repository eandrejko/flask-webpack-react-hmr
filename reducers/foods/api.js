import * as fromFoods from './foods';

export const addFood = food =>
  async function(dispatch, getState) {
    console.log('got here');
    dispatch(fromFoods.addFood(food));
  };
