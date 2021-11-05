import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'
import NominationTypeService from "../../../services/notificationType.service"


function NotificationType() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "ID" },
    { title: "NotificationType", field: "NotificationType" },
  
  
  
  ]
  useEffect(() => {
  NominationTypeService.notificationType()
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