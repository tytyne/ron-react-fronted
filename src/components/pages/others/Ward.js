import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'
import WardService from "../../../services/ward.service"


function Ward() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "WardID" },
    { title: "Ward Name", field: "WardName" },
    { title: "Lga", field: "LgaName" },
  ]
  useEffect(() => {
    WardService.allWards()
      .then(resp => {
        setData(resp.data)
      })
  }, [])

  return (
    <div className="Upper">
      <MaterialTable
        title="Wards"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default Ward;