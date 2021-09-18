
import axios from "axios";
import authHeader from "./auth-header";
import{handleResponse} from "../helpers/handleResponse"

const API_URL = "http://localhost:5000/api/v1/";



const getAllAdmins=()=>{
  const response= fetch("http://localhost:5000/api/v1/admins")
 
   .then(resp => resp.json())
   .catch((e)=>{
     console.log(e)
   })
   console.log(response)
   return response
   
 }

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
  get,
  deleteAdmin,
  findByInput,
  currentAdminValue,
  updateAdmin,
  insertAdmin
};

