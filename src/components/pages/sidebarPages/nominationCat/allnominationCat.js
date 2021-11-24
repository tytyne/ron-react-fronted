import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import "../other.css"
import NominationService from "../../../../services/nominationCat.service"

const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`

function NominationCat() {
  const [data, setData] = useState([])
  useEffect(() => {
    getNominationCat()
  }, [])

  const getNominationCat = () => {
   NominationService.nominationCategory().then(resp=>{
     setData(resp.data)
   })
  }
  const columns = [
    { title: "Description", field: "Description", 
    validate: rowData => rowData.Description === undefined || rowData.Description === "" ? "Required" : true },
    ]
  return (
    <div className="Upper">
      <MaterialTable
        title="Nomination category"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
        editable={{
          onRowAdd: (newData) => {
            NominationService.addNominationCategory(newData)
          },
        
          onRowUpdate: (newData, oldData) => {
            NominationService.updateNominationCategory(oldData.id,newData)
          },
          onRowDelete: (oldData) => {
            NominationService.deleteNominationCategory(oldData.id)
          },
        }}
      />
    </div>
  );
}

export default NominationCat;