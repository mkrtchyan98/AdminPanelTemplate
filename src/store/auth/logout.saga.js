import { takeLatest } from 'redux-saga/effects';

import { USER_LOGOUT } from '../types';

function* logoutEffect() {
  yield localStorage.removeItem('token');
}

export default function* logoutWatch() {
  yield takeLatest(USER_LOGOUT, logoutEffect);
}
