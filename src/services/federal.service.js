import axios from "axios";
import authHeader from "./auth-header";


const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`



const federal = async () => {
   const { data } = await axios.get(API_URL +`/federal/all`, { headers: authHeader()});
  return data
};

const storeFederal = async (data) => {
  const { result } = await axios.post(API_URL +`/federal/store`,data, { headers: authHeader() });
 console.log("check result",result)
 console.log("check data",data)
  return result
};
const deleteFederal = async (id) => {
  const { result } = await axios.delete(API_URL +`/federal/${id}`, { headers: authHeader()});
  return result
};
const updateFederal = async (data,id) => {
  const { result } = await axios.put(API_URL +`/federal/${id}`,data, { headers: authHeader()});
  console.log("check data",data)
  console.log("check id",id)
  return result
};

export default {federal,storeFederal,deleteFederal,updateFederal}
