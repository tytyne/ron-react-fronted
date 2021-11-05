import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'
import StateService from "../../../services/state.service"


function States() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "Id" },
    { title: "Statename", field: "Statename" },
  
  ]
  useEffect(() => {
  StateService.allstates()
      .then(resp => {
        setData(resp.data)
      })
  }, [])

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