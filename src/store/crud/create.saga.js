import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as actionType from '../types';

const createTagAPI = async ({ createdData }) => {
  const createTag = 'url';
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // eslint-disable-next-line no-useless-catch
  try {
    const body = await createdData;
    const result = await axios.post(`${createTag}`, body, config);
    return result.data;
  } catch (err) {
    throw err;
  }
};

function* addTag(action) {
  console.log(action);
  try {
    const postResponse = yield call(createTagAPI, action.payload);
    yield put({ type: actionType.ADD_TAG, payload: postResponse });
  } catch (err) {
    console.log(err);
  }
}

export default function* addTagWatch() {
  yield takeEvery(actionType.ADD_TAG, addTag);
}
