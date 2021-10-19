import {
    CREATE_WARD,
    RETRIEVE_WARDS,
    UPDATE_WARD,
    DELETE_WARD,
    DELETE_ALL_WARDS,
  } from "../actions/types";
  
  const initialState = [];
  
  const wardReducer = (wards = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_WARD:
        return [...wards, payload];
  
      case RETRIEVE_WARDS:
        return payload;
  
      case UPDATE_WARD:
        return wards.map((ward) => {
          if (ward.id === payload.id) {
            return {
              ...ward,
              ...payload,
            };
          } else {
            return ward;
          }
        });
  
      case DELETE_WARD:
        return wards.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_WARDS:
        return [];
  
      default:
        return wards;
    }
  };
  
  export default wardReducer;