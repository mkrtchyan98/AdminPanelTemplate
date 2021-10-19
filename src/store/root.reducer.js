import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import appReducer from './app/app.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer
});

export default rootReducer;
