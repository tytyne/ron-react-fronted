import {
    CREATE_STAT,
    RETRIEVE_STATS,
    UPDATE_STAT,
    DELETE_STAT,
    DELETE_ALL_STATS,
  } from "../actions/types";
  
  const initialState = [];
  
  const statReducer = (stats = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_STAT:
        return [...stats, payload];
  
      case RETRIEVE_STATS:
        return payload;
  
      case UPDATE_STAT:
        return stats.map((stat) => {
          if (stat.id === payload.id) {
            return {
              ...stat,
              ...payload,
            };
          } else {
            return stat;
          }
        });
  
      case DELETE_STAT:
        return stats.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_STATS:
        return [];
  
      default:
        return stats;
    }
  };
  
  export default statReducer;