import {
    CREATE_EVENTHOSTTYPE,
    RETRIEVE_EVENTHOSTTYPES,
    UPDATE_EVENTHOSTTYPE,
    DELETE_EVENTHOSTTYPE,
    DELETE_ALL_EVENTHOSTTYPES,
  } from "../actions/types";
  
  const initialState = [];
  
  const eventhosttypeReducer = (eventhosttypes = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_EVENTHOSTTYPE:
        return [...eventhosttypes, payload];
  
      case RETRIEVE_EVENTHOSTTYPES:
        return payload;
  
      case UPDATE_EVENTHOSTTYPE:
        return eventhosttypes.map((eventhosttype) => {
          if (eventhosttype.id === payload.id) {
            return {
              ...eventhosttype,
              ...payload,
            };
          } else {
            return eventhosttype;
          }
        });
  
      case DELETE_EVENTHOSTTYPE:
        return eventhosttypes.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_EVENTHOSTTYPES:
        return [];
  
      default:
        return eventhosttypes;
    }
  };
  
  export default eventhosttypeReducer;