import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchUser(action) {
  console.log(action);

}

function* mySaga() {
  yield takeEvery("INCREMENT", fetchUser);
}

export default mySaga;
