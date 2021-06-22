import axios from "axios"
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

export default {
    register,
    login,
   
  };