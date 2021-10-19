import {
    CREATE_GATEWAY,
    RETRIEVE_GATEWAYS,
    UPDATE_GATEWAY,
    DELETE_GATEWAY,
    DELETE_ALL_GATEWAYS,
  } from "../actions/types";
  
  const initialState = [];
  
  const gatewayReducer = (gateways = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_GATEWAY:
        return [...gateways, payload];
  
      case RETRIEVE_GATEWAYS:
        return payload;
  
      case UPDATE_GATEWAY:
        return gateways.map((gateway) => {
          if (gateway.id === payload.id) {
            return {
              ...gateway,
              ...payload,
            };
          } else {
            return gateway;
          }
        });
  
      case DELETE_GATEWAY:
        return gateways.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_GATEWAYS:
        return [];
  
      default:
        return gateways;
    }
  };
  
  export default gatewayReducer;