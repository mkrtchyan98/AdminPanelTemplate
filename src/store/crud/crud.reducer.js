import * as actionType from '../types';

const initialState = {
  tags: []
};

export default function crudReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.GET_TAGS: {
      return {
        ...state,
        tags: action.payload
      };
    }
    case actionType.ADD_TAG: {
      return {
        ...state,
        tags: action.payload
      };
    }
    case actionType.DELETE_TAG: {
      return {
        ...state,
        tags: action.payload
      };
    }

    default: {
      return { ...state };
    }
  }
}
