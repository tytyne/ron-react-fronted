import {
    CREATE_DONATION,
    RETRIEVE_DONATIONS,
    UPDATE_DONATION,
    DELETE_DONATION,
    DELETE_ALL_DONATIONS,
  } from "../actions/types";
  
  const initialState = [];
  
  const donationReducer = (donations = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_DONATION:
        return [...donations, payload];
  
      case RETRIEVE_DONATIONS:
        return payload;
  
      case UPDATE_DONATION:
        return donations.map((donation) => {
          if (donation.id === payload.id) {
            return {
              ...donation,
              ...payload,
            };
          } else {
            return donation;
          }
        });
  
      case DELETE_DONATION:
        return donations.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_DONATIONS:
        return [];
  
      default:
        return donations;
    }
  };
  
  export default donationReducer;