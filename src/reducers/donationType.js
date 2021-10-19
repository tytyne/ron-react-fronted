import {
    CREATE_DONATIONTYPE,
    RETRIEVE_DONATIONTYPES,
    UPDATE_DONATIONTYPE,
    DELETE_DONATIONTYPE,
    DELETE_ALL_DONATIONTYPES,
  } from "../actions/types";
  
  const initialState = [];
  
  const donationtypeReducer = (donationtypes = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_DONATIONTYPE:
        return [...donationtypes, payload];
  
      case RETRIEVE_DONATIONTYPES:
        return payload;
  
      case UPDATE_DONATIONTYPE:
        return donationtypes.map((donationtype) => {
          if (donationtype.id === payload.id) {
            return {
              ...donationtype,
              ...payload,
            };
          } else {
            return donationtype;
          }
        });
  
      case DELETE_DONATIONTYPE:
        return donationtypes.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_DONATIONTYPES:
        return [];
  
      default:
        return donationtypes;
    }
  };
  
  export default donationtypeReducer;