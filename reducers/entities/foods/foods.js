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
  byId: {},
};

//- Reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case FOOD_ADD:
      return {
        ...state,
        allIds: [...state.allIds, action.food.id],
        byId: { ...state.byId, [action.food.id]: action.food },
      };
    default:
      return state;
  }
}

//- Selectors
export const getFood = (state, food) => state.byId[food];
export const getAllFoods = state => state.allIds.map(id => state.byId[id]);
