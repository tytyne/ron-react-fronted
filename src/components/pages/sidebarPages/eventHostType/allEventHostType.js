import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'


function EventHostType() {

  const [data, setData] = useState([])
  const columns = [
    { title: "Id", field: "Id" },
    { title: "HostType", field: "HostType" },
  ]
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/t1/eventHostType")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp.data)
      })
  }, [])

  return (
    <div className="Upper">
      <MaterialTable
        title="Event HostType"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default EventHostType;