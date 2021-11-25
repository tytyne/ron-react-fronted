import React, { useState,useEffect } from "react";

import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow 
} from "react-google-maps";
import axios from "axios";
import "./stylesheet.css";
import UserActivityService from "../../../services/userActivity.service"

// const {GOOGLE_API,GOOGLE_KEY} = process.env
// console.log("check google api",GOOGLE_API)
// console.log("check google api key",GOOGLE_KEY)
// console.log("googleee",process.env.GOOGLE_API)
// console.log("googleee",process.env.GOOGLE_KEY)
// const check=`${GOOGLE_KEY}`
// console.log("check check",check)
const {REACT_APP_GOOGLE_KEY} = process.env
function MapComponent() {
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [activity,setActivity]=useState([])
    const [location, setLocation]=useState([])
  

    // React.useEffect(()=>{
  

      useEffect(async() => {
       
        const response = await  UserActivityService.activities()
        setActivity(response.data.filter(e=>e.UserActivityIP!="127.0.0.1"))
        console.log("check updated data",response.data)
      
    }, []);

    useEffect(async() =>{
        activity.map(async(el,index) => {
            
            
            if(el.UserActivityIP !="127.0.0.1"){
                let serverResponse=  await axios.get(`http://ip-api.com/json/${el.UserActivityIP}`)
            
                let temp=activity
               
                temp[index].lat=parseFloat(serverResponse?.data.lat)
                temp[index].lon=parseFloat(serverResponse?.data.lon)
                setLocation(temp)
                // console.log("deborah", temp)
          
            }
    
              
          });
    }, [activity])

    return (<div>
        {/* <h1>{JSON.stringify(location)}</h1> */}
        <GoogleMap 
            defaultZoom={12}
            defaultCenter={{ lat: -1.9507, lng: 30.0663 }}
        >
            {location.map(property => (
                <Marker 
                    key={property.AID} 
                    position={{
                        lat:property.lat, 
                        lng:property.lon
                    }}
                    icon={{
                        url: "https://i.imgur.com/FpHIBa7.png",
                        scaledSize: new window.google.maps.Size(25, 25)
                    }}
                    onClick ={() => {
                        setSelectedProperty(property);
                    }}
                />
            ))}

            {selectedProperty && (
                <InfoWindow
                    position={{
                        lat: selectedProperty.lat, 
                        lng: selectedProperty.lon
                    }}
                    onCloseClick={() => {
                        setSelectedProperty(null);
                    }}
                >
                    <div>
                        <h4>{selectedProperty.Description}</h4>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    
    </div>
       
 
     
    )
       
}

const WrappedMap = withScriptjs(withGoogleMap(MapComponent));

function Map() {
    return (

   <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height:"100%"}} />}
            containerElement={<div style={{ height:"100%"}} />}
            mapElement={<div style={{ height:"100%"}} />}
        />

      
     
    )
}

export default Map;