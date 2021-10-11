import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'


function Senatorial() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "id" },
    { title: "SD Name", field: "SDName" },
  
  ]
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/t1/senetorialdistrict")
      .then(resp => resp.json())
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

export default Senatorial;