import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'
import LgaService from "../../../services/lga.service"


function Lga() {

  const [data, setData] = useState([])
  const columns = [
    { title: "LgaName", field: "LgaName" },
    { title: "State Name", field: "Statename" },
    { title: "Created", field: "Created" },
  
  
  
  ]
  useEffect(() => {
  LgaService.LGA()
      .then(resp => {
        setData(resp.data)
      })
  }, [])

  return (
    <div className="Upper">
      <MaterialTable
        title="LGA"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default Lga;