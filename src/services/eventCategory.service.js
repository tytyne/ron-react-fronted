
import axios from "axios";
import authHeader from "./auth-header";
import{handleResponse} from "../helpers/handleResponse"


const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`


   const eventCategory = async () => {
    const { data } = await axios.get(API_URL +`/eventcategories/all`, { headers: authHeader() });
    console.log (data);
    return data
  };
 



export default {eventCategory}


