import { 
  GET_TAGS,
  ADD_TAG,
  UPDATE_TAG,
  DELETE_TAG,
}
export const getTags = () => {
  return {
      type: GET_TAGS,
  };
};
export const addTag = (data) => {
  return {
      type: ADD_TAG, payload: data
  };
};
export const updateTag = (data) => {
  return {
      type: UPDATE_TAG, payload: data
  };
};
export const deleteTag = (id) => {
  return {
      type: DELETE_TAG, payload: id
  };
};
