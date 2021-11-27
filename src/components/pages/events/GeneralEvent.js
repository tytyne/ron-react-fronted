import React, { useState} from 'react';
import MaterialTable from 'material-table'
import CountryService from "../../../services/country.service"
import EventService from "../../../services/event.service"



function GeneralEvents() {

  const [data, setData] = useState([])
  const columns = [
    // { title: "id", field: "id" },
    { title: 'EventTitle', field: 'EventTitle' },
    { title: 'EventDuration', field: 'EventDuration' },
    { title: 'EventDescription', field: 'EventDescription' },
    { title: ' CreatedAt', field: 'CreatedAt' },
 
  
  
  
  ]
//   React.useEffect(()=>{
//     CountryService.countries().then(res=>{
//       console.log("check this senatorial",res)
//       setData(res.data)
//     })
//   },[]);
  React.useEffect(()=>{
    EventService.getAllGeneral().then(res=>{
      console.log("check this events",res)
      setData(res)
    })
  },[]);
  return (
    <div className="Upper">
      <MaterialTable
        title="General events"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default GeneralEvents;