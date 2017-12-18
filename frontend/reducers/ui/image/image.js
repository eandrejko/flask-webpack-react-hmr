//- Action Constants

const IMAGE_TOGGLE = 'IMAGE_TOGGLE';

//- Actions

export const toggleImage = () => ({
  type: IMAGE_TOGGLE,
});

//- State

const initialState = {
  isImageShown: true,
};

//- Reducer

export function reducer(state = initialState, action) {
  switch (action.type) {
    case IMAGE_TOGGLE:
      return {
        ...state,
        isImageShown: !state.isImageShown,
      };
    default:
      return state;
  }
}

//- Selectors

export const getIsImageShown = state => state.isImageShown;
