import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'
import PageHeader from "../../Dashboard/pageHeader";
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';


function Federal() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "id" },
    { title: "FC Name", field: "FcName" },
   
  ]
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/t1/federals")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp.data)
      })
  }, [])

  return (
    
    <div className="Upper">
       {/* <PageHeader
                title="Federal constituency"
                icon={<BrandingWatermarkIcon fontSize="large" />}
            /> */}
      <MaterialTable
        title="Federal Constituency"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default Federal;