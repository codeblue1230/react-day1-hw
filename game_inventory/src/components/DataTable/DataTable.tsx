// External Imports
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';

// Internal Imports
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { GameForm } from '../GameForm';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 150
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 110,
        type: 'number'
    },
    {
        field: 'system',
        headerName: 'System',
        width: 150,
    },
    {
        field: 'year_made',
        headerName: 'Year Made',
        width: 150,
        type: 'number'
    },
    {
        field: 'genre',
        headerName: 'Genre',
        width: 150,
    }
];


  export const DataTable = () => {
    const { gameData, getData } = useGetData()
    const [ open, setOpen ] = useState(false)
    const [ gridData, setData ] = useState<GridRowSelectionModel>([])

    
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }


    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={gameData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5
                        }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                onRowSelectionModelChange={(newSelectionModel) => setData(newSelectionModel)}
            />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant='contained' color='warning' onClick={deleteData}>Delete</Button>    
            {/* Dialog Popup for creating a Game */}
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Update A Game</DialogTitle>
                <DialogContent>
                    <DialogContentText>Game id: {gridData[0]}</DialogContentText>
                    <GameForm id={`${gridData[0]}`}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='error'>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
  }