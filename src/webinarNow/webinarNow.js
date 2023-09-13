import {MuiFileInput} from "mui-file-input";
import React, {useState,useEffect} from "react";
import server from "../server";
import {Input, Button, Checkbox} from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useStyles} from "../useStyles";
import Title from "./Title";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import DeleteIcon from "@mui/icons-material/Delete";
import {CardImg} from "react-bootstrap";
import DialogDelete from "./dialog/dialogDelete";
import EditIcon from '@mui/icons-material/Edit';
let id = 0
let name = ""
let namePhoto= ""
let idFrom = 0
let submitAndUpdate = "submit"
let oldPhoto = ""

export default function WebinarNow(){
    const [value,setValue] = useState(null)
    const [placeholder,setPlaceholder] = useState("Додайте фото *")
    const [url,setUrl] = useState("")
    const [title,setTitle] = useState("")
    const [one,setOne]=useState("")
    const [rows,setRows] = useState(null)
    const [open, setOpen] =useState(false);
    const [button,setButton] = useState(<></>);


    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    function submit(){
        if(submitAndUpdate === "submit"){
            if(value !== null && url !== "" && title !== ""){
                let namePhoto = value.name
                const formData = new FormData();
                formData.append('file', value);
                fetch(server+'api/uploadWebinar', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.text())

                fetch(server+'api/newWebinar', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        namePhoto,title,url
                    })
                })
                    .then(response => response.text())
                    .then(data => {
                        document.getElementById("form").reset()
                        setValue(null)
                        get()
                        setUrl("")
                    })

            }
        }else if(submitAndUpdate === "update"){
            editDB()
        }
    }

    function done(event,id) {
        fetch(server+"api/doneWebinar",{
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

    function get(){
        fetch(server+"api/getWebinar",{
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
                        <TableCell><CardImg src={process.env.PUBLIC_URL+"/Webinar/"+row.namephoto}></CardImg></TableCell>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.url}</TableCell>
                        <TableCell><Checkbox defaultChecked={row.activated} color="success" onChange={(e)=>{done(e,row.id)}}  /></TableCell>
                        <TableCell>
                            <DeleteIcon onClick={()=>{
                                id=row.id
                                name = row.namephoto
                                handleClickOpen()}}/>
                            <EditIcon onClick={()=>{
                                id=row.id
                                edit(row.namephoto,row.title,row.url)}}/>
                        </TableCell>
                    </TableRow>
                )))
            })
    }

    function deleteF(){
        fetch(server+"api/deleteWebinar",{
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body:JSON.stringify({
                id: id,
                name:name
            })
        }).then(response => {
            return response.text();
        }).then(get)

        setOpen(false);
    }

    function edit(namePhotoInput,title,url){
        idFrom++
        submitAndUpdate="update"
        document.getElementById("input").focus()
        setButton(<><Button onClick={()=>{clear()}}>Додати новий вебінар</Button></>)
        setPlaceholder(namePhotoInput)
        oldPhoto = namePhotoInput
        setUrl(url)
        setTitle(title)
        namePhoto = namePhotoInput
    }

    function clear(){
        idFrom--
        submitAndUpdate="submit"
        setValue(null)
        setUrl("")
        setTitle("")
        setPlaceholder("Додайте фото *")
        document.getElementById("form").reset()
        setButton(<></>)
    }

    function editDB(){
        let newPhoto = false

        if(url !== "" && title !== ""){
            if(value !== null){
                newPhoto= true
                namePhoto = value.name
                const formData = new FormData();
                formData.append('file', value);
                fetch(server+'api/uploadWebinar', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.text())
            }

            fetch(server+"api/updateWebinar",{
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body:JSON.stringify({
                    id, namePhoto,title, url, newPhoto,oldPhoto
                })
            }).then(response => {
                return response.text();
            }).then(()=>{
                setValue(null)
                get()
                clear()
            })
        }
    }

    useEffect(()=>{
        get()
    },[one])

    return(
        <>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Title>Вебінари</Title>
                    <form id="form" style={{width:"100%"}} key={idFrom}>
                        <MuiFileInput
                            placeholder={placeholder}
                            value={value}
                            onChange={handleChange}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Заголовок *" onChange={(e)=>{setTitle(e.target.value)}} defaultValue={title}/>
                        <br/>
                        <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Посилання *" onChange={(e)=>{setUrl(e.target.value)}} defaultValue={url}/>
                        <br/>
                        <div className={classes.seeMore}>
                            <Button onClick={()=>{submit()}}>Відправити</Button>
                            {button}
                        </div>
                    </form>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Title>Партнери</Title>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>№</TableCell>
                                <TableCell>Фото</TableCell>
                                <TableCell>Текст</TableCell>
                                <TableCell>URL</TableCell>
                                <TableCell>Активовано</TableCell>
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