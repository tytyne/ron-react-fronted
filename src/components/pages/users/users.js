import React, { useState, useEffect, useMemo, useRef } from "react";
import UserForm from "./addUser";
import PageHeader from "../../../components/Dashboard/pageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../../components/useTable";
import  UserService from "../../../services/user.service";
import Controls from "../../../components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "../../../components/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Notification from "../../../components/Notification";
import ConfirmDialog from "../../../components/ConfirmDialog";
import axios from "axios"
const API_URL="http://localhost:5000/api/v1"

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '50%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))


const headCells = [
    {id:'Row Id', label:'No'},
    { id: 'FirstName', label: 'FirstName' },
    { id: 'LastName', label: 'LastName' },
    // { id: 'Email', label: 'Email' },
    { id: 'Phone', label: 'Phone' },
    { id: 'Status', label: 'Status' },
    {id:'CreatedAt',label:'Created'},
    { id: 'actions', label: 'Actions', disableSorting: true }
   
  
  ]


export default function Users() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState([])
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })
    const [searchInput, setSearchInput] = useState("");
    

  
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);
 
      useEffect(() => {
        fetch("http://localhost:5000/api/v1/users")
          .then(resp => resp.json())
          .then(resp => {
            setRecords(resp)
          })
      }, [])
      
    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.Name.toLowerCase().includes(target.value))
            }
        })
    }

 
    const addOrEdit = (user, resetForm) => {
        console.log("see user")
        if (user.Id == null)
       
        UserService.insertUser(user)
          
        else
        UserService.updateUser(user.Id,user)
            console.log("see a user", user)
            console.log("see a user ID", user.Id)
            console.log("see insert user", UserService.insertUser(user))
            console.log("see update user",UserService.updateUser(user))
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(UserService.getAllUsers())
        setNotify({
            isOpen: true,
            message: 'Submitted Successfully',
            type: 'success'
        })
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const onDelete = id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        
        
        axios.delete(API_URL+`/user/${id}`)
        .then((response)=>{
            console.log(response)
        })
        .catch((e)=>{
            console.log(e)
        });
        setRecords(UserService.getAllUsers())
        console.log("hello",records)
        console.log("hello",UserService.getAllUsers())
        setNotify({
            isOpen: true,
            message: 'Deleted Successfully',
            type: 'error'
        })
    }

    return (
        <>
            <PageHeader
                title="New User"
                subTitle="users form"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>

                <Toolbar>
                    <Controls.Input
                        label="Search Users"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    {/* <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    /> */}
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map((item,index) =>
                                (<TableRow key={item.Id}>
                                    <TableCell>{index+1}</TableCell>
                                    <TableCell>{item.FirstName}</TableCell>
                                    <TableCell>{item.LastName}</TableCell>
                                    {/* <TableCell>{item.Email}</TableCell> */}
                                    <TableCell>{item.Phone}</TableCell>
                                    <TableCell>{item.Status}</TableCell>
                                    <TableCell>{item.CreatedAt}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="secondary"
                                            onClick={() => {
                                                setConfirmDialog({
                                                    isOpen: true,
                                                    title: 'Are you sure to delete this user?',
                                                    subTitle: "You can't undo this operation",
                                                    onConfirm: () => { onDelete(item.Id) }
                                                })
                                            }}>
                                            <CloseIcon fontSize="small" />
                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            <Popup
                title="User Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <UserForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </Popup>
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </>
    )
}