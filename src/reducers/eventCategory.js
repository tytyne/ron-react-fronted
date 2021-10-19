import {
    CREATE_EVENTCATEGORY,
    RETRIEVE_EVENTCATEGORIES,
    UPDATE_EVENTCATEGORY,
    DELETE_EVENTCATEGORY,
  
  } from "../actions/types";
  
  const initialState = [];
  
  const tutorialReducer = (tutorials = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_EVENTCATEGORY:
        return [...tutorials, payload];
  
      case RETRIEVE_EVENTCATEGORIES:
        return payload;
  
      case UPDATE_EVENTCATEGORY:
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
  
      case DELETE_EVENTCATEGORY:
        return tutorials.filter(({ id }) => id !== payload.id);
  
   
  
      default:
        return tutorials;
    }
  };
  
  export default tutorialReducer;