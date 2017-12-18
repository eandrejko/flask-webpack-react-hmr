import { combineReducers } from 'redux';
import { entities } from './entities';
import { ui } from './ui';

export const rootReducer = combineReducers({
  entities,
  ui,
});
