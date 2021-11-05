import React, { useState, useEffect } from 'react';
import './other.css';
import MaterialTable from 'material-table'
import NominationCategoryService from "../../../services/nominationCat.service"
import nominationCatService from '../../../services/nominationCat.service';


function NominationCategory() {

  const [data, setData] = useState([])
  const columns = [
    { title: "NominationCatID", field: "NominationCatID" },
    { title: "Description", field: "Description" },
    { title: "DateCreated", field: "DateCreated" },
  
  
  
  ]
  useEffect(() => {
  nominationCatService.nominationCategory()
      .then(resp => {
        setData(resp.data)
      })
  }, [])

  return (
    <div className="Upper">
      <MaterialTable
        title="Nomination category"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default NominationCategory;