//- Action Constants
const FOOD_ADD = 'FOOD_ADD';

//- Actions
export const addFood = food => ({
  type: FOOD_ADD,
  food,
});

//- State
const initialState = {
  byIds: {},
};

//- Reducer
export default function foods(state = initialState, action) {
  switch (action.type) {
    case FOOD_ADD:
      return state;
    default:
      return state;
  }
}

//- Selectors
export const getFood = (state, food) => state.byId[food];
