import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'


function NominationCategory() {

  const [data, setData] = useState([])
  const columns = [
    { title: "NominationCatID", field: "NominationCatID" },
    { title: "Description", field: "Description" },
    { title: "DateCreated", field: "DateCreated" },
  
  
  
  ]
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/t1/nominations")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp.data)
      })
  }, [])

  return (
    <div className="Upper">
      <MaterialTable
        title="Nomination category"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default NominationCategory;