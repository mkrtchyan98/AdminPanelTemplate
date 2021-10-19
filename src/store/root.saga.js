import { all } from 'redux-saga/effects';
import loginWatch from './auth/auth.saga';
import logoutWatch from './auth/logout.saga';

function* rootSaga() {
  yield all([loginWatch(), logoutWatch()]);
}

export default rootSaga;
