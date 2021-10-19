import {
    CREATE_ABOUT,
    RETRIEVE_ABOUTS,
    UPDATE_ABOUT,
    DELETE_ABOUT,
    DELETE_ALL_ABOUTS,
  } from "../actions/types";
  
  const initialState = [];
  
  const aboutReducer = (abouts = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_ABOUT:
        return [...abouts, payload];
  
      case RETRIEVE_ABOUTS:
        return payload;
  
      case UPDATE_ABOUT:
        return abouts.map((about) => {
          if (about.id === payload.id) {
            return {
              ...about,
              ...payload,
            };
          } else {
            return about;
          }
        });
  
      case DELETE_ABOUT:
        return abouts.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_ABOUTS:
        return [];
  
      default:
        return abouts;
    }
  };
  
  export default aboutReducer;