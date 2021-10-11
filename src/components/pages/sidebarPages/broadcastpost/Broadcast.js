import React, { useState, useEffect, useMemo, useRef } from "react";
import BroadcastDataService from "../../../services/broadPost.service"
import { useTable } from "react-table";
// import "../assets/dist/css/style.min.css"

const  BroadcastPostsList = (props) => {
  const [broadcasts,  setBroadcasts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const broadcastsRef = useRef();


  broadcastsRef.current = broadcasts;

  useEffect(() => {
    retrieveBroadcasts();
  }, []);

  const onChangeSearchInput = (e) => {
    const searchInput = e.target.value;
    setSearchInput(searchInput);
  };

  const retrieveBroadcasts = () => {
     BroadcastDataService.getAll()
  
      .then((response) => {
        console.log(response)
        console.log(response.broadcastlist)
         setBroadcasts(response.broadcastlist);
       
      })
      .catch((e) => {
        console.log(e);
      });
    
  };

  const refreshList = () => {
    retrieveBroadcasts();
  };

  const findByInput = () => {
     BroadcastDataService.findByInput(searchInput)
      .then((response) => {
          console.log(response)
         setBroadcasts(response.data.broadcast);
      })
      .catch((error) => {
        const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.error) ||
        error.error ||
        error.toString();
        console.log(resMessage)
        //  setBroadcasts(resMessage);
      });
  };

  const openBroadcast = (rowIndex) => {
    const id = broadcastsRef.current[rowIndex].id;

    props.history.push("/broadcastById?id=" + id);
  };

  const deleteBroadcast = (rowIndex) => {
    console.log(broadcastsRef)
    const id = broadcastsRef.current[rowIndex].Id;
    
     BroadcastDataService.remove(id)
      .then((response) => {
          console.log(response)
        props.history.push("/broadcasts");

        let newBroadcasts = [...broadcastsRef.current];
        newBroadcasts.splice(rowIndex, 1);

         setBroadcasts(newBroadcasts);
        refreshList();
      })
      .catch((error) => {
        const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.error) ||
        error.error ||
        error.toString();
        console.log(resMessage)
      });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Comment",
        accessor: "Comment",
      },
      {
        Header: "TargetType",
        accessor: "TargetType",
      },
        
      {
        Header: "CreatedBy",
        accessor: "CreatedBy",
      },
      
      {
        Header: "CreatedAt",
        accessor: "CreatedAt",
        
      },
      {
        Header: "UpdatedBy",
        accessor: "UpdatedBy",
      },
      {
        Header: "UpdatedAt",
        accessor: "UpdatedAt",
      },
      
      {
        Header: "MediaType",
        accessor: "MediaType",
        
      },
      
      {
        Header: "MediaURL",
        accessor: "MediaURL",
      },
      
      {
        Header: "Status",
        accessor: "Status",
        
      },
      {
        Header: "actions",
        accessor: "Actions",
        Cell: (props) => {
         
          const rowIdx = props.row.id;

         
        
          return (
            <div>
              
              <span onClick={() => openBroadcast(rowIdx)}>
                <i className="far fa-edit action mr-2"></i>
              </span>

              <span onClick={() => deleteBroadcast(rowIdx)}>
                <i className="fas fa-trash action"></i>
              </span>
            </div>
          );
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: broadcasts,
  });
  console.log(getTableProps)

  return (
    <div className="main__container">
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by input"
            value={searchInput}
            onChange={onChangeSearchInput}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByInput}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-12 list">
        <table
          className="table table-striped table-bordered"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default  BroadcastPostsList;