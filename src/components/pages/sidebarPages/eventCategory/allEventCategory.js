import React, { useState} from 'react';
import '../other.css';
import MaterialTable from 'material-table'
import EventCategoryService from "../../../../services/eventCategory.service"


function EventCategory() {

  const [data, setData] = useState([])
  const columns = [
    { title: "EventCatID", field: "EventCatID" },
    { title: "Description", field: "Description" },
  
  ]
  React.useEffect(()=>{
    EventCategoryService.eventCategory().then(res=>{
      console.log("check this discusion space owners",res)
      setData(res.data)
    })
  },[]);

  return (
    <div className="Upper">
      <MaterialTable
        title="Event category"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default EventCategory;