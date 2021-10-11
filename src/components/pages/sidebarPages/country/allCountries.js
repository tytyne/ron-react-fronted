import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'


function Countries() {

  const [data, setData] = useState([])
  const columns = [
    { title: "id", field: "id" },
    { title: "CountryName", field: "CountryName" },
 
  
  
  
  ]
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/t1/countries")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp.data)
      })
  }, [])

  return (
    <div className="Upper">
      <MaterialTable
        title="countries"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default Countries;