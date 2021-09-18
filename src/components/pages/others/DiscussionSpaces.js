import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'


function DiscussionSpaces() {

  const [data, setData] = useState([])
  const columns = [
    { title: "Id", field: "Id" },
    { title: "Name", field: "Name" },
    { title: "Purpose", field: "Purpose" },
    { title: "Privacy", field: "Privacy" },
    { title: "CreatedBy", field: "CreatedBy" },
    { title: "DateCreated", field: "DateCreated" },
    { title: "DateUpdated", field: "DateUpdated" },
    { title: "ExpiryDate", field: "ExpiryDate" },
    { title: "CanExpire", field: "CanExpire" },
    { title: "Status", field: "Status" },
    { title: "Rules", field: "Rules" },
    { title: "AcceptByInvite", field: "AcceptByInvite" },
    { title: "AcceptByApproval", field: "AcceptByApproval" },
    { title: "OwnerID", field: "OwnerID" },
    { title: "OwnerType", field: "OwnerType" },
  

  
  ]
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/t1/discussions")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp.data)
      })
  }, [])

  return (
    <div className="Upper">
      <MaterialTable
        title="Discussion spaces"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default DiscussionSpaces;