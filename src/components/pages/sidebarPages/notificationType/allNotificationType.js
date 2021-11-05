import React, { useState, useEffect } from 'react';
import '../other.css';
import MaterialTable from 'material-table'
import NotificationTypeService from "../../../../services/notificationType.service"


function NotificationType() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "ID" },
    { title: "NotificationType", field: "NotificationType" },
  
  ]
  React.useEffect(()=>{
    NotificationTypeService.notificationType().then(res=>{
      console.log("check this notification",res)
      setData(res.data)
    })
  },[]);

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