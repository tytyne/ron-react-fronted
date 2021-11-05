import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'
import GatewayService from "../../../services/gateway.service"


function Gateway() {

  const [data, setData] = useState([])
  const columns = [
    { title: "GatewayID", field: "GatewayID" },
    { title: "Description", field: "Description" },
    { title: "DateCreated", field: "DateCreated" },
  
  
  
  ]
  useEffect(() => {
    GatewayService.gateway()
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