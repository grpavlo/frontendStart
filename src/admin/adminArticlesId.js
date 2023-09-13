import {MuiFileInput} from "mui-file-input";
import React, {useState,useEffect} from "react";
import server from "../server";
import {Input, Button, Checkbox} from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useStyles} from "../useStyles";
import Title from "./Ttitle";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import DeleteIcon from "@mui/icons-material/Delete";
import {CardImg} from "react-bootstrap";
import DialogDelete from "./dialog/dialogDelete";
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveIcon from "@mui/icons-material/Remove";

let id = 0
let name = ""
let namePhoto= ""
let idFrom = 0
let submitAndUpdate = "submit"
let oldPhoto = ""

let pointTitle = []
let pointsText = []
let countPoint = 1

export default function AdminArticlesId(){
    const [value,setValue] = useState(null)
    const [placeholder,setPlaceholder] = useState("Додайте фото *")
    const [title,setTitle] = useState("")
    const [one,setOne]=useState("")
    const [subtitle,setSubtitle]=useState("")
    const [subtitlePhoto,setSubtitlePhoto]=useState("")
    const [titlePhoto,setTitlePhoto]=useState("")
    const [rows,setRows] = useState(null)
    const [open, setOpen] =useState(false);
    const [button,setButton] = useState(<></>);

    const [point,setPoint] = useState([]);
    const [pointText,setPointText] = useState([]);


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
            if(value !== null  && title !== "" && subtitle !== ""){
                let pointDB = [{
                    pointTitle,pointsText
                }]

                let namePhoto = value.name
                const formData = new FormData();
                formData.append('file', value);
                fetch(server+'api/uploadArticlesId', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.text())



                fetch(server+'api/newArticlesId', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        namePhoto,title,subtitle,titlePhoto,subtitlePhoto,pointDB
                    })
                })
                    .then(response => response.text())
                    .then(data => {
                        document.getElementById("form").reset()
                        setValue(null)
                        pointTitle = []
                        pointsText = []
                        countPoint = 1
                        setPoint([])
                        setPointText([])
                        setTitlePhoto("")
                        setSubtitlePhoto("")
                        setSubtitle("")
                        get()
                    })

            }
        }else if(submitAndUpdate === "update"){
            editDB()
        }
    }

    function get(){
        fetch(server+"api/getArticlesId",{
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
                        <TableCell><CardImg src={process.env.PUBLIC_URL+"/ArticlesId/"+row.namephoto}></CardImg></TableCell>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.url}</TableCell>
                        <TableCell>
                            <DeleteIcon onClick={()=>{
                                id=row.id
                                name = row.namephoto
                                handleClickOpen()}}/>
                            <EditIcon onClick={()=>{
                                id=row.id
                                edit(row.namephoto,row.title, row["point"], row.subtitle,row.subtitlephoto,row.titlephoto)}}/>
                        </TableCell>
                    </TableRow>
                )))
            })
    }

    function deleteF(){
        fetch(server+"api/deleteArticlesId",{
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

    function edit(namePhotoInput,title,point,subtitle,subtitlephoto,titlephoto){
        idFrom++
        submitAndUpdate="update"
        document.getElementById("input").focus()
        setButton(<><Button onClick={()=>{clear()}}>Додати новий пункт</Button></>)
        setPlaceholder(namePhotoInput)
        oldPhoto = namePhotoInput
        setTitle(title)
        let pointDB = JSON.parse(point)[0]
        setSubtitle(subtitle)
        setSubtitlePhoto(subtitlephoto)
        setTitlePhoto(titlephoto)
        pointTitle = pointDB.pointTitle
        pointsText = pointDB.pointsText
        countPoint = pointDB.pointTitle.length
        let arr = []
        for(let i = 0;i<pointTitle.length;i++){
            if(i !== pointTitle.length-1){
                arr = arr.concat(pointTitle[i])
            }
        }
        setPoint(arr)
        setPointText(pointsText)
        namePhoto = namePhotoInput
    }

    function clear(){
        idFrom--
        setTitlePhoto("")
        setSubtitlePhoto("")
        setSubtitle("")
        submitAndUpdate="submit"
        setValue(null)
        setTitle("")
        setPlaceholder("Додайте фото *")
        pointTitle = []
        pointsText = []
        countPoint = 1
        setPoint([])
        setPointText([])
        get()
        document.getElementById("form").reset()
        setButton(<></>)
    }

    function editDB(){
        let newPhoto = false

        if( title !== ""){
            if(value !== null){
                newPhoto= true
                namePhoto = value.name
                console.log(namePhoto)
                const formData = new FormData();
                formData.append('file', value);
                fetch(server+'api/uploadArticlesId', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.text())
            }

            let pointDB = [{
                pointTitle,pointsText
            }]


            fetch(server+"api/updateArticlesId",{
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body:JSON.stringify({
                    id,newPhoto, namePhoto,title,subtitle,titlePhoto,subtitlePhoto,pointDB,oldPhoto
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


    function removeLastInput() {
        if(countPoint !== 1){
            const updatedInputs = [...point];
            updatedInputs.pop();
            setPoint(updatedInputs);

            if(pointTitle.length !== 1 && pointTitle[countPoint-1] !== undefined){
                const updatedPointsTitle = pointTitle
                updatedPointsTitle.pop()
                pointTitle = updatedPointsTitle

                const updatedPointsText = pointsText
                updatedPointsText.pop()
                pointsText = updatedPointsText
            }

            const updatedInputsText = [...pointText];
            updatedInputsText.pop();
            setPointText(updatedInputsText);
            countPoint--

        }
        console.log(pointTitle,pointsText)
    }

    function addInputPoint(){
        console.log(pointTitle.length,countPoint)
        console.log(pointTitle[pointTitle.length-1])
        if(pointTitle.length === countPoint && pointTitle[pointTitle.length-1] !== ""){
            countPoint++
            setPoint([...point,(
                <></>
            )])
        }

    }


    return(
        <>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Title>Вебінари</Title>
                    <form id="form" style={{width:"100%"}} key={idFrom}>
                        <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Заголовок *" onChange={(e)=>{setTitle(e.target.value)}} defaultValue={title}/>
                        <br/>
                        <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Під заголовок *" onChange={(e)=>{setSubtitle(e.target.value)}} defaultValue={subtitle}/>
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder}
                            value={value}
                            onChange={handleChange}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Текст заголовок біля фото" onChange={(e)=>{setTitlePhoto(e.target.value)}} defaultValue={titlePhoto}/>
                        <br/>
                        <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Текст підзаголовок біля фото" onChange={(e)=>{setSubtitlePhoto(e.target.value)}} defaultValue={subtitlePhoto}/>
                        <br/>

                        <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder={'Заголовок пункту ' + 1 } onChange={(e)=>{
                            if(pointTitle[0] !== null){
                                pointTitle[0] =  e.target.value
                            }else{
                                pointTitle = [ e.target.value]
                            }
                        }} defaultValue={pointTitle[0]}/>
                        <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder={'Підзаголовок пункту ' + 1 } onChange={(e)=>{
                            if(pointsText[0] !== null){
                                pointsText[0] =  e.target.value
                            }else{
                                pointsText = [ e.target.value]
                            }
                        }} defaultValue={pointsText[0]}/>
                        <br/>
                        {point.map((input, index)=>{
                            return (
                                <>
                                    <Input
                                        style={{width:"100%",margin:"10px 0px 10px"}}
                                        key={index+1}
                                        defaultValue={pointTitle[index+1]}
                                        placeholder={'Заголовок пункту '+countPoint+' *'}
                                        onChange={(e) => {
                                            if(index+1 <= pointTitle.length){
                                                pointTitle[index+1] =  e.target.value
                                            }else{
                                                pointTitle = pointTitle.concat(e.target.value)
                                            }
                                        }}
                                    />
                                    <Input
                                        style={{width:"100%",margin:"10px 0px 10px"}}
                                        key={index+1}
                                        defaultValue={pointsText[index+1]}
                                        placeholder={'Підзаголовок пункту '+countPoint+' *'}
                                        onChange={(e) => {
                                            if(index+1 <= pointsText.length){
                                                pointsText[index+1] =  e.target.value
                                            }else{
                                                pointsText = pointsText.concat(e.target.value)
                                            }
                                        }}
                                    />
                                    <br/>
                                </>

                            )
                        })}
                        <AddCircleIcon htmlColor={"#13ad0a"} sx={{fontSize:50,cursor:"pointer"}} onClick={addInputPoint}/>
                        <RemoveIcon htmlColor={"#ad0a0a"} sx={{fontSize:50,cursor:"pointer"}} onClick={removeLastInput}/>


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
                                <TableCell>url</TableCell>
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