import { combineReducers } from 'redux'
import raceState from './race-state';
import runners from './runners';
import legs from './legs';

export default combineReducers({
  raceState,
  runners,
  legs
});
