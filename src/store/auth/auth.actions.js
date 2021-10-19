import { USER_LOGIN, USER_LOGOUT, USER_AUTH_LOAD } from '../types';

export const userLogin = (user) => ({
  type: USER_LOGIN,
  user
});

export const userLogout = () => ({
  type: USER_LOGOUT
});

export const userAuthLoad = (user) => ({
  type: USER_AUTH_LOAD,
  user
});
