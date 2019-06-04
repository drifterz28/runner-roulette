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

export const updateRunner = (index, runner) => dispatch => {

}

export const clearRace = () => dispatch => {
  dispatch({
    type: 'CLEAR'
  });
}
