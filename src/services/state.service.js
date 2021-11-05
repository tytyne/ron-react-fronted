import axios from "axios";
import authHeader from "./auth-header";


const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`



const allstates = async () => {
  const { data } = await axios.get(API_URL +`/state/all`, { headers: authHeader() });
  return data
};
const storeState = async (newData) => {
  const { data } = await axios.post(API_URL +`/state/store`,newData, { headers: authHeader() });
  return data
};

const updateState = async (newData, oldData) => {
  const { data } = await axios.put(API_URL +`/state/${oldData.StateID}`,newData, { headers: authHeader() });
  return data
};
const deleteState = async (oldData) => {
  const { data } = await axios.get(API_URL +`/state/${oldData.StateID}`, { headers: authHeader() });
  return data
};
export default {allstates,storeState,updateState,deleteState}
