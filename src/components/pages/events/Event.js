import React, { useState, useEffect, useMemo, useRef } from "react";
import EventDataService from "../../../services/event.service";
import { useTable } from "react-table";
import "./event.css"

const Events = (props) => {
  const [events, setEvents] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const eventsRef = useRef();


  eventsRef.current = events;

  useEffect(() => {
    retrieveEvents();
  }, []);

  const onChangeSearchInput = (e) => {
    const searchInput = e.target.value;
    setSearchInput(searchInput);
  };

  const retrieveEvents = () => {
    EventDataService.getAllGeneral()
  
      .then((response) => {
        console.log(response)
        console.log(response.data)
        setEvents(response.data);
       
      })
      .catch((e) => {
        console.log(e);
      });
    
  };

  const refreshList = () => {
    retrieveEvents();
  };

  const findByInput = () => {
    EventDataService.findByInput(searchInput)
      .then((response) => {
          console.log(response)
        setEvents(response.events);
      })
      .catch((error) => {
        const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.error) ||
        error.error ||
        error.toString();
        console.log(resMessage)
        // setEvents(resMessage);
      });
  };

  const openEvent = (rowIndex) => {
    const id = eventsRef.current[rowIndex].id;

    props.history.push("/userById?id=" + id);
  };

  const deleteEvent = (rowIndex) => {
    console.log(eventsRef)
    const id = eventsRef.current[rowIndex].Id;
    
    EventDataService.remove(id)
      .then((response) => {
          console.log(response)
        props.history.push("/events");

        let newEvents = [...eventsRef.current];
        newEvents.splice(rowIndex, 1);

        setEvents(newEvents);
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
        Header: "EventTitle",
        accessor: "EventTitle",
      },
      {
        Header: "EventStartTime",
        accessor: "EventStartTime",
      },
        {
        Header: "EventEndTime",
        accessor: "EventEndTime",
      },
      {
        Header: "EventDuration",
        accessor: "EventDuration",
      },
      
      {
        Header: "EventDescription",
        accessor: "EventDescription",
        
      },
      {
        Header: "EventStreamEnbedCode",
        accessor: "EventStreamEnbedCode",
      },
        {
        Header: "EventStreamEmbedType",
        accessor: "EventStreamEmbedType",
      },
      // {
      //   Header: "HostDiscussionSpaceId",
      //   accessor: "HostDiscussionSpaceId",
      // },
      
      {
        Header: "CreatedAt",
        accessor: "CreatedAt",
        
      },
      {
        Header: "CreatedBy",
        accessor: "CreatedBy",
      },
       
      {
        Header: "HostType",
        accessor: "HostType",
        
      },
      {
        Header: "EventStatus",
        accessor: "EventStatus",
        
      },
      {
        Header: "actions",
        accessor: "Actions",
        Cell: (props) => {
         
          const rowIdx = props.row.id;

         
        
          return (
            <div>
              
              <span onClick={() => openEvent(rowIdx)}>
                <i className="far fa-edit action mr-2"></i>
              </span>

              <span onClick={() => deleteEvent(rowIdx)}>
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
    data: events,
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

export default Events;