import axios from "axios";
import authHeader from "./auth-header";
import{handleResponse} from "../helpers/handleResponse"

const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`



const LGA = async () => {
  const { data } = await axios.get(API_URL +`/lga/all`, { headers: authHeader() });
  return data
};


export default {LGA}