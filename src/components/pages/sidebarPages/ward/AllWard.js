import React, { useState, useEffect } from 'react';
// import './other.css';

import MaterialTable from 'material-table'
import WardService from "../../../../services/ward.service"
import "../other.css"



function AllWard() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "WardID" },
    { title: "Ward Name", field: "WardName" },
    { title: "Lga", field: "LgaName" },
  ]
  

  React.useEffect(()=>{
    WardService.allWards().then(resp=>{
      console.log("check data",data)
      setData(resp.data)
    })
  },[]);

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

export default AllWard;