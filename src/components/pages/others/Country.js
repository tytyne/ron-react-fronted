import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'
import CountryService from "../../../services/country.service"


function Countries() {

  const [data, setData] = useState([])
  const columns = [
    { title: "id", field: "id" },
    { title: "CountryName", field: "CountryName" },
 
  
  
  
  ]
  useEffect(() => {
  CountryService.countries()
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