import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'


function EventCategory() {

  const [data, setData] = useState([])
  const columns = [
    { title: "EventCatID", field: "EventCatID" },
    { title: "Description", field: "Description" },
  
  ]
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/t1/eventCategories")
      .then(resp => resp.json())
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