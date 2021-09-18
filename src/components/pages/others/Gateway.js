import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'


function Gateway() {

  const [data, setData] = useState([])
  const columns = [
    { title: "GatewayID", field: "GatewayID" },
    { title: "Description", field: "Description" },
    { title: "DateCreated", field: "DateCreated" },
  
  
  
  ]
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/t1/gateway")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp.data)
      })
  }, [])

  return (
    <div className="Upper">
      <MaterialTable
        title="Gateway"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default Gateway;