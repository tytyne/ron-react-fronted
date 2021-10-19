import {
    CREATE_DISCUSSIONSPACEOWNER,
    RETRIEVE_DISCUSSIONSPACEOWNERS,
    UPDATE_DISCUSSIONSPACEOWNER,
    DELETE_DISCUSSIONSPACEOWNER,
    DELETE_ALL_DISCUSSIONSPACEOWNERS,
  } from "../actions/types";
  
  const initialState = [];
  
  const discussionspaceownerReducer = (discussionspaceowners = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_DISCUSSIONSPACEOWNER:
        return [...discussionspaceowners, payload];
  
      case RETRIEVE_DISCUSSIONSPACEOWNERS:
        return payload;
  
      case UPDATE_DISCUSSIONSPACEOWNER:
        return discussionspaceowners.map((discussionspaceowner) => {
          if (discussionspaceowner.id === payload.id) {
            return {
              ...discussionspaceowner,
              ...payload,
            };
          } else {
            return discussionspaceowner;
          }
        });
  
      case DELETE_DISCUSSIONSPACEOWNER:
        return discussionspaceowners.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_DISCUSSIONSPACEOWNERS:
        return [];
  
      default:
        return discussionspaceowners;
    }
  };
  
  export default discussionspaceownerReducer;