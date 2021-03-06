import axios from "axios";
import authHeader from "./auth-header";


const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`



const electedPosition = async () => {
  const { data } = await axios.get(API_URL +`/electedposition/all`, { headers: authHeader() });
  return data
};


export default {electedPosition}