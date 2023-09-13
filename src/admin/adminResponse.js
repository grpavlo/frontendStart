import Paper from "@material-ui/core/Paper";
import Title from "./Ttitle";
import {Checkbox,} from "@mui/material";
import Grid from "@material-ui/core/Grid";
import React, {useEffect, useState} from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

import {useStyles} from "../useStyles";
import server from "../server";
import DeleteIcon from '@mui/icons-material/Delete';

import DialogDelete from "./dialog/dialogDelete"


let id = 0

export default function AdminResponse(){
    const classes = useStyles();
    const [one,setOne]=useState("")

    const [rows,setRows] = useState(null)

    const [open, setOpen] = useState(false);

    function done(event,id) {
        fetch(server+"api/doneResponse",{
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body:JSON.stringify({
                id: id,
                done: event.target.checked
            })
        }).then(response => {
            return response.text();
        })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function deleteF(){
        fetch(server+"api/deleteResponse",{
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body:JSON.stringify({
                id: id,
            })
        }).then(response => {
            return response.text();
        }).then(get)

        setOpen(false);
    }

    function get() {
        fetch(server + "api/getResponse", {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            return response.json();
        })
            .then(data => {
                setRows(data.map((row, index) => (
                    <TableRow key={row.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{row.pib}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.response}</TableCell>
                        <TableCell>{row.data}</TableCell>
                        <TableCell><Checkbox defaultChecked={row.activated} color="success" onChange={(e) => {
                            done(e, row.id)
                        }}/></TableCell>
                        <TableCell><DeleteIcon onClick={() => {
                            id = row.id
                            handleClickOpen()
                        }}/></TableCell>
                    </TableRow>
                )))
            })
    }

    useEffect(()=>{
        get()
    },[one])


    return(
        <>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Title>Відгук від клієнта</Title>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>№</TableCell>
                                <TableCell>ПІБ</TableCell>
                                <TableCell>Назва вебінару</TableCell>
                                <TableCell>Відгук</TableCell>
                                <TableCell>Дата</TableCell>
                                <TableCell>Показувати</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
            <DialogDelete open={open} onClose={handleClose} deleteF={deleteF}/>
        </>

    )
}