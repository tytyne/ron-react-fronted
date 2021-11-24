import axios from "axios";
import authHeader from "./auth-header";


const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`



const senatorial = async () => {
  const { data } = await axios.get(API_URL +`/senatorial/all`, {headers: authHeader()});
  return data
};

const addSenatorial = async (data) => {
  const { result } = await axios.post(API_URL +`/senatorial/store`,data, {headers: authHeader()});
  return result
};

const updateSenatorial = async (id,data) => {
  const { result } = await axios.put(API_URL +`/senatorial/update/${id}`,data, {headers: authHeader()});
  return result
};

const deleteSenatorial = async (id) => {
  const { data } = await axios.delete(API_URL +`/senatorial/${id}`, {headers: authHeader()});
  return data
};


export default {senatorial,addSenatorial,updateSenatorial,deleteSenatorial}