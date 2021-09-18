import {SET_FORGOT_FAIL,SET_FORGOT_SUCCESS,SET_MESSAGE,}  from "./types";
import AuthService from "../services/auth.service";

export const forgot = (email) => (dispatch) =>{
  return AuthService.forgot(email).then(
    (response) => {
      dispatch({
        type: SET_FORGOT_SUCCESS,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.error) ||
        error.error ||
        error.toString();

      dispatch({
        type: SET_FORGOT_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

