import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import "../other.css"
import SenatorialService from "../../../../services/senatorial.service"

const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`

function Senatorial() {
  const [data, setData] = useState([])
  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = () => {
    SenatorialService.senatorial().then(resp=>{
      setData(resp.data)
    })
      
  }
  const columns = [
    { title: "SDName", field: "SDName", 
    validate: rowData => rowData.SDName === undefined || rowData.SDName === "" ? "Required" : true },
    ]
  return (
    <div className="Upper">
      <MaterialTable
        title="Senatorial district"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
        editable={{
          onRowAdd: (newData) => {
            SenatorialService.addSenatorial(newData)
            window.location.reload()
          },
        
          onRowUpdate: (oldData,newData) => {
            SenatorialService.updateSenatorial(oldData.id,newData)
            window.location.reload()
          },
          onRowDelete: (oldData) => {
            SenatorialService.deleteSenatorial(oldData.id)
            window.location.reload()
          }
        }}
      />
    </div>
  );
}

export default Senatorial;