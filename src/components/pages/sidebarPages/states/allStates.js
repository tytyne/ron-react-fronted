import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import StateService from "../../../../services/state.service"


function States() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "Id" },
    { title: "Statename", field: "Statename" },
  
  ]
  React.useEffect(()=>{
    StateService.allStates().then(res=>{
      console.log("check this ward",res)
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