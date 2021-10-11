import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'


function DiscussionSpaceOwner() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "ID" },
    { title: "Type", field: "Type" },

  
  
  ]
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/t1/discussionSpaceOwner")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp.data)
      })
  }, [])

  return (
    <div className="Upper">
      <MaterialTable
        title="Discussion space owner"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default DiscussionSpaceOwner;