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

const initialState = {
  loading: false,
  lineLoading: false,
  error: '',
  message: '',
  redirectError: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false
      };
    case SHOW_LINE_LOADER:
      return {
        ...state,
        lineLoading: true
      };
    case HIDE_LINE_LOADER:
      return {
        ...state,
        lineLoading: false
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: action.error
      };
    case HIDE_ERROR:
      return {
        ...state,
        error: ''
      };
    case SHOW_SUCCESS:
      return {
        ...state,
        message: action.message
      };
    case HIDE_SUCCESS:
      return {
        ...state,
        message: ''
      };
    case HTTP_404_ERROR:
      return {
        ...state,
        redirectError: true
      };
    default:
      return state;
  }
};

export default appReducer;
