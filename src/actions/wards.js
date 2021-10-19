
   
import {
  CREATE_WARD,
  RETRIEVE_WARDS,
  UPDATE_WARD,
  DELETE_WARD,
  DELETE_ALL_WARDS,
} from "./types";

import WardDataService from "../services/ward.service";

export const createWard = (WardName,Lga) => async (dispatch) => {
  try {
    const res = await WardDataService.storeWard({ WardName, Lga });

    dispatch({
      type: CREATE_WARD,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveWard = () => async (dispatch) => {
  try {
    const res = await WardDataService.allWards();

    dispatch({
      type: RETRIEVE_WARDS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};






