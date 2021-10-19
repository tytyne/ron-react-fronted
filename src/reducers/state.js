import {
    CREATE_STATE,
    RETRIEVE_STATES,
    UPDATE_STATE,
    DELETE_STATE,
    DELETE_ALL_STATES,
  } from "../actions/types";
  
  const initialState = [];
  
  const stateReducer = (states = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_STATE:
        return [...states, payload];
  
      case RETRIEVE_STATES:
        return payload;
  
      case UPDATE_STATE:
        return states.map((state) => {
          if (state.id === payload.id) {
            return {
              ...state,
              ...payload,
            };
          } else {
            return state;
          }
        });
  
      case DELETE_STATE:
        return states.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_STATES:
        return [];
  
      default:
        return states;
    }
  };
  
  export default stateReducer;