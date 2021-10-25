import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import appReducer from './app/app.reducer';
import crudReducer from './crud/crud.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  crudTag: crudReducer
});

export default rootReducer;
