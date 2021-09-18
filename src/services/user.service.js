
import axios from "axios";
import authHeader from "./auth-header";
import{handleResponse} from "../helpers/handleResponse"

const API_URL = "http://localhost:5000/api/v1/";



const getAllUsers=()=>{
  const response= fetch("http://localhost:5000/api/v1")
 
   .then(resp => resp.json())
   .catch((e)=>{
     console.log(e)
   })
   console.log(response)
   return response
   
 }

const get = (id) => {
  return  axios.get(API_URL +`/userById?id=${id}` ,{headers:authHeader()});
};


const deleteUser = (id) => {
  return axios.delete(API_URL+`/user/${id}` ,{headers:authHeader()});
};
const insertUser = async(data) => {
  const {result} = await axios.post(API_URL+`/user`,data);
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
  getAllUsers,
  get,
  deleteUser,
  findByInput,
  currentUserValue,
  updateUser,
  insertUser
};

