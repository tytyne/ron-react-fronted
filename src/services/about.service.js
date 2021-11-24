import axios from "axios";
import authHeader from "./auth-header";


const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`



const getAbout = async () => {
  const { data } = await axios.get(API_URL +`/about`, { headers: authHeader() });
  return data
};
const updateAbout = async (id) => {
    const { data } = await axios.put(API_URL +`/about/update/${id}`, { headers: authHeader() });
    return data
};



export default {getAbout,updateAbout}