import { all } from 'redux-saga/effects';
import loginWatch from './auth/auth.saga';
import logoutWatch from './auth/logout.saga';
import addTagWatch from './crud/create.saga';
import updateTagWatch from './crud/update.saga';
import deleteTagWatch from './crud/delete.saga';
import getTagsWatch from './crud/getTags.saga';

function* rootSaga() {
  yield all([
    loginWatch(),
    logoutWatch(),
    updateTagWatch(),
    deleteTagWatch(),
    addTagWatch(),
    getTagsWatch()
  ]);
}

export default rootSaga;
