import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import FederalService from "../../../../services/federal.service"


function Federal() {
  const [data, setData] = useState([])
  useEffect(() => {
    getFederal()
  }, [])

  const getFederal = () => {
    FederalService.federal().then(resp=>{
      setData(resp.data)})
    }

  
  const columns = [
    { title: "FcName", field: "FcName", 
    validate: rowData => rowData.FcName === undefined || rowData.FcName === "" ? "Required" : true },
    ]
  return (
    <div className="App">
      <MaterialTable
        title="federal constituency"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
        editable={{
          onRowAdd: (newData) =>{
            console.log(newData)
            FederalService.storeFederal(newData);
            window.location.reload()
          },
          
      
        onRowUpdate: (newData, oldData) => {
          FederalService.updateFederal(newData,oldData.id)
          window.location.reload()
        },
          
      
          onRowDelete: (oldData) => {
            FederalService.deleteFederal(oldData.id)
            // window.location.reload()
          },
       
        }}
      />
    </div>
  );
}

export default Federal;