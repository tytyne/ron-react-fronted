
import axios from "axios";
import authHeader from "./auth-header";
import{handleResponse} from "../helpers/handleResponse"
import FormData from "form-data"
import fs from "fs"


const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`


const get = (id) => {
  return  axios.get(API_URL +`/broadcast/${id}`);
};
const insertBroadcast = ({Comment,TargetType,image,TargetID,Status,selectedFile})=> {

  const formData = new FormData()
  formData.append("Comment", Comment);
  formData.append("TargetType", TargetType);
  formData.append("image", image);
  formData.append("TargetID", TargetID);
  formData.append("Status", Status);
  console.log(formData)
 axios({
   method:"post",
   url:`${API_URL}/broadcast`,
   data:formData,
   headers:{"Content-Type": "multipart/form-data"}
 })
  return 
 
};


const updateBroadcastT = (id,data) => {

  return  axios.put(API_URL +`/broadcast/${id}`,data);
};
const updateBroadcast = (id,data) => {

  return  axios.put(API_URL +`update/broadcast/${id}`,data);
};


const deleteBroadcast = (id) => {
  return axios.delete(API_URL+`/broadcast/${id}` );
};


const findByInput = (input) => {
  return  axios.get(API_URL+`/broadcastByInput?input=${input}`);
};
const getAllBroadcasts=()=>{
  const response= fetch(`${API_URL}/broadcasts`)
 
   .then(resp => resp.json())
   .catch((e)=>{
     console.log(e)
   })
   console.log(response)
   return response
   
 }
  const getTitles=()=>{
    const fetchPromise=fetch(`${API_URL}/hosts`);
    fetchPromise.then(response => {
      return response.json();
    }).then(events => {
      console.log("holla")
      console.log(events);
      console.log(events.data);
      return events.data;
    }).catch((e)=>{
      console.log(e)
    })
   }

export default {
  getAllBroadcasts,
  get,
  deleteBroadcast,
  findByInput,
  updateBroadcast,
  getTitles,
  insertBroadcast
};

