import * as fromImage from './image';

export const toggleImage = () => dispatch => {
  dispatch(fromImage.toggleImage());
};
