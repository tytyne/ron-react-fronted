
import axios from "axios"

   const hostTypes = () => {
    return axios.get(`http://localhost:5000/api/v1/hosts`);
  };

  const getEvents=()=>{
    const response= fetch("http://localhost:5000/api/v1/events")
   
     .then(resp => resp.json())
     .catch((e)=>{
       console.log(e)
     })
     console.log(response)
     return response
     
  }

  const getHostss=()=>{
    const fetchPromise=fetch('http://localhost:5000/api/v1/hosts');
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