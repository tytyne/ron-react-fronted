import {
    CREATE_SENATORIAL,
    RETRIEVE_SENATORIALS,
    UPDATE_SENATORIAL,
    DELETE_SENATORIAL,
    DELETE_ALL_SENATORIALS,
  } from "../actions/types";
  
  const initialState = [];
  
  const senatorialReducer = (senatorials = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_SENATORIAL:
        return [...senatorials, payload];
  
      case RETRIEVE_SENATORIALS:
        return payload;
  
      case UPDATE_SENATORIAL:
        return senatorials.map((senatorial) => {
          if (senatorial.id === payload.id) {
            return {
              ...senatorial,
              ...payload,
            };
          } else {
            return senatorial;
          }
        });
  
      case DELETE_SENATORIAL:
        return senatorials.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_SENATORIALS:
        return [];
  
      default:
        return senatorials;
    }
  };
  
  export default senatorialReducer;