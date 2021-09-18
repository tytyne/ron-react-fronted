import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'


function States() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "Id" },
    { title: "Statename", field: "Statename" },
  
  ]
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/t1/states")
      .then(resp => resp.json())
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