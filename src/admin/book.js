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

export default function Book(){

    const classes = useStyles();
    const [one,setOne]=useState("")
    const [text,setText] =  useState("");
    const [text1,setText1] =  useState("");
    const [text2,setText2] =  useState("");
    const [text3,setText3] =  useState("");
    const [text4,setText4] =  useState("");
    const [idForm,setIdForm] = useState(0)
    const [rows,setRows] = useState(null)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function get(){
        fetch(server+"api/getByBook",{
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
                        <TableCell>{row.pib}</TableCell>
                        <TableCell>{row.tel}</TableCell>
                        <TableCell>{row.count}</TableCell>
                        <TableCell>{row.city}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.cod}</TableCell>
                        <TableCell>{row.promocod}</TableCell>
                        <TableCell>{row.data}</TableCell>
                        <TableCell><Checkbox  defaultChecked={row.done} color="success" onChange={(e)=>{done(e,row.id)}} /></TableCell>
                        <TableCell><DeleteIcon onClick={()=>{
                            id=row.id
                            handleClickOpen()}}/></TableCell>
                    </TableRow>
                )))
            })

        fetch(server+"api/getBook",{
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            return response.json();
        })
            .then(data => {
                setIdForm(data.id)
                setText(data.text)
                setText1(data.text1)
                setText2(data.text2)
                setText3(data.text3)
                setText4(data.text4)
            })
    }

    useEffect(()=>{
        get()
    },[one])

    function done(event,id) {
        fetch(server+"api/doneByBook",{
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

    function save() {
        fetch(server+"api/saveBook",{
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body:JSON.stringify({
                text,text1,text2,text3,text4
            })
        }).then(response => {
            return response.text();
        }).then(get)
    }

    function deleteF(){
        fetch(server+"api/deleteBookBy",{
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

    return(
        <>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Title>Кліенти які замовили книгу</Title>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>№</TableCell>
                                <TableCell>ПІБ</TableCell>
                                <TableCell>Телефон</TableCell>
                                <TableCell>Кількість</TableCell>
                                <TableCell>Місто, № відділення</TableCell>
                                <TableCell>email</TableCell>
                                <TableCell>Підприємство</TableCell>
                                <TableCell>ЄДРПОУ</TableCell>
                                <TableCell>Промокод</TableCell>
                                <TableCell>Дата</TableCell>
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
                    <form key={idForm}>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}}  onChange={(e)=>{setText(e.target.value)}} defaultValue={text} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}}  onChange={(e)=>{setText1(e.target.value)}} defaultValue={text1}/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}}  onChange={(e)=>{setText2(e.target.value)}} defaultValue={text2}/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}}  onChange={(e)=>{setText3(e.target.value)}} defaultValue={text3}/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}}  onChange={(e)=>{setText4(e.target.value)}} defaultValue={text4}/>
                        <br/>
                        <Button onClick={save}>Зберегти</Button>
                    </form>
                </Paper>
            </Grid>
            <DialogDelete open={open} onClose={handleClose} deleteF={deleteF}/>
        </>
    )
}