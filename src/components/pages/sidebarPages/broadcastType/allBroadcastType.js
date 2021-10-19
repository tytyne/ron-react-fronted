import React, { useState, useEffect } from 'react';
import '../other.css';
import MaterialTable from 'material-table'
import BroadcastTypeService from "../../../../services/broadcastType.service"


function BroadcastType() {

  const [data, setData] = useState([])
  const columns = [
    { title: "Id", field: "Id" },
    { title: "Description", field: "Description" },
    { title: "CreatedAt", field: "CreatedAt" },
  
  
  
  ]
  React.useEffect(()=>{
    BroadcastTypeService.broadcastType().then(res=>{
      console.log("check this senatorial",res)
      setData(res.data)
    })
  },[]);

  return (
    <div className="Upper">
      <MaterialTable
        title="Broadcast Types"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default BroadcastType;