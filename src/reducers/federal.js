import {
    CREATE_FEDERAL,
    RETRIEVE_FEDERALS,
    UPDATE_FEDERAL,
    DELETE_FEDERAL,
    DELETE_ALL_FEDERALS,
  } from "../actions/types";
  
  const initialState = [];
  
  const federalReducer = (federals = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_FEDERAL:
        return [...federals, payload];
  
      case RETRIEVE_FEDERALS:
        return payload;
  
      case UPDATE_FEDERAL:
        return federals.map((federal) => {
          if (federal.id === payload.id) {
            return {
              ...federal,
              ...payload,
            };
          } else {
            return federal;
          }
        });
  
      case DELETE_FEDERAL:
        return federals.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_FEDERALS:
        return [];
  
      default:
        return federals;
    }
  };
  
  export default federalReducer;