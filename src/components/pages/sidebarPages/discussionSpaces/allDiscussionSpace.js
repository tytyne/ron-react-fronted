import React, { useState} from 'react';
// import './other.css';
import MaterialTable from 'material-table'
import DiscussionSpaceService from "../../../../services/discussionSpace.service"
import "../other.css"


function DiscussionSpaces() {

  const [data, setData] = useState([])
  const columns = [
    { title: "Id", field: "Id" },
    { title: "Name", field: "Name" },
    { title: "Purpose", field: "Purpose" },
    { title: "Privacy", field: "Privacy" },
    { title: "Status", field: "Status" },
    { title: "Rules", field: "Rules" },
  

  

  
  ]
  
  React.useEffect(()=>{
    DiscussionSpaceService.discussionSpace().then(res=>{
      console.log("check this discusion space",res)
      setData(res.resultData)
    })
  },[]);
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