//- Action Constants
const FOOD_ADD = 'FOOD_ADD';

//- Actions
export const addFood = food => ({
  type: FOOD_ADD,
  food,
});

//- State
const initialState = {
  allIds: [],
  byIds: {},
};

//- Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FOOD_ADD:
      return {
        ...state,
        allIds: [...state.allIds, food.id],
        byIds: { ...state.byIds, [food.id]: food },
      };
    default:
      return state;
  }
}

//- Selectors
export const getFood = (state, food) => state.byId[food];
