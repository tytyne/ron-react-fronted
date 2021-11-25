import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import "../other.css"
import StateHouseService from "../../../../services/stateHouse.service"
import stateHouseService from '../../../../services/stateHouse.service';


function Statehouse() {
  const [data, setData] = useState([])
  useEffect(() => {
    getStates()
  }, [])

  const getStates = () => {
   StateHouseService.stateHouse().then(res=>{
     console.log(res)
     setData(res.data)
   })
  }
  const columns = [
    { title: "ShcName", field: "ShcName", 
    validate: rowData => rowData.ShcName === undefined || rowData.ShcName === "" ? "Required" : true },
    ]
  return (
    <div className="Upper">
      <MaterialTable
        title="State house constituency"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
        editable={{
          onRowAdd: (newData) =>{
            StateHouseService.addStateHouse(newData)
          },
          onRowUpdate: (oldData,newData)=>{
            stateHouseService.updateStateHouse(oldData.id,newData)
          },
          onRowDelete: (oldData) =>{
            stateHouseService.deleteStateHouse(oldData.id)
          },
        }}
      />
    </div>
  );
}

export default Statehouse;