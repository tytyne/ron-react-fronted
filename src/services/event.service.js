
import axios from "axios";
import authHeader from "./auth-header";
import{handleResponse} from "../helpers/handleResponse"

const API_URL = "http://localhost:5000/api/v1/";


const getAllNames=()=>{
  const response= fetch("http://localhost:5000/api/v1/events/titles")
 
   .then(resp => resp.json())
   .catch((e)=>{
     console.log(e)
   })
   console.log(response)
   return response
   
 }

const getById = (id) => {
  return  axios.get(API_URL +`eventById?id=${id}` ,{headers:authHeader()});
};
const insertEvent = async (data) => {
  const{result} = await  axios.post(API_URL +`event`,data);
  return result
};


const deleteEvent = (id) => {
  return axios.delete(API_URL+`event/${id}` ,{headers:authHeader()});
};
const updateEvent = (id,data) => {
  return axios.delete(API_URL+`event/${id}`,data);
};
const getAllEvents=()=>{
  const fetchPromise=fetch(API_URL+`events/titles`);
  fetchPromise.then(response => {
    return response.json();
  }).then(events => {
 
    return events.resultData;
  }).catch((e)=>{
    console.log(e)
  })

 }
 const eventTitles = async () => {
  const { data } = await axios.get(API_URL +`/events/titles`);
  console.log (data);
  return data
};
const findByInput = (input) => {
  return  axios.get(API_URL+`/eventByInput?input=${input}` ,{headers:authHeader()});
};
const currentUserValue=()=>{
  return axios.post(`${API_URL}/me`,{headers:authHeader()})
}
const getAllGeneral=()=>{
  const response= fetch("http://localhost:5000/api/v1/general/events")
 
   .then(resp => resp.json())
   .catch((e)=>{
     console.log(e)
   })
   console.log(response)
   return response
   
 }
export default {
  getAllGeneral,
  getById,
  deleteEvent,
  findByInput,
  currentUserValue,
  insertEvent,
  updateEvent,
  getAllEvents,
  getAllNames,
  eventTitles
};

