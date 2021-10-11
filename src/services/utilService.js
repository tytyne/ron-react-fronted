
import axios from "axios"

const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`
   const hostTypes = () => {
    return axios.get(API_URL +`/hosts`);
  };

  const getEvents=()=>{
    const response= fetch(API_URL +`/events`)
   
     .then(resp => resp.json())
     .catch((e)=>{
       console.log(e)
     })
     console.log(response)
     return response
     
  }

  const getHostss=()=>{
    const fetchPromise=fetch(API_URL +`/hosts`);
    fetchPromise.then(response => {
      return response.json();
    }).then(broadcasts => {
      console.log("holla")
      console.log(broadcasts);
      console.log(broadcasts.resultData);
      return broadcasts.resultData;
    }).catch((e)=>{
      console.log(e)
    })
  }

 


export default { 
  hostTypes,
  getEvents,
  getHostss 
}