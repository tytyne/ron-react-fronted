import axios from "axios";
import authHeader from "./auth-header";
import{handleResponse} from "../helpers/handleResponse"

const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`



const allWards = async () => {
  const { data } = await axios.get(API_URL +`/ward/all`, { headers: authHeader() });
  return data
};
const storeWard = async(data) => {
  const { result } =  await axios.post(API_URL +`/ward/store`,data, { headers: authHeader() });
  return result
};
const updateWard = async(id,data) => {
  const { result } = await axios.put(API_URL +`/ward/update/${id}`,data, { headers: authHeader() });
  return result
};

const deleteWard =async(id)  => {
  const { result } = await axios.delete(API_URL +`ward/${id}`, { headers: authHeader() });
  return result
};




export default {allWards,storeWard,updateWard,deleteWard}
