export const saveData = state => {
  console.log('save', state);
};

export const updateFormValues = (name, value) => dispatch => {
  console.log(name, value);
  dispatch({
    type: 'SAVING', name, value
  });
};

export const updateRunners = (index, name) => dispatch => {
  console.log(index, name);
  dispatch({
    type: 'SAVING_RUNNERS', index, name
  });
}
