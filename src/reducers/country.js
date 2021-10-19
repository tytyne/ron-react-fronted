import {
    CREATE_COUNTRY,
    RETRIEVE_COUNTRIES,
    UPDATE_COUNTRY,
    DELETE_COUNTRY,
 
  } from "../actions/types";
  
  const initialState = [];
  
  const tutorialReducer = (tutorials = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_COUNTRY:
        return [...tutorials, payload];
  
      case RETRIEVE_COUNTRIES:
        return payload;
  
      case UPDATE_COUNTRY:
        return tutorials.map((tutorial) => {
          if (tutorial.id === payload.id) {
            return {
              ...tutorial,
              ...payload,
            };
          } else {
            return tutorial;
          }
        });
  
      case DELETE_COUNTRY:
        return tutorials.filter(({ id }) => id !== payload.id);
  
   
  
      default:
        return tutorials;
    }
  };
  
  export default tutorialReducer;