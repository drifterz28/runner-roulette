import { takeEvery, select } from 'redux-saga/effects'

function* mySaga() {
  yield takeEvery('*', function* saver(action) {
    const state = yield select();
    console.log('action', action);
    console.log('state', state);
    localStorage.setItem('runners', JSON.stringify(state.runners));
    localStorage.setItem('race', JSON.stringify(state.race));
    localStorage.setItem('legs', JSON.stringify(state.legs));
  });
}

export default mySaga;
