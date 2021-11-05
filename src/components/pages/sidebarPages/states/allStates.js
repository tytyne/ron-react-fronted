import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import StateService from "../../../../services/state.service"
import authHeader from '../../../../services/auth-header';
import "../other.css"

const {REACT_APP_BACKEND_URL, REACT_APP_VERSION} = process.env
const API_URL =`${REACT_APP_BACKEND_URL}/${REACT_APP_VERSION}`

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
          onRowAdd: (newData) => new Promise((resolve, reject) => {
            //Backend call
            fetch(API_URL+`/state/store`, {
              method: "POST",
              headers: {
                'Content-type': "application/json"
              },
              body: JSON.stringify(newData)
            }).then(resp => resp.json())
              .then(resp => {
                getStates()
                resolve()
              })
          }),
          onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
            //Backend call
            fetch(API_URL+`/state/${oldData.StateID}`, {
              method: "PUT",
              headers: {
                'Content-type': "application/json",
                headers: authHeader()
              },
              body: JSON.stringify(newData)
            }).then(resp => resp.json())
              .then(resp => {
                getStates()
                resolve()
              })
          }),
          onRowDelete: (oldData) => new Promise((resolve, reject) => {
            //Backend call
            fetch(API_URL+`/state/${oldData.StateID}`, {
              method: "DELETE",
              headers: {
                'Content-type': "application/json"
              },

            }).then(resp => resp.json())
              .then(resp => {
                getStates()
                resolve()
              })
          })
        }}
      />
    </div>
  );
}

export default States;