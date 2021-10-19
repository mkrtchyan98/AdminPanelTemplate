import { call, put, delay, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { USER_LOGIN } from '../types';
import { showError, hideError } from '../app/app.actions';

const authAPI = async (user) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    email: user.email,
    password: user.password,
    message: 'User not found'
  });
  return body;
};

function* loginWorker(action) {
  try {
    const response = yield call(authAPI, action.user);
    if (response.data) {
      localStorage.setItem('token', response.email);
    } else {
      yield put(showError(response.message));
    }
    yield delay(4000);
    yield put(hideError());
  } catch (err) {
    if (err.response) {
      if (err.response.data.status === 401) {
        yield put(showError('User not found'));
      } else {
        yield put(showError(err.response.data.message));
      }
    } else {
      yield put(showError(err.message));
    }
    yield delay(4000);
    yield put(hideError());
  }
}

export default function* loginWatch() {
  yield takeLatest(USER_LOGIN, loginWorker);
}
