import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as actionType from '../types';

const getTagsAPI = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // eslint-disable-next-line no-useless-catch
  try {
    const result = await axios.get('url', config);
    return result.data;
  } catch (err) {
    throw err;
  }
};

function* fetchTags() {
  try {
    const postsResponse = yield call(getTagsAPI);
    yield put({ type: actionType.GET_TAGS, payload: postsResponse });
  } catch (err) {
    console.log(err);
  }
}

export default function* getTagsWatch() {
  yield takeEvery(actionType.GET_TAGS, fetchTags);
}
