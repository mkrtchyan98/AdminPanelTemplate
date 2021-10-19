import { USER_LOGIN, USER_LOGOUT, USER_AUTH_LOAD } from '../types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isAuthenticated: !!localStorage.token
      };
    case USER_LOGOUT:
      return {
        ...state,
        isUserLoggedd: false
      };
    case USER_AUTH_LOAD:
      return {
        ...state,
        isAuthenticated: !!localStorage.token,
        isUserLoggedd: true,
        user: action.user
      };
    default:
      return state;
  }
};

export default authReducer;
