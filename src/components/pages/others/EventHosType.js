import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'
import EventHostService from "../../../services/eventHostType.service"


function EventHostType() {

  const [data, setData] = useState([])
  const columns = [
    { title: "Id", field: "Id" },
    { title: "HostType", field: "HostType" },
  ]
  useEffect(() => {
   EventHostService.EventHosType()
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