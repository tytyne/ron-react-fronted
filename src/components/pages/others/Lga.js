import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'


function Lga() {

  const [data, setData] = useState([])
  const columns = [
    { title: "LgaName", field: "LgaName" },
    { title: "State Name", field: "Statename" },
    { title: "Created", field: "Created" },
  
  
  
  ]
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/t1/lga")
      .then(resp => resp.json())
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