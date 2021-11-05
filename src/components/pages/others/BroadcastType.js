import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'
import BroadcastTypeService from "../../../services/broadcastType.service"


function BroadcastType() {

  const [data, setData] = useState([])
  const columns = [
    { title: "Id", field: "Id" },
    { title: "Description", field: "Description" },
    { title: "CreatedAt", field: "CreatedAt" },
  
  
  
  ]
  useEffect(() => {
    BroadcastTypeService.broadcastType()
      .then(resp => {
        setData(resp.data)
      })
  }, [])

  return (
    <div className="Upper">
      <MaterialTable
        title="BroadcastType"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default BroadcastType;