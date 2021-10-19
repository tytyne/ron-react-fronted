import {
    CREATE_BROADCASTTYPE,
    RETRIEVE_BROADCASTTYPES,
    UPDATE_BROADCASTTYPE,
    DELETE_BROADCASTTYPE,
    DELETE_ALL_BROADCASTTYPES,
  } from "../actions/types";
  
  const initialState = [];
  
  const broadcasttypeReducer = (broadcasttypes = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_BROADCASTTYPE:
        return [...broadcasttypes, payload];
  
      case RETRIEVE_BROADCASTTYPES:
        return payload;
  
      case UPDATE_BROADCASTTYPE:
        return broadcasttypes.map((broadcasttype) => {
          if (broadcasttype.id === payload.id) {
            return {
              ...broadcasttype,
              ...payload,
            };
          } else {
            return broadcasttype;
          }
        });
  
      case DELETE_BROADCASTTYPE:
        return broadcasttypes.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_BROADCASTTYPES:
        return [];
  
      default:
        return broadcasttypes;
    }
  };
  
  export default broadcasttypeReducer;