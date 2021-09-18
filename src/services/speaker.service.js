
import axios from "axios";
import authHeader from "./auth-header";
import{handleResponse} from "../helpers/handleResponse"

const API_URL = "http://localhost:5000/api/v1";



const insertSpeaker = async (data) => {
  return axios.post(API_URL +`/speaker`,data);
  
};

const updateSpeaker = (id,data) => {
  return  axios.put(API_URL +`/speaker/${id}`,data);

};
const getSpeaker = (id) => {
  return  axios.get(API_URL +`/speaker/${id}` ,{headers:authHeader()});
};

const getTitles = () => {
  return  axios.get(API_URL +`/events/titles` ,{headers:authHeader()});
};
const deleteSpeaker = (id) => {
  return axios.delete(API_URL+`/speaker/${id}`);
};


const findByInput = (input) => {
  return  axios.get(API_URL+`/speakerByInput?input=${input}` ,{headers:authHeader()});
};


const getAllSpeakers = () => {
  return  axios.get(API_URL +`/speakers`);
};


export default {
  getSpeaker,
  deleteSpeaker,
  findByInput,
  insertSpeaker,
  updateSpeaker,
  getTitles,
  getAllSpeakers
};

