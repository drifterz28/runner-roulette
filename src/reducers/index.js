import { combineReducers } from 'redux'
import race from './race-state';
import runners from './runners';
import legs from './legs';

export default combineReducers({
  race,
  runners,
  legs
});
