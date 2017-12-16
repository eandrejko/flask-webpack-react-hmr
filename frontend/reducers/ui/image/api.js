import * as fromImage from './image';

//- Thunks

export const toggleImage = () => dispatch => {
  dispatch(fromImage.toggleImage());
};

//- Selectors

export const getIsImageShown = state =>
  fromImage.getIsImageShown(state.ui.image);
