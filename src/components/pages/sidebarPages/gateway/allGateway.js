import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import "../other.css"
import GatewayService from '../../../../services/gateway.service';


function Gateway() {
  const [data, setData] = useState([])
  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = () => {
    GatewayService.gateway().then(res=>{
      setData(res.data)
    })
  }
  const columns = [
    { title: "Description", field: "Description", 
    validate: rowData => rowData.Description === undefined || rowData.Description === "" ? "Required" : true },
    ]
  return (
    <div className="Upper">
      <MaterialTable
        title="Gateway"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
        editable={{
          onRowAdd: (newData) => {
            GatewayService.addGateway(newData)
            window.location.reload()

          },
          onRowUpdate: (newData, oldData) => {
            GatewayService.updateGateway(oldData.GatewayID,newData)
            window.location.reload()
          },
          onRowDelete: (oldData) => {
            console.log("check oldataa",oldData)
            GatewayService.deleteGateway(oldData.GatewayID)
            window.location.reload()
          },
        }}
      />
    </div>
  );
}

export default Gateway;