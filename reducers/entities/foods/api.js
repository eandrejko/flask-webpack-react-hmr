import * as fromFoods from './foods';

export const addFood = () => dispatch => {
  dispatch(fromFoods.addFood());
};
