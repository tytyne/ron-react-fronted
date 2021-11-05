import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'
import PageHeader from "../../Dashboard/pageHeader";
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import FederalService from "../../../services/federal.service"


function Federal() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "id" },
    { title: "FC Name", field: "FcName" },
   
  ]
  useEffect(() => {
   FederalService.federal()
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