import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import StateService from "../../../../services/state.service"
import "../other.css"


function States() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "Id" },
    { title: "Statename", field: "Statename" },
  
  ]
  React.useEffect(()=>{
    StateService.allstates().then(res=>{
      console.log("check this states",res)
      setData(res.data)
    })
  },[]);

  return (
    <div className="Upper">
      <MaterialTable
        title="States"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default States;