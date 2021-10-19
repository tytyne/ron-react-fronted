import {
    CREATE_NOTIFICATIONTYPE,
    RETRIEVE_NOTIFICATIONTYPES,
    UPDATE_NOTIFICATIONTYPE,
    DELETE_NOTIFICATIONTYPE,
    DELETE_ALL_NOTIFICATIONTYPES,
  } from "../actions/types";
  
  const initialState = [];
  
  const notificationtypeReducer = (notificationtypes = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_NOTIFICATIONTYPE:
        return [...notificationtypes, payload];
  
      case RETRIEVE_NOTIFICATIONTYPES:
        return payload;
  
      case UPDATE_NOTIFICATIONTYPE:
        return notificationtypes.map((notificationtype) => {
          if (notificationtype.id === payload.id) {
            return {
              ...notificationtype,
              ...payload,
            };
          } else {
            return notificationtype;
          }
        });
  
      case DELETE_NOTIFICATIONTYPE:
        return notificationtypes.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_NOTIFICATIONTYPES:
        return [];
  
      default:
        return notificationtypes;
    }
  };
  
  export default notificationtypeReducer;