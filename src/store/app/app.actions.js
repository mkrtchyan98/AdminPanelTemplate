import {
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  HIDE_ERROR,
  SHOW_SUCCESS,
  HIDE_SUCCESS,
  HTTP_404_ERROR,
  SHOW_LINE_LOADER,
  HIDE_LINE_LOADER
} from '../types';

export const showLoader = () => ({
  type: SHOW_LOADER
});

export const hideLoader = () => ({
  type: HIDE_LOADER
});

export const showLineLoader = () => ({
  type: SHOW_LINE_LOADER
});

export const hideLineLoader = () => ({
  type: HIDE_LINE_LOADER
});

export const showError = (error) => ({
  type: SHOW_ERROR,
  error
});

export const hideError = () => ({
  type: HIDE_ERROR
});

export const showSuccess = (message) => ({
  type: SHOW_SUCCESS,
  message
});

export const hideSuccess = () => ({
  type: HIDE_SUCCESS
});

export const redirectTo404 = () => ({
  type: HTTP_404_ERROR
});
