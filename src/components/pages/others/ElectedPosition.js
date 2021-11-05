import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'
import ElectedPositionService from "../../../services/electedPosition.service"


function ElectedPosition() {

  const [data, setData] = useState([])
  const columns = [
    { title: "PostionID", field: "PostionID" },
    { title: "Description", field: "Description" },
    { title: "MinVoteRequired", field: "MinVoteRequired" },
    { title: "MinNominationsRequired", field: "MinNominationsRequired" },
    { title: "DateCreated", field: "DateCreated" },
  
  ]
  useEffect(() => {
    ElectedPositionService.electedPosition()
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

export default ElectedPosition;