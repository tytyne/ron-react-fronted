import React, { useState, useEffect } from 'react';
// import './other.css';
import MaterialTable from 'material-table'
import DonationService from "../../../../services/donation.service"
import "../other.css"


function Donations() {

  const [data, setData] = useState([])
  const [suc, setSuc] = useState([])
  const [pending, setPending] = useState([])

  const columns = [
  
    { title: "LastName", field: "LastName" },
    { title: "FirstName", field: "FirstName" },
    { title: "Amount", field: "Amount" },
    { title: "DonationType", field: "DonationType" },
    { title: "Narration", field: "Narration" },
    { title: "CreatedDate", field: "CreatedDate" },

  
  ]
  React.useEffect(()=>{
    DonationService.donations().then(res=>{
  
      setData(res.data)
    })
  },[]);
  React.useEffect(()=>{
    DonationService.success().then(res=>{
      console.log("check this sucess",res.data[0].Total)
      setSuc(res.data[0].Total)
    })
  },[]);
  React.useEffect(()=>{
    DonationService.pendings().then(res=>{
      console.log("check this pendings",res.data[0].Pending)
      setPending(res.data[0].Pending)
    })
  },[]);

  return (


    <div className="Upper">
         <h4> Total Received:{suc} </h4> <br/>
      
      <MaterialTable
        title="Donations"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default Donations;