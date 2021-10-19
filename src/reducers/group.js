import {
    CREATE_GROUP,
    RETRIEVE_GROUPS,
    UPDATE_GROUP,
    DELETE_GROUP,
    DELETE_ALL_GROUPS,
  } from "../actions/types";
  
  const initialState = [];
  
  const groupReducer = (groups = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_GROUP:
        return [...groups, payload];
  
      case RETRIEVE_GROUPS:
        return payload;
  
      case UPDATE_GROUP:
        return groups.map((group) => {
          if (group.id === payload.id) {
            return {
              ...group,
              ...payload,
            };
          } else {
            return group;
          }
        });
  
      case DELETE_GROUP:
        return groups.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_GROUPS:
        return [];
  
      default:
        return groups;
    }
  };
  
  export default groupReducer;