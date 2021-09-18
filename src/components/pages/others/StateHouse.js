import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'


function StateHouse() {

  const [data, setData] = useState([])
  const columns = [
    { title: "id", field: "id" },
    { title: "ShcName", field: "ShcName" },
    { title: "Created", field: "Created" },
  
  
  
  ]
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/t1/statehouse")
      .then(resp => resp.json())
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