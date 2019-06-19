export const saveData = state => {
  console.log('save', state);
};

export const updateFormValues = (name, value) => dispatch => {
  console.log(name, value);
  dispatch({
    type: 'SAVING', name, value
  });
};

export const addRunner = (index, name) => dispatch => {
  dispatch({
    type: 'SAVING_RUNNERS', index, name
  });
}

const updateRunner = (runner) => dispatch => {
  console.log('runner', runner)
}

export const runIt = (leg, runner) => dispatch => {
  let runCount = Number(runner.runCount);
  runner.runCount = runCount + 1;
  dispatch({
    type: 'RUN_IT',
    leg, runner
  });
}

export const clearRace = () => dispatch => {
  dispatch({
    type: 'CLEAR'
  });
}
