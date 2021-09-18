import axios from "axios"
import { BehaviorSubject } from 'rxjs';
import{handleResponse} from "../helpers/handleResponse"



const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')));
const API_URL="http://localhost:5000/api/v1"

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  };
const login=(email,password)=>{
    return axios.post(`${API_URL}/login`,{
        email,password
    }).then((response)=>{
        if(response.data.token){
            localStorage.setItem("user",JSON.stringify(response.data))
        }
        console.log(response)
        return response.data
        
    });

}
const forgot = ( email) => {
  return axios.post(`${API_URL}/admin/forgot_password`, {
    email
  });
};


const reset=(Password,ConfirmPassword,token)=>{
  return axios.post(`${API_URL}/admin/reset_password/${token}`, {
    Password,ConfirmPassword
  });
}

const logout=()=>{
  localStorage.removeItem("user")
  currentUserSubject.next(null);
}


export default {
    register,
    login,
    forgot,
    reset,
    logout
   
  };