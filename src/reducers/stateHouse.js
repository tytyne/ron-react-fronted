import {
    CREATE_STATEHOUSE,
    RETRIEVE_STATEHOUSES,
    UPDATE_STATEHOUSE,
    DELETE_STATEHOUSE,
    DELETE_ALL_STATEHOUSES,
  } from "../actions/types";
  
  const initialState = [];
  
  const statehouseReducer = (statehouses = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_STATEHOUSE:
        return [...statehouses, payload];
  
      case RETRIEVE_STATEHOUSES:
        return payload;
  
      case UPDATE_STATEHOUSE:
        return statehouses.map((statehouse) => {
          if (statehouse.id === payload.id) {
            return {
              ...statehouse,
              ...payload,
            };
          } else {
            return statehouse;
          }
        });
  
      case DELETE_STATEHOUSE:
        return statehouses.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_STATEHOUSES:
        return [];
  
      default:
        return statehouses;
    }
  };
  
  export default statehouseReducer;