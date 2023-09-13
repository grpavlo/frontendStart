import {useStyles} from "../useStyles";
import React, {useEffect, useState} from "react";
import server from "../server";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {Button, Checkbox, Input} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Title from "./Ttitle";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Link from "@material-ui/core/Link";
import DialogDelete from "./dialog/dialogDelete";

let id = 0


export default function ByOrRegistration(){

    const classes = useStyles();
    const [one,setOne]=useState("")

    const [rows,setRows] = useState(null)
    const [rows2,setRows2] = useState(null)
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    function get(){
        fetch(server+"api/getWebinarOldBy",{
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            return response.json();
        })
            .then(data => {
                console.log(data)
                setRows(data.map((row,index) => (
                    <TableRow key={row.id}>
                        <TableCell>{index+1}</TableCell>
                        <TableCell><a href={row.url}>Вебінар</a></TableCell>
                        <TableCell>{row.pib}</TableCell>
                        <TableCell>{row.tel}</TableCell>
                        <TableCell>{row.city}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.promocod}</TableCell>
                        <TableCell>{row.position}</TableCell>
                        <TableCell>{row.question}</TableCell>
                        <TableCell>{row.submit}</TableCell>
                        <TableCell>{row.data}</TableCell>
                        <TableCell>{row.hb}</TableCell>
                        <TableCell>{row.edrpo}</TableCell>
                        <TableCell><Checkbox  defaultChecked={row.permission} color="success" disabled /></TableCell>
                        <TableCell><Checkbox  defaultChecked={row.done} color="success" onChange={(e)=>{done(e,row.id)}} /></TableCell>
                        <TableCell><DeleteIcon onClick={()=>{
                            id=row.id
                            handleClickOpen()}}/></TableCell>
                    </TableRow>
                )))
            })

        fetch(server+"api/getWebinarBy",{
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            return response.json();
        })
            .then(data => {
                console.log(data)
                setRows2(data.map((row,index) => (
                    <TableRow key={row.id}>
                        <TableCell>{index+1}</TableCell>
                        <TableCell><a href={row.url}>Вебінар</a></TableCell>
                        <TableCell>{row.pib}</TableCell>
                        <TableCell>{row.tel}</TableCell>
                        <TableCell>{row.city}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.promocod}</TableCell>
                        <TableCell>{row.position}</TableCell>
                        <TableCell>{row.question}</TableCell>
                        <TableCell>{(row.online ? "Онлайн":"")+" "+(row.offline ? "Офлайн":"") }</TableCell>
                        <TableCell>{row.hb}</TableCell>
                        <TableCell>{row.edrpo}</TableCell>
                        <TableCell><Checkbox  defaultChecked={row.permission} color="success" disabled /></TableCell>
                        <TableCell>{row.data}</TableCell>
                        <TableCell><Checkbox  defaultChecked={row.done} color="success" onChange={(e)=>{done2(e,row.id)}} /></TableCell>
                        <TableCell><DeleteIcon onClick={()=>{
                            id=row.id
                            handleClickOpen2()}}/></TableCell>
                    </TableRow>
                )))
            })
    }

    useEffect(()=>{
        get()
    },[one])

    function done(event,id) {
        fetch(server+"api/doneWebinarOldBy",{
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

    function done2(event,id) {
        fetch(server+"api/doneWebinarBy",{
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

    function deleteF(){
        fetch(server+"api/deleteWebinarOldBy",{
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

    function deleteF2(){
        fetch(server+"api/deleteWebinarBy",{
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

        setOpen2(false);
    }

    return(
        <>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Title>Замовлення</Title>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>№</TableCell>
                                <TableCell>Посилання</TableCell>
                                <TableCell>ПІБ</TableCell>
                                <TableCell>Телефон</TableCell>
                                <TableCell>Адреса</TableCell>
                                <TableCell>email</TableCell>
                                <TableCell>Підприємство</TableCell>
                                <TableCell>Промокод</TableCell>
                                <TableCell>Посада</TableCell>
                                <TableCell>Питання</TableCell>
                                <TableCell>Куди</TableCell>
                                <TableCell>Дата</TableCell>
                                <TableCell>Дата народження</TableCell>
                                <TableCell>ЄДРПОУ</TableCell>
                                <TableCell>Згода</TableCell>
                                <TableCell>Виконано</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Title>Реєстрації</Title>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>№</TableCell>
                                <TableCell>Посилання</TableCell>
                                <TableCell>ПІБ</TableCell>
                                <TableCell>Телефон</TableCell>
                                <TableCell>Адреса</TableCell>
                                <TableCell>email</TableCell>
                                <TableCell>Підприємство</TableCell>
                                <TableCell>Промокод</TableCell>
                                <TableCell>Посада</TableCell>
                                <TableCell>Питання</TableCell>
                                <TableCell>Онлай чи офлайн</TableCell>
                                <TableCell>Дата народження</TableCell>
                                <TableCell>ЄДРПОУ</TableCell>
                                <TableCell>Згода</TableCell>
                                <TableCell>Дата</TableCell>
                                <TableCell>Виконано</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows2}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
            <DialogDelete open={open} onClose={handleClose} deleteF={deleteF}/>
            <DialogDelete open={open2} onClose={handleClose2} deleteF={deleteF2}/>
        </>
    )
}