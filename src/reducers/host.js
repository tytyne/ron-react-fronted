import {
    CREATE_HOST,
    RETRIEVE_HOSTS,
    UPDATE_HOST,
    DELETE_HOST,
    DELETE_ALL_HOSTS,
  } from "../actions/types";
  
  const initialState = [];
  
  const hostReducer = (hosts = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_HOST:
        return [...hosts, payload];
  
      case RETRIEVE_HOSTS:
        return payload;
  
      case UPDATE_HOST:
        return hosts.map((host) => {
          if (host.id === payload.id) {
            return {
              ...host,
              ...payload,
            };
          } else {
            return host;
          }
        });
  
      case DELETE_HOST:
        return hosts.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_HOSTS:
        return [];
  
      default:
        return hosts;
    }
  };
  
  export default hostReducer;