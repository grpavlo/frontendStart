import Paper from "@material-ui/core/Paper";
import Title from "./Ttitle";
import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Input
} from "@mui/material";
import Grid from "@material-ui/core/Grid";
import React, {useEffect, useState} from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";
import {useStyles} from "../useStyles";
import server from "../server";
import DeleteIcon from '@mui/icons-material/Delete';
import {red} from "@mui/material/colors";
import DialogDelete from "./dialog/dialogDelete"
function preventDefault(event) {
    event.preventDefault();
}

let id = 0

export default function Contact() {
    const classes = useStyles();
    const [one,setOne]=useState("")

    const [rows,setRows] = useState(null)

    const [open, setOpen] = useState(false);

    const [text,setText] =  useState("");
    const [text1,setText1] =  useState("");
    const [text2,setText2] =  useState("");
    const [text3,setText3] =  useState("");
    const [text4,setText4] =  useState("");
    const [text5,setText5] =  useState("");
    const [text6,setText6] = useState("");
    const [text7,setText7] =  useState("");
    const [text8,setText8] =  useState("");
    const [text9,setText9] =  useState("");
    const [idForm,setIdForm] = useState(0)

    function done(event,id) {
        fetch(server+"api/doneClientContact",{
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
        fetch(server+"api/deleteClientContact",{
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

    function get(){
        fetch(server+"api/getClientContact",{
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            return response.json();
        })
            .then(data => {
                setRows(data.map((row,index) => (
                    <TableRow key={row.id}>
                        <TableCell>{index+1}</TableCell>
                        <TableCell>{row.pib}</TableCell>
                        <TableCell>{row.tel}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.question}</TableCell>
                        <TableCell>{row.data}</TableCell>
                        <TableCell><Checkbox  defaultChecked={row.done} color="success" onChange={(e)=>{done(e,row.id)}} /></TableCell>
                        <TableCell><DeleteIcon onClick={()=>{
                            id=row.id
                            handleClickOpen()}}/></TableCell>
                    </TableRow>
                )))
            })

        fetch(server+"api/getClientContactInfo",{
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
                setText5(data.text5)
                setText6(data.text6)
                setText7(data.text7)
                setText8(data.text8)
                setText9(data.text9)
            })
    }

    useEffect(()=>{
        get()
    },[one])

    function save() {
        console.log(text,text1,text2,text3,text4,text5,text6,text7,text8,text9)
        fetch(server+"api/saveContactInfo",{
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body:JSON.stringify({
                text,text1,text2,text3,text4,text5,text6,text7,text8,text9
            })
        }).then(response => {
            return response.text();
        }).then(get)
    }

    return(
        <>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Title>Кліенти які хочуть зв'язатися</Title>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>№</TableCell>
                                <TableCell>ПІБ</TableCell>
                                <TableCell>Телефон</TableCell>
                                <TableCell>email</TableCell>
                                <TableCell>Питання</TableCell>
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
                        <Input style={{width:"100%",margin:"10px 0px 10px"}}  onChange={(e)=>{setText5(e.target.value)}} defaultValue={text5}/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}}  onChange={(e)=>{setText6(e.target.value)}} defaultValue={text6}/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}}  onChange={(e)=>{setText7(e.target.value)}} defaultValue={text7}/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}}  onChange={(e)=>{setText8(e.target.value)}} defaultValue={text8}/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}}  onChange={(e)=>{setText9(e.target.value)}} defaultValue={text9}/>
                        <br/>
                        <Button onClick={save}>Зберегти</Button>
                    </form>
                </Paper>
            </Grid>
            <DialogDelete open={open} onClose={handleClose} deleteF={deleteF}/>
        </>

    )
}