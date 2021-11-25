import React, { useState} from 'react';
import MaterialTable from 'material-table'
import CountryService from "../../../../services/country.service"
import "../other.css"


function Countries() {

  const [data, setData] = useState([])
  const columns = [
    { title: "id", field: "id" },
    { title: "CountryName", field: "CountryName" },
 
  
  
  
  ]
  React.useEffect(()=>{
    CountryService.countries().then(res=>{
      console.log("check this senatorial",res)
      setData(res.data)
    })
  },[]);

  return (
    <div className="Upper">
      <MaterialTable
        title="countries"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default Countries;