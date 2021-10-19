import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root.reducer';
import rootSaga from './root.saga';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
/* eslint-enable */
sagaMiddleware.run(rootSaga);

export default store;
