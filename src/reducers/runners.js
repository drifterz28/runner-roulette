const initState = localStorage.getItem('runners') ? JSON.parse(localStorage.getItem('runners')) : {};
export function runners(state = initState, action) {
  if(action.type === 'SAVING_RUNNERS') {
    const index = action.index;
    const newState = {...state, [index]: {name: action.name, runCount: 0, usedSkip: false}};
    localStorage.setItem('runners', JSON.stringify(newState));
    return newState;
  } else {
		return state;
  }
}

export default runners;
