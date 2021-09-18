import {
  SET_FORGOT_FAIL,SET_FORGOT_SUCCESS
} from "../actions/types";
const user = JSON.parse(localStorage.getItem("user"));
  
  const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case SET_FORGOT_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case SET_FORGOT_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
    
      default:
        return state;
    }
  }