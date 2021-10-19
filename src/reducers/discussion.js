import {
    CREATE_DISCUSSION,
    RETRIEVE_DISCUSSIONS,
    UPDATE_DISCUSSION,
    DELETE_DISCUSSION,
    DELETE_ALL_DISCUSSIONS,
  } from "../actions/types";
  
  const initialState = [];
  
  const discussionReducer = (discussions = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_DISCUSSION:
        return [...discussions, payload];
  
      case RETRIEVE_DISCUSSIONS:
        return payload;
  
      case UPDATE_DISCUSSION:
        return discussions.map((discussion) => {
          if (discussion.id === payload.id) {
            return {
              ...discussion,
              ...payload,
            };
          } else {
            return discussion;
          }
        });
  
      case DELETE_DISCUSSION:
        return discussions.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_DISCUSSIONS:
        return [];
  
      default:
        return discussions;
    }
  };
  
  export default discussionReducer;