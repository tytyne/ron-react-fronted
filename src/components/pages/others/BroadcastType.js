import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'


function BroadcastType() {

  const [data, setData] = useState([])
  const columns = [
    { title: "Id", field: "Id" },
    { title: "Description", field: "Description" },
    { title: "CreatedAt", field: "CreatedAt" },
  
  
  
  ]
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/t1/broadcastTypes")
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

export default BroadcastType;