
import axios from "axios";
import authHeader from "./auth-header";



const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`



 const getAllUsers = async () => {
  const { data } = await axios.get(API_URL +`/users`, { headers: authHeader() });
  return data
};

const deactivateAdmin = async (id) => {
  const { data } = await axios.put(API_URL +`/disable/admin/${id}`,{ headers: authHeader()});
  return data
};

const getAdmins = async () => {
  return axios.get(API_URL +`/admins`, { headers: authHeader() });
  
};
const get = (id) => {
  return  axios.get(API_URL +`/userById?id=${id}` ,{headers:authHeader()});
};


const deleteUser =async(id) => {
  const{data} = await axios.delete(API_URL+`/user/${id}` ,{headers:authHeader()});
  return data
};
const insertUser = async(data) => {
  const {result} = await axios.post(API_URL+`/user`,data, { headers: authHeader() });
  return result
};
const updateUser = (id,data) => {
  return axios.put(API_URL+`/user/${id}`,data);
};

const findByInput = (input) => {
  return  axios.get(API_URL+`/userByInput?input=${input}` ,{headers:authHeader()});
};
const currentUserValue=()=>{
  return axios.post(`${API_URL}/me`,{headers:authHeader()})
}

export default {
  getAdmins,
  getAllUsers,
  get,
  deleteUser,
  findByInput,
  currentUserValue,
  updateUser,
  insertUser,
  deactivateAdmin
};

