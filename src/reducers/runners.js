const initState = localStorage.getItem('runners') ? JSON.parse(localStorage.getItem('runners')) : {};
function runners(state = initState, action) {
  switch(action.type) {
    case 'SAVING_RUNNERS':
      const index = action.index;
      const newState = {...state, [index]: {name: action.name, runCount: 0, usedSkip: false}};
      return newState;
    case 'CLEAR':
      return {};
    case 'UPDATE_RUNNER':
      return state;
    default:
      return state;
  }
}

export default runners;
