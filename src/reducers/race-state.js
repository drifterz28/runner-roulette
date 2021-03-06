const initRaceState = {
  runnerCount: 6,
  raceName: 'Something',
  legCount: 12,
  legsPerRunner: 2,
  currentRunner: '',
  currentLeg: 0,
  hasStarted: false
};
const initState = localStorage.getItem('race') ? JSON.parse(localStorage.getItem('race')) : {};
export function race(state = {...initRaceState, ...initState}, action) {
  if(action.type === 'CLEAR') {
    localStorage.clear();
    return initRaceState;
  } else if(action.type === 'SAVING') {
    const newState = {};
    newState[action.name] = action.value;
    const newRaceState = {...state, ...newState};
		return newRaceState;
	} else {
		return state;
  }
}

export default race;
