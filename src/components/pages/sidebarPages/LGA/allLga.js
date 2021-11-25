import React, { useState} from 'react';
import MaterialTable from 'material-table'
import LgaService from "../../../../services/lga.service"
import "../other.css"


function Lga() {

  const [data, setData] = useState([])
  const columns = [
    { title: "LgaName", field: "LgaName" },
    { title: "State Name", field: "Statename" },
    { title: "Created", field: "Created" },
  
  
  
  ]
  React.useEffect(()=>{
    LgaService.LGA().then(res=>{
      console.log("check this lga",res)
      setData(res.data)
    })
  },[]);

  return (
    <div className="Upper">
      <MaterialTable
        title="LGA"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default Lga;