import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import "../other.css"

const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`

function Senatorial() {
  const [data, setData] = useState([])
  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = () => {
    fetch(API_URL+`/senatorial/all`).then(resp => resp.json())
      .then(resp => {
        // console.log("check this states",resp.data)
          setData(resp.data)})
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
          onRowAdd: (newData) => new Promise((resolve, reject) => {
            //Backend call
            fetch(API_URL+`/senatorial/store`, {
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
            fetch(API_URL+`/senatorial/update/${oldData.id}`, {
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
            fetch(API_URL+`/senatorial/${oldData.id}`, {
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

export default Senatorial;