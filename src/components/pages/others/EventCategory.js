import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'
import EventCategoryService from "../../../services/eventCategory.service"


function EventCategory() {

  const [data, setData] = useState([])
  const columns = [
    { title: "EventCatID", field: "EventCatID" },
    { title: "Description", field: "Description" },
  
  ]
  useEffect(() => {
      EventCategoryService.eventCategory()
      .then(resp => {
        setData(resp.data)
      })
  }, [])

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