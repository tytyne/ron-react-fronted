import {
    CREATE_NOMINATIONCATEGORY,
    RETRIEVE_NOMINATIONCATEGORIES,
    UPDATE_NOMINATIONCATEGORY,
    DELETE_NOMINATIONCATEGORY,
  
  } from "../actions/types";
  
  const initialState = [];
  
  const nominationcategoryReducer = (nominationcategorys = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_NOMINATIONCATEGORY:
        return [...nominationcategorys, payload];
  
      case RETRIEVE_NOMINATIONCATEGORIES:
        return payload;
  
      case UPDATE_NOMINATIONCATEGORY:
        return nominationcategorys.map((nominationcategory) => {
          if (nominationcategory.id === payload.id) {
            return {
              ...nominationcategory,
              ...payload,
            };
          } else {
            return nominationcategory;
          }
        });
  
      case DELETE_NOMINATIONCATEGORY:
        return nominationcategorys.filter(({ id }) => id !== payload.id);
  
  
  
      default:
        return nominationcategorys;
    }
  };
  
  export default nominationcategoryReducer;