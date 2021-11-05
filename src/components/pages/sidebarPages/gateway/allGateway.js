import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import "../other.css"

const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`

function Gateway() {
  const [data, setData] = useState([])
  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = () => {
    fetch(API_URL+`/gateway/all`).then(resp => resp.json())
      .then(resp => {
          setData(resp.data)})
  }
  const columns = [
    { title: "Description", field: "Description", 
    validate: rowData => rowData.Description === undefined || rowData.Description === "" ? "Required" : true },
    ]
  return (
    <div className="Upper">
      <MaterialTable
        title="State house constituency"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
        editable={{
          onRowAdd: (newData) => new Promise((resolve, reject) => {
            //Backend call
            fetch(API_URL+`/gateway/store`, {
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
            fetch(API_URL+`/gateway/update/${oldData.GatewayID}`, {
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
            fetch(API_URL+`/gateway/${oldData.GatewayID}`, {
              method: "DELETE",
              headers: {
                'Content-type': "application/json"
              },

            }).then(resp => resp.json())
              .then(resp => {
                            resolve()
              })
          })
        }}
      />
    </div>
  );
}

export default Gateway;