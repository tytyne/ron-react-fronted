import React, { useState} from 'react';
import MaterialTable from 'material-table'
import ElectedPositionService from "../../../../services/electedPosition.service"
import "../other.css"


function ElectedPosition() {

  const [data, setData] = useState([])
  const columns = [
    { title: "PostionID", field: "PostionID" },
    { title: "Description", field: "Description" },
    { title: "MinVoteRequired", field: "MinVoteRequired" },
    { title: "MinNominationsRequired", field: "MinNominationsRequired" },
    { title: "DateCreated", field: "DateCreated" },
  
  ]
  React.useEffect(()=>{
    ElectedPositionService.electedPosition().then(res=>{
      console.log("check this ward",res)
      setData(res.data)
    })
  },[]);

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