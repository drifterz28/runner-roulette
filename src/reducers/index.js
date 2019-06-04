import { combineReducers } from 'redux'
import raceState from './race-state';
import runners from './runners';

export default combineReducers({
  raceState,
  runners
});
