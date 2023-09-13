import {MuiFileInput} from "mui-file-input";
import React, {useState,useEffect} from "react";
import server from "../server";
import {Input, Button, Checkbox} from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Orders from "./Orders";
import {useStyles} from "../useStyles";
import Title from "./Ttitle";
import {TextareaAutosize} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Link from "@material-ui/core/Link";
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

export default function MainPage(){

    const [value,setValue] = useState(null)
    const [placeholder,setPlaceholder] = useState("Додайте фото *")
    const [title,setTitle] = useState("")
    const [subTitle,setSubTitle] = useState("")
    const [text,setText] = useState("")
    const [url,setUrl] = useState("")
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
            if(value !== null && url !== ""){
                let namePhoto = value.name
                const formData = new FormData();
                formData.append('file', value);
                fetch(server+'api/uploadCarousel', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.text())


                fetch(server+'api/newCarousel', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        namePhoto,title,subTitle,text,url,value
                    })
                })
                    .then(response => response.text())
                    .then(data => {
                        document.getElementById("form").reset()
                        setValue(null)
                        get()
                        setUrl("")
                        setTitle("")
                        setText("")
                        setSubTitle("")
                    })

            }
        }else if(submitAndUpdate === "update"){
            editDB()
        }
    }

    function done(event,id) {
        fetch(server+"api/doneCarousel",{
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
        fetch(server+"api/getCarousel",{
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
                        <TableCell><CardImg src={process.env.PUBLIC_URL+"/carousel/"+row.namephoto}></CardImg></TableCell>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.subtitle}</TableCell>
                        <TableCell>{row.maintext}</TableCell>
                        <TableCell>{row.url}</TableCell>
                        <TableCell><Checkbox defaultChecked={row.activated} color="success" onChange={(e)=>{done(e,row.id)}}  /></TableCell>
                        <TableCell>
                            <DeleteIcon onClick={()=>{
                            id=row.id
                            name = row.namephoto
                            handleClickOpen()}}/>
                            <EditIcon onClick={()=>{
                                id=row.id
                                edit(row.namephoto,row.title,row.subtitle,row.maintext,row.url)}}/>
                        </TableCell>
                    </TableRow>
                )))
            })
    }

    function deleteF(){
        fetch(server+"api/deleteCarousel",{
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

    function edit(namePhotoInput,title,subTitle,text,url){
        idFrom++
        submitAndUpdate="update"
        document.getElementById("input").focus()
        setButton(<><Button onClick={()=>{clear()}}>Додати новий банер</Button></>)
        setPlaceholder(namePhotoInput)
        setUrl(url)
        setTitle(title)
        setText(text)
        setSubTitle(subTitle)
        namePhoto = namePhotoInput
        oldPhoto = namePhotoInput
    }

    function clear(){
        idFrom--
        submitAndUpdate="submit"
        setValue(null)
        setUrl("")
        setTitle("")
        setText("")
        setSubTitle("")
        setPlaceholder("Додайте фото *")
        document.getElementById("form").reset()
        setButton(<></>)
    }

    function editDB(){
        let newPhoto = false
        if(url !== ""){
            if(value !== null){
                newPhoto= true
                namePhoto = value.name
                const formData = new FormData();
                formData.append('file', value);
                fetch(server+'api/uploadCarousel', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.text())
            }

            fetch(server+"api/updateCarousel",{
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body:JSON.stringify({
                    id, namePhoto, title, subTitle, text, url, newPhoto,oldPhoto
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
                    <Title>"Карусель"</Title>
                    <form id="form" style={{width:"100%"}} key={idFrom}>
                        <MuiFileInput
                            placeholder={placeholder}
                            value={value}
                            onChange={handleChange}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>

                            <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Заголовок" onChange={(e)=>{setTitle(e.target.value)}} defaultValue={title}/>
                            <br/>
                            <Input style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Підзаголовок" onChange={(e)=>{setSubTitle(e.target.value)}} defaultValue={subTitle}/>
                            <br/>
                            <Input style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Головний текст" onChange={(e)=>{setText(e.target.value)}} defaultValue={text}/>
                            <br/>
                            <Input style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Посилання *" onChange={(e)=>{setUrl(e.target.value)}} defaultValue={url}/>

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
                    <Title>Банери в каруселі</Title>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>№</TableCell>
                                <TableCell>Фото</TableCell>
                                <TableCell>Заголовок</TableCell>
                                <TableCell>Підзаголовок</TableCell>
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
