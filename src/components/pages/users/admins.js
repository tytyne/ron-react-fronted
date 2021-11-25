import React, { useState, useEffect} from "react";
import PageHeader from "../../../components/Dashboard/pageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../../components/useTable";
import  AdminService from "../../../services/admin.service";
import Controls from "../../../components/controls/Controls";
import { Search } from "@material-ui/icons";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Notification from "../../../components/Notification";
import ConfirmDialog from "../../../components/ConfirmDialog";
import UserService from "../../../services/user.service"


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


export default function Admins() {

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
        UserService.getAdmins().then(res=>{
            setRecords(res.data)
          })
        },[]);
      
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

 
    const addOrEdit = (admin, resetForm) => {
        console.log("see admin")
        if (admin.Id == null)
       
        AdminService.insertAdmin(admin)
          
        else
        AdminService.updateAdmin(admin.Id,admin)
          
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(AdminService.getAllAdmins())
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

    const onDeactivate = id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        
        UserService.deactivateAdmin(id)
        .then((response)=>{
            console.log("checkkkkk response",response)
        })
        .catch((e)=>{
            console.log(e)
        });
       
        setNotify({
            isOpen: true,
            message: 'Activated Successfully',
            type: 'error'
        })
    }

    return (
        <>
            <PageHeader
                title="New Admin"
                subTitle="admins form"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>

                <Toolbar>
                    <Controls.Input
                        label="Search Admins"
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
                                        {/* <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
                                        </Controls.ActionButton> */}
                                        <Controls.ActionButton
                                            color="secondary"
                                            onClick={() => {
                                                setConfirmDialog({
                                                    isOpen: true,
                                                    title: 'Are you sure to inactivate this admin?',
                                                    subTitle: "You can't undo this operation",
                                                    onConfirm: () => { onDeactivate(item.Id) }
                                                })
                                            }}>
 
                                            <AccountCircleIcon fontSize="small" />

                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            {/* <Popup
                title="Admin Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <AdminForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </Popup> */}
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