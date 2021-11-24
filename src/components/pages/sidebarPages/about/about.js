import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import "../other.css"
import AboutService from '../../../../services/about.service';


function About() {
  const [data, setData] = useState([])
  useEffect(() => {
    getDesc()
  }, [])

  const getDesc = () => {
    AboutService.getAbout().then(res=>{
      console.log("check dataaa",res)
     setData(res.data)
   })
  }
  const columns = [
    { title: "Overview", field: "Overview" },
    { title: "CoreValue", field: "CoreValue" },
    // { title: "Objectives", field: "Objectives" },
   
    ]
  return (
    <div className="Upper">
      <MaterialTable
        title="About"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
        editable={{
          // onRowAdd: (newData) =>{
          //   StateHouseService.addStateHouse(newData)
          // },
          onRowUpdate: (oldData,newData)=>{
            console.log("check data",oldData)
            AboutService.updateAbout(oldData.id,newData)
          },
          // onRowDelete: (oldData) =>{
          //   stateHouseService.deleteStateHouse(oldData.id)
          // },
        }}
      />
    </div>
  );
}

export default About;