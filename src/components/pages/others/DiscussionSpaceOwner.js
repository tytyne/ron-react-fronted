import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'
import DiscussionSpaceOwnerService from "../../../services/discussionSpace.service"


function DiscussionSpaceOwner() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "ID" },
    { title: "Type", field: "Type" },

  
  
  ]
  useEffect(() => {
  DiscussionSpaceOwner.DiscussionSpaceOwner()
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