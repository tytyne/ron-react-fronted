
import axios from "axios";
import authHeader from "./auth-header";



const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`



 const getAllAdmins = async() => {
  const {results} = await axios.get(API_URL +`/admins` ,{headers:authHeader()});
  return results
};
const getAdminMe =async () => {
  return await axios.get(API_URL+`/admin/me` ,{headers:authHeader()});
};
const getAdmin = (id) => {
  return axios.delete(API_URL+`/admin/${id}` ,{headers:authHeader()});
};

const get = (id) => {
  return  axios.get(API_URL +`/adminById?id=${id}` ,{headers:authHeader()});
};


const deleteAdmin = (id) => {
  return axios.delete(API_URL+`/admin/${id}` ,{headers:authHeader()});
};
const insertAdmin = async(data) => {
  const {result} = await axios.post(API_URL+`/admin`,data);
  return result
};
const updateAdmin = (id,data) => {
  return axios.put(API_URL+`/admin/${id}`,data);
};

const findByInput = (input) => {
  return  axios.get(API_URL+`/adminByInput?input=${input}` ,{headers:authHeader()});
};
const currentAdminValue=()=>{
  return axios.post(`${API_URL}/me`,{headers:authHeader()})
}

export default {
  getAllAdmins,
  getAdmin,
  getAdminMe,
  get,
  deleteAdmin,
  findByInput,
  currentAdminValue,
  updateAdmin,
  insertAdmin
};

