import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'
import StateHouseService from "../../../services/stateHouse.service"


function StateHouse() {

  const [data, setData] = useState([])
  const columns = [
    { title: "id", field: "id" },
    { title: "ShcName", field: "ShcName" },
    { title: "Created", field: "Created" },
  
  
  
  ]
  useEffect(() => {
   StateHouseService.stateHouse()
      .then(resp => {
        setData(resp.data)
      })
  }, [])

  return (
    <div className="Upper">
      <MaterialTable
        title="State House Constituency"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default StateHouse;