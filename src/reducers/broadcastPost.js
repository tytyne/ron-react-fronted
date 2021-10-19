import {
    CREATE_BROADCASTPOST,
    RETRIEVE_BROADCASTPOSTS,
    UPDATE_BROADCASTPOST,
    DELETE_BROADCASTPOST,
    DELETE_ALL_BROADCASTPOSTS,
  } from "../actions/types";
  
  const initialState = [];
  
  const broadcastpostReducer = (broadcastposts = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_BROADCASTPOST:
        return [...broadcastposts, payload];
  
      case RETRIEVE_BROADCASTPOSTS:
        return payload;
  
      case UPDATE_BROADCASTPOST:
        return broadcastposts.map((broadcastpost) => {
          if (broadcastpost.id === payload.id) {
            return {
              ...broadcastpost,
              ...payload,
            };
          } else {
            return broadcastpost;
          }
        });
  
      case DELETE_BROADCASTPOST:
        return broadcastposts.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_BROADCASTPOSTS:
        return [];
  
      default:
        return broadcastposts;
    }
  };
  
  export default broadcastpostReducer;