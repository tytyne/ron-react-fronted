import React, { useState} from 'react';
import MaterialTable from 'material-table'
import DiscussionSpaceOwnerService from "../../../../services/discussionSpaceOwner.service"
import "../other.css"

function DiscussionSpaceOwner() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "ID" },
    { title: "Type", field: "Type" },

  ]
  React.useEffect(()=>{
    DiscussionSpaceOwnerService.discussionSpaceOwner().then(res=>{
      console.log("check this discusion space owners",res)
      setData(res.data)
    })
  },[]);
 

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