import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import StateService from "../../../../services/state.service"
import "../other.css"



function States() {
  const [data, setData] = useState([])
  useEffect(() => {
    getStates()
  }, [])

  const getStates = () => {
    StateService.allstates().then(resp=>{
      setData(resp.data)
    })
  }
  const columns = [
    { title: "Statename", field: "Statename", 
    validate: rowData => rowData.Statename === undefined || rowData.Statename === "" ? "Required" : true },
    ]
  return (
    <div className="App">
      <MaterialTable
        title="States"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
        editable={{
          onRowAdd: (newData) =>{
            StateService.storeState(newData)
          },
          onRowUpdate: (newData, oldData) =>{
            StateService.updateState(newData,oldData.StateID)
          },
          onRowDelete: (oldData) =>{
            StateService.deleteState(oldData.StateID)
          }
        }}
      />
    </div>
  );
}

export default States;