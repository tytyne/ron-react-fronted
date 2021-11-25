
import axios from "axios";
import authHeader from "./auth-header";



const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`


 const  getAllNames = async () => {
  const { data } = await axios.get(API_URL +`/events/titles`, { headers: authHeader() });
  console.log (data);
  return data
};

const getById =async (id) => {
  return  await axios.get(API_URL +`/eventById?id=${id}` ,{headers:authHeader()});
};
const insertEvent = async (data) => {
  const{result} = await  axios.post(API_URL +`/event`,data,{headers:authHeader()});
  return result
};


const deleteEvent = async(id) => {
  const {data} = await axios.delete(API_URL+`/events/${id}` ,{headers:authHeader()});
  return data
};
const updateEvent = async (id,data) => {
  const {result}= await axios.put(API_URL+`/event/${id}`,data,{headers:authHeader()});
  return result
};
const getAllEvents = async () => {
  const { data } = await axios.get(API_URL +`/events/titles`, { headers: authHeader() });
  console.log (data);
  return data
};
 const eventTitles = async () => {
  const { data } = await axios.get(API_URL +`/events/titles`, { headers: authHeader() });
  console.log (data);
  return data
};
const findByInput = async (input) => {
  return  await axios.get(API_URL+`/eventByInput?input=${input}` ,{headers:authHeader()});
};
const currentUserValue= async()=>{
  return await axios.post(`${API_URL}/me`,{headers:authHeader()})
}
const getAllGeneral= async()=>{
  const {data}= await axios.get(API_URL+`/general/events` ,{headers:authHeader()});
  return data
   
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

