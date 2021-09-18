import {SET_RESET_FAIL,SET_RESET_SUCCESS,SET_MESSAGE,}  from "./types";
import AuthService from "../services/auth.service";


export const reset = (Password, ConfirmPassword,tokenResponse) => (dispatch) => {
  return AuthService.reset(Password,ConfirmPassword,tokenResponse).then(
    (data) => {
      
      
      dispatch({
        type: SET_RESET_SUCCESS,
        payload:data.message
         
      });
       

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_RESET_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
