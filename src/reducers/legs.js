const initRaceState = [];
const initState = localStorage.getItem('legs') ? JSON.parse(localStorage.getItem('legs')) : [];
export function raceState(state = [...initRaceState, ...initState], action) {
  if(action.type === 'CLEAR') {
    return [];
  } else if(action.type === 'RUN_IT') {
    const newState = [];
    const newRaceState = [...state, action.runner.name];
		return newRaceState;
	} else {
		return state;
  }
}

export default raceState;
