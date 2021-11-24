import React, { useState, useEffect } from 'react';
import '../other.css';
import MaterialTable from 'material-table'
import EventHostTypeService from "../../../../services/eventHostType.service"


function EventHostType() {

  const [data, setData] = useState([])
  const columns = [
    { title: "Id", field: "Id" },
    { title: "HostType", field: "HostType" },
  ]
  React.useEffect(()=>{
    EventHostTypeService.EventHosType().then(res=>{
      console.log("check this discusion event host types",res)
      setData(res.resultData)
    })
  },[]);

  return (
    <div className="Upper">
      <MaterialTable
        title="Event HostType"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default EventHostType;