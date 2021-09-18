import React, { useState, useEffect, useMemo, useRef } from "react";
import BroadcastForm from "./addBroadcast";
import PageHeader from "../../../components/Dashboard/pageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../../components/useTable";
import  broadcastService from "../../../services/broadcast.service";
import Controls from "../../../components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "../../../components/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Notification from "../../../components/Notification";
import ConfirmDialog from "../../../components/ConfirmDialog";


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
    { id: 'Comment', label: 'Post desc' },
    { id: 'MediaType', label: 'MediaType' },
    { id: 'HostType', label: 'HostType' },
    { id: 'CreatedAt', label: 'Created' },
    { id: 'actions', label: 'Actions', disableSorting: true }
   
    
  ]


export default function Broadcasts() {

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
        fetch("http://localhost:5000/api/v1/broadcasts")
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
                    return items.filter(x => x.Comment.toLowerCase().includes(target.value))
            }
        })
    }

 
    const addOrEdit = (broadcast, resetForm) => {
        console.log("check a broadcast",broadcast)
        if (broadcast.Id == null)
        {
            broadcastService.insertBroadcast(broadcast);
            console.log("see function");
            return 
        }
            
         
        else
        {

            broadcastService.updateBroadcast(broadcast.Id,broadcast)
            console.log("see broadcast",broadcast)
            console.log("see insert broadcast",broadcastService.insertBroadcast(broadcast))
            // console.log("update broadcast",broadcastService.updateBroadcast(broadcast))
            console.log("hello!")
            return
        }
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
        broadcastService.deleteBroadcast(Id);

        setRecords(broadcastService.getAllBroadcasts())
        setNotify({
            isOpen: true,
            message: 'Deleted Successfully',
            type: 'error'
        })
    }

    return (
        <>
            <PageHeader
                title="New BroadcastPost"
                subTitle="broadcastPost Form"
                icon={<BrandingWatermarkIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>

                <Toolbar>
                    <Controls.Input
                        label="Search Broadcasts"
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
                              (<TableRow key={item.id}>
                                   <TableCell>{index+1}</TableCell>
                                    <TableCell>{item.Comment}</TableCell>
                                    <TableCell>{item.MediaType}</TableCell>
                                    <TableCell>{item.HostType}</TableCell>
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
                title="Broadcast Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <BroadcastForm
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