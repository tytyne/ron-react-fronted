import React, { useState, useEffect, useMemo, useRef } from "react";
import EventForm from "./AddEvent";
import PageHeader from "../../../components/Dashboard/pageHeader";
import EventIcon from '@material-ui/icons/Event';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../../components/useTable";
import Controls from "../../../components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "../../../components/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Notification from "../../../components/Notification";
import ConfirmDialog from "../../../components/ConfirmDialog";
import EventService from "../../../services/event.service"


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))


const headCells = [
    { id: 'No', label: 'No' },
    { id: 'EventTitle', label: 'EventTitle' },
    { id: 'EventDuration', label: 'Duration' },
    { id: 'EventDescription', label: 'Description' },
    { id: ' CreatedAt', label: 'Created' },
    { id: 'actions', label: 'Actions', disableSorting: true }
   
 
  ]


export default function Events() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState([])
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })
    

  
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);
 
      useEffect(() => {
        EventService.getAllGeneral().then(resp=>{
            setRecords(resp)})
      }, [])
    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.EventTitle.toLowerCase().includes(target.value))
            }
        })
    }

 
    const addOrEdit = (event, resetForm) => {
        console.log("check event",event)
        if (event.Id == 0)
       
            EventService.insertEvent(event).then(res=>{
                console.log("check response",res)
            })
           
        else
            EventService.updateEvent(event.Id,event)
            console.log("check event",event.Id) 
            window.location.reload()
            
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(records)
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

    const onDelete = Id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        console.log("check this idddd",Id)
        EventService.deleteEvent(Id).then((response)=>{
            console.log("checkkkkk response",response)
        })
        .catch((e)=>{
            console.log(e)
        });
      
      
        setRecords(records)
        setNotify({
            isOpen: true,
            message: 'Deleted Successfully',
            type: 'error'
        })
    }

    return (
        <>
            <PageHeader
                title="New Event"
                subTitle="events Form"
                icon={<EventIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>

                <Toolbar>
                    <Controls.Input
                        label="Search Events"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map((item,index) =>
                                (<TableRow key={item.Id}>
                                     <TableCell>{index+1}</TableCell>
                                    <TableCell>{item.EventTitle}</TableCell>
                                    <TableCell>{item.EventDuration}</TableCell>
                                    <TableCell>{item.EventDescription}</TableCell>
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
                                                    title: 'Are you sure to delete this record?',
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
                title="Event Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <EventForm
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