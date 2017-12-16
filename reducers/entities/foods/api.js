import * as fromFoods from './foods';

export const addFood = () =>
  async function(dispatch, getState) {
    dispatch(fromFoods.addFood());
  };
