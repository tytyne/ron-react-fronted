import axios from "axios";
import authHeader from "./auth-header";


const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`



const stateHouse = async () => {
  const { data } = await axios.get(API_URL +`/statehouse/all`, {headers: authHeader() });
  return data
};
const addStateHouse = async (data) => {
  const { result } = await axios.post(API_URL +`/statehouse/store`,data, {headers: authHeader() });
  return result
};
const updateStateHouse = async (id,data) => {
  const { result } = await axios.update(API_URL +`/statehouse/update/${id}`,data, {headers: authHeader() });
  return result
};
const deleteStateHouse = async (id) => {
  const { result} = await axios.delete(API_URL +`/statehouse/${id}`, {headers: authHeader() });
  return result
};


export default {stateHouse,addStateHouse,updateStateHouse,deleteStateHouse}
