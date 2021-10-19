import {
    CREATE_LGA,
    RETRIEVE_LGAS,
    UPDATE_LGA,
    DELETE_LGA,
    DELETE_ALL_LGAS,
  } from "../actions/types";
  
  const initialState = [];
  
  const lgaReducer = (lgas = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_LGA:
        return [...lgas, payload];
  
      case RETRIEVE_LGAS:
        return payload;
  
      case UPDATE_LGA:
        return lgas.map((lga) => {
          if (lga.id === payload.id) {
            return {
              ...lga,
              ...payload,
            };
          } else {
            return lga;
          }
        });
  
      case DELETE_LGA:
        return lgas.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_LGAS:
        return [];
  
      default:
        return lgas;
    }
  };
  
  export default lgaReducer;