import {
    CREATE_STATE,
    RETRIEVE_STATES,
    UPDATE_STATE,
    DELETE_STATE,

  } from "./types";
  
  import StateDataService from "../services/state.service";
  
  export const createState = (Statename) => async (dispatch) => {
    try {
      const res = await StateDataService.storeState({Statename});
  
      dispatch({
        type: CREATE_STATE,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const retrieveStates = () => async (dispatch) => {
    try {
      const res = await StateDataService.allstates();
  
      dispatch({
        type: RETRIEVE_STATES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updateState = (id, data) => async (dispatch) => {
    try {
      const res = await StateDataService.updateState(id, data);
  
      dispatch({
        type: UPDATE_STATE,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const deleteState = (id) => async (dispatch) => {
    try {
      await StateDataService.deleteState(id);
  
      dispatch({
        type: DELETE_STATE,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
