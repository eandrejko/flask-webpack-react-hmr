import * as fromFoods from './foods';

//- Thunks

export const addFood = () => dispatch => {
  dispatch(fromFoods.addFood());
};

//- Selectors

export const getAllFoods = state => fromFoods.getAllFoods(state.entities.foods);
