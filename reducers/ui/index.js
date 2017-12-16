import { combineReducers } from 'redux';
import * as fromImage from './image/image';

//- Reducer

export const ui = combineReducers({
  image: fromImage.reducer,
});

//- Selectors

export const getIsImageShown = state => fromImage.getImageShown(state.ui);
