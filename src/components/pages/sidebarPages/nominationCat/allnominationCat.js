import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import "../other.css"

const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`

function NominationCat() {
  const [data, setData] = useState([])
  useEffect(() => {
    getFederal()
  }, [])

  const getFederal = () => {
    fetch(API_URL+`/nominationcategory/all`).then(resp => resp.json())
      .then(resp => {
          setData(resp.data)})
  }
  const columns = [
    { title: "Description", field: "Description", 
    validate: rowData => rowData.Description === undefined || rowData.Description === "" ? "Required" : true },
    ]
  return (
    <div className="App">
      <MaterialTable
        title="Nomination category"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
        editable={{
          onRowAdd: (newData) => new Promise((resolve, reject) => {
            //Backend call
            fetch(API_URL+`/nominationcategory/store`, {
              method: "POST",
              headers: {
                'Content-type': "application/json"
              },
              body: JSON.stringify(newData)
            }).then(resp => resp.json())
              .then(resp => {
                            resolve()
              })
          }),
          onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
            //Backend call
            fetch(API_URL+`/nominationcategory/update/${oldData.id}`, {
              method: "PUT",
              headers: {
                'Content-type': "application/json"
              },
              body: JSON.stringify(newData)
            }).then(resp => resp.json())
              .then(resp => {
                            resolve()
              })
          }),
          onRowDelete: (oldData) => new Promise((resolve, reject) => {
            //Backend call
            fetch(API_URL+`/nominationcategory/${oldData.id}`, {
              method: "DELETE",
              headers: {
                'Content-type': "application/json"
              },

            }).then(resp => resp.json())
              .then(resp => {resolve()
              })
          })
        }}
      />
    </div>
  );
}

export default NominationCat;