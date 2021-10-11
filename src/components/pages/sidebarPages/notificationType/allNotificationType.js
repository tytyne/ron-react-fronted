import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'


function NotificationType() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "ID" },
    { title: "NotificationType", field: "NotificationType" },
  
  
  
  ]
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/t1/notifications")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp.data)
      })
  }, [])

  return (
    <div className="Upper">
      <MaterialTable
        title="notification types"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default NotificationType;