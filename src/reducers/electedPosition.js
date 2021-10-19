import {
    CREATE_ELECTEDPOSITION,
    RETRIEVE_ELECTEDPOSITIONS,
    UPDATE_ELECTEDPOSITION,
    DELETE_ELECTEDPOSITION,
    DELETE_ALL_ELECTEDPOSITIONS,
  } from "../actions/types";
  
  const initialState = [];
  
  const electedpositionReducer = (electedpositions = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_ELECTEDPOSITION:
        return [...electedpositions, payload];
  
      case RETRIEVE_ELECTEDPOSITIONS:
        return payload;
  
      case UPDATE_ELECTEDPOSITION:
        return electedpositions.map((electedposition) => {
          if (electedposition.id === payload.id) {
            return {
              ...electedposition,
              ...payload,
            };
          } else {
            return electedposition;
          }
        });
  
      case DELETE_ELECTEDPOSITION:
        return electedpositions.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_ELECTEDPOSITIONS:
        return [];
  
      default:
        return electedpositions;
    }
  };
  
  export default electedpositionReducer;