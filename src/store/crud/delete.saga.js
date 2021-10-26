import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as actionType from '../types';

const deleteTagAPI = async ({ id }) => {
  const body = 'id';
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data: body
  };
  // eslint-disable-next-line no-useless-catch
  try {
    const result = await axios.delete('url', config);
    return result.data;
  } catch (err) {
    throw err;
  }
};

function* deleteTag(action) {
  console.log(action);
  try {
    const postResponse = yield call(deleteTagAPI, action.payload);
    yield put({ type: actionType.DELETE_TAG, payload: postResponse });
  } catch (err) {
    console.log(err);
  }
}

export default function* deleteTagWatch() {
  yield takeEvery(actionType.DELETE_TAG, deleteTag);
}
