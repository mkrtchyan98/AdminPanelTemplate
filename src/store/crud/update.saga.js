import { takeEvery, call, delay, put } from 'redux-saga/effects';
import axios from 'axios';
import * as actionType from '../types';

const updateTagAPI = async (user) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer $dd`
    }
  };
  // eslint-disable-next-line no-useless-catch
  try {
    const formData = new FormData();
    formData.append('userName', user.userName);
    formData.append('email', user.email);
    const object = {};
    const json = JSON.stringify(object);
    const result = await axios.put('url', json, config);
    return result.data;
  } catch (err) {
    throw err;
  }
};

function* updateTag(action) {
  console.log(action);
  try {
    const postResponse = yield call(updateTagAPI, action.payload);
    yield put({ type: actionType.UPDATE_TAG, payload: postResponse });
  } catch (err) {
    console.log(err);
  }
}

export default function* updateTagWatch() {
  yield takeEvery(actionType.UPDATE_TAG, updateTag);
}
