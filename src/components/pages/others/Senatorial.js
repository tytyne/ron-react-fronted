import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'
import SenatorialService from "../../../services/senatorial.service"


function Ward() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "id" },
    { title: "SD Name", field: "SDName" },
  
  ]
  useEffect(() => {
  SenatorialService.senatorial()
      .then(resp => {
        setData(resp.data)
      })
  }, [])

  return (
    <div className="Upper">
      <MaterialTable
        title="Senatorial District"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default Ward;