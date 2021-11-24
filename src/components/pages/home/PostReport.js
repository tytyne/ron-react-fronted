import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import PostReportService from "../../../services/postReport.service"


function Posts() {

  const [data, setData] = useState([])
  const columns = [
    { title: "PostName", field: "Comment" },
    { title: "LastName", field: "LastName" },
    { title: "FirstName", field: "FirstName" },
    { title: "likes", field: "likes" },
    // {title:"CreatedAt",field:"CreatedAt"}

  
  ]
  useEffect(() => {
  PostReportService.posts()
      .then(resp => {
        setData(resp.data)
      })
  }, [])

  return (
    <div className="">
      <MaterialTable
        title="FeedPosts Report"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default Posts;