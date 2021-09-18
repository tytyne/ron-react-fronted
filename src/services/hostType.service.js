
import axios from "axios";
import authHeader from "./auth-header";
import{handleResponse} from "../helpers/handleResponse"

const API_URL = "http://localhost:5000/api/v1/";


   const getHosts = async () => {
    const { data } = await axios.get(API_URL +`hosts`);
    console.log (data);
    return data
  };
 



export default {getHosts}


