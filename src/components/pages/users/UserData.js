import React, { useState, useEffect, useMemo, useRef } from "react";
import UserDataService from "../../../services/user.service";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { useTable } from "react-table";

const UsersList = (props) => {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const usersRef = useRef();


  usersRef.current = users;

  useEffect(() => {
    retrieveUsers();
  }, []);

  const onChangeSearchInput = (e) => {
    const searchInput = e.target.value;
    setSearchInput(searchInput);
  };

  const retrieveUsers = () => {
    UserDataService.getAll()
  
      .then((response) => {
        console.log(response)
        console.log(response.users)
        setUsers(response.users);
       
      })
      .catch((e) => {
        console.log(e);
      });
    
  };

  const refreshList = () => {
    retrieveUsers();
  };

  const findByInput = () => {
    UserDataService.findByInput(searchInput)
      .then((response) => {
          console.log(response)
        setUsers(response.data.user);
      })
      .catch((error) => {
        const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.error) ||
        error.error ||
        error.toString();
        console.log(resMessage)
        // setUsers(resMessage);
      });
  };

  const openUser = (rowIndex) => {
    const id = usersRef.current[rowIndex].id;

    props.history.push("/userById?id=" + id);
  };

  const deleteUser = (rowIndex) => {
    console.log(usersRef)
    const id = usersRef.current[rowIndex].Id;
    
    UserDataService.remove(id)
      .then((response) => {
          console.log(response)
        props.history.push("/users");

        let newUsers = [...usersRef.current];
        newUsers.splice(rowIndex, 1);

        setUsers(newUsers);
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
        Header: "Firstname",
        accessor: "FirstName",
      },
      {
        Header: "Lastname",
        accessor: "LastName",
      },
        {
        Header: "email",
        accessor: "Email",
      },
      {
        Header: "phone",
        accessor: "Phone",
      },
      
      {
        Header: "status",
        accessor: "Status",
        
      },
      {
        Header: "actions",
        accessor: "Actions",
        Cell: (props) => {
         
          const rowIdx = props.row.id;

         
        
          return (
            <div>
              
              <span onClick={() => openUser(rowIdx)}>
                <i className="far fa-edit action mr-2"></i>
              </span>

              <span onClick={() => deleteUser(rowIdx)}>
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
    data: users,
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

export default UsersList;