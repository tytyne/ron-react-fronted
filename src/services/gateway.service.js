import axios from "axios";
import authHeader from "./auth-header";


const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`



const gateway = async () => {
  const { data } = await axios.get(API_URL +`/gateway/all`, { headers: authHeader() });
  return data
};
const addGateway = async (data) => {
  const { result} = await axios.post(API_URL +`/gateway/store`,data, { headers: authHeader() });
  return result
};
const updateGateway = async (id,data) => {
  const { result } = await axios.put(API_URL +`/gateway/update/${id}`,data, { headers: authHeader() });
  return result
};const deleteGateway = async (id) => {
  const { result } = await axios.delete(API_URL +`gateway/${id}`, { headers: authHeader() });
  console.log("checking",result)
  return result
};


export default {gateway,addGateway,updateGateway,deleteGateway}