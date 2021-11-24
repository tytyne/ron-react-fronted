import axios from "axios";
import authHeader from "./auth-header";


const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`



const donations = async () => {
  const { data } = await axios.get(API_URL +`/donations`, { headers: authHeader() });
  return data
};
const success = async () => {
    const { data } = await axios.get(API_URL +`/donations/total`, { headers: authHeader() });
    return data
};
const pendings = async () => {
const { data } = await axios.get(API_URL +`/donations/pending`, { headers: authHeader() });
return data
};


export default {donations,success,pendings}