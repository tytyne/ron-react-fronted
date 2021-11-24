import axios from "axios";
import authHeader from "./auth-header";


const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`



const nominationCategory = async () => {
  const { data } = await axios.get(API_URL +`/nominationcategory/all`, { headers: authHeader() });
  return data
};

const addNominationCategory = async (data) => {
  const { result } = await axios.post(API_URL +`/nominationcategory/store`,data, { headers: authHeader() });
  return result
};
const updateNominationCategory = async (id,data) => {
  const {result} = await axios.put(API_URL +`/nominationcategory/update/${id}`,data, { headers: authHeader() });
  return result
};
const deleteNominationCategory = async (id) => {
  const { result } = await axios.delete(API_URL +`nominationcategory/${id}`, { headers: authHeader() });
  return result
};

export default {nominationCategory,addNominationCategory,updateNominationCategory,deleteNominationCategory}