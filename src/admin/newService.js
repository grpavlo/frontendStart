import Paper from "@material-ui/core/Paper";
import Title from "./Ttitle";
import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, FormControlLabel, FormGroup, FormLabel,
    Input, Radio, RadioGroup
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
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveIcon from "@mui/icons-material/Remove";
import EditIcon from "@mui/icons-material/Edit";
function preventDefault(event) {
    event.preventDefault();
}

let id = 0
let idService
let pointTitle = []
let pointsText = []
let countPoint = 1
let idFrom = 0
let submitAndUpdate = "submit"
export default function NewService(){
    const classes = useStyles();
    const [one,setOne]=useState("")

    const [rows,setRows] = useState(null)
    const [rows2,setRows2] = useState(null)

    const [open, setOpen] = useState(false);
    const [openNew, setOpenNew] = useState(false);

    const [text,setText] =  useState("");
    const [text1,setText1] =  useState("");
    const [text2,setText2] =  useState("");
    const [text3,setText3] =  useState("");
    const [text4,setText4] =  useState("");
    const [text5,setText5] =  useState("");
    const [text6,setText6] = useState("");
    const [title,setTitle] =  useState("");
    const [subTitle,setSubTitle] =  useState("");
    const [title1,setTitle1] =  useState("");
    const [idForm,setIdForm] = useState(0)
    const [value, setValue] = React.useState('true');

    const [button,setButton] = useState(<></>);


    const [pointsTitle,setPointsTitle] = useState("")

    const [point,setPoint] = useState([]);
    const [pointText,setPointText] = useState([]);


    function done(event,id) {
        fetch(server+"api/doneApplication",{
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

    function doneServiceNew(event,id) {
        fetch(server+"api/doneServiceNew",{
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

    const handleClickOpenNew = () => {
        setOpenNew(true);
    };

    const handleCloseNew = () => {
        setOpenNew(false);
    };

    function deleteF(){
        fetch(server+"api/deleteApplication",{
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

    function deleteFNew(){
        fetch(server+"api/deleteServiceNew",{
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body:JSON.stringify({
                id: id,
            })
        }).then(response => {
            return response.text();
        }).then(()=>{get()
        clear()
            setOpenNew(false);
        })
    }

    function get(){
        fetch(server+"api/getApplication",{
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
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.position}</TableCell>
                        <TableCell>{row.question}</TableCell>
                        <TableCell>{row.promocod}</TableCell>
                        <TableCell>{row.data}</TableCell>
                        <TableCell><Checkbox  defaultChecked={row.done} color="success" onChange={(e)=>{done(e,row.id)}} /></TableCell>
                        <TableCell><DeleteIcon onClick={()=>{
                            id=row.id
                            handleClickOpen()}}/></TableCell>
                    </TableRow>
                )))
            })

        fetch(server+"api/getServiceNew",{
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            return response.json();
        })
            .then(data => {
                setRows2(data.map((row,index) => (
                    <TableRow key={row.id}>
                        <TableCell>{index+1}</TableCell>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.subtitle}</TableCell>
                        <TableCell>{row.url}</TableCell>
                        <TableCell><Checkbox  defaultChecked={row.activated} color="success" onChange={(e)=>{doneServiceNew(e,row.id)}} /></TableCell>
                        <TableCell><DeleteIcon onClick={()=>{
                            id=row.id
                            handleClickOpenNew()}}/>
                            <EditIcon onClick={()=>{
                                edit(row)}}/></TableCell>
                    </TableRow>
                )))
            })
    }

    useEffect(()=>{
        get()
    },[one])


    function edit(row){
        idFrom++
        submitAndUpdate= "update"
        setIdForm(idFrom)
        pointTitle = JSON.parse(row.pointall)[0].pointTitle
        pointsText = JSON.parse(row.pointall)[0].pointsText
        countPoint = JSON.parse(row.pointall)[0].pointTitle.length
        idService = row.id
        setText(row.text)
        setText1(row.text1)
        setText2(row.text2)
        setText3(row.text3)
        setText4(row.text4)
        setText5(row.text5)
        setText6(row.text6)
        setTitle(row.title)
        setSubTitle(row.subtitle)
        setTitle1(row.title1)
        setPointsTitle(JSON.parse(row.pointall)[0].title)
        if(pointTitle.length !== 1){
            setPoint(pointTitle)
        }
        setPointText(pointsText)
        setValue(row.tobeornottobe)
        document.getElementById("input").focus()
        setButton(<><Button onClick={()=>{clear()}}>Очистити</Button></>)
    }

    function save() {
        let pointAll =[{
            title:pointsTitle,
            pointTitle:pointTitle,
            pointsText:pointsText
        }]
       if(submitAndUpdate ==="submit"){

           fetch(server+"api/newServiceNew",{
               headers: {
                   'Content-Type': 'application/json',
               },
               method: 'POST',
               body:JSON.stringify({
                   title,subTitle,pointAll,title1,text1,text2,text3,text4,text5,text6,text,value
               })
           }).then(response => {
               return response.text();
           }).then(()=>{
               get()
               clear()
           })
       }else if(submitAndUpdate === "update"){
           fetch(server+"api/updateServiceNew",{
               headers: {
                   'Content-Type': 'application/json',
               },
               method: 'POST',
               body:JSON.stringify({
                   title,subTitle,pointAll,title1,text1,text2,text3,text4,text5,text6,text,value,id:idService
               })
           }).then(response => {
               return response.text();
           }).then(()=>{
               get()
               clear()
           })
       }
    }

    function clear(){
        submitAndUpdate = "submit"
        id = 0
        pointTitle = []
        pointsText = []
        countPoint = 1
        idFrom = 0

        setValue('true')
        setText("")
        setText1("")
        setText2("")
        setText3("")
        setText4("")
        setText5("")
        setText6("")
        setTitle("")
        setSubTitle("")
        setTitle1("")
        setIdForm(0)
        setPointsTitle("")
        setPoint([])
        setPointText([])

        document.getElementById("formAll").reset()
        document.getElementById("form3").reset()

    }

    function addInputPoint(){
        if(pointTitle.length === countPoint && pointTitle[pointTitle.length-1] !== ""){
            countPoint++
            setPoint([...point,(
                <></>
            )])
        }

        if(pointsText.length === countPoint && pointsText[pointsText.length-1] !== ""){
            countPoint++
            setPointText([...pointsText,(
                <></>
            )])
        }

        console.log(pointTitle,pointsText)
    }


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
            setPointsTitle(updatedInputsText);

            countPoint--

        }
        console.log(pointTitle,pointsText)

    }


    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };


    return(
        <>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Title>Кліенти які замовили консультацію</Title>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>№</TableCell>
                                <TableCell>ПІБ</TableCell>
                                <TableCell>Телефон</TableCell>
                                <TableCell>email</TableCell>
                                <TableCell>Підприємство</TableCell>
                                <TableCell>Посада</TableCell>
                                <TableCell>Питання</TableCell>
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
                    <Title>Послуги</Title>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>№</TableCell>
                                <TableCell>Заголовок</TableCell>
                                <TableCell>Підзаголовок</TableCell>
                                <TableCell>URL</TableCell>
                                <TableCell>Активно</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows2}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <form id="formAll" key={idForm}>
                        <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок *"  onChange={(e)=>{setTitle(e.target.value)}} defaultValue={title} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Під заголовок *"   onChange={(e)=>{setSubTitle(e.target.value)}} defaultValue={subTitle}/>
                        <form id="form3" style={{width:"100%"}} key={idFrom+3}>
                            <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Заголовок списку "  onChange={(e)=>{setPointsTitle(e.target.value)}} defaultValue={pointsTitle}/>
                            <br/>
                            <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder={'Пункт ' + 1 } onChange={(e)=>{
                                if(pointTitle[0] !== null){
                                    pointTitle[0] =  e.target.value
                                }else{
                                    pointTitle = [ e.target.value]
                                }
                            }} defaultValue={pointTitle[0]}/>
                            <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder={'Текст до пункту ' + 1 } onChange={(e)=>{
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
                                            placeholder={'Пункт '+countPoint+' *'}
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
                                            placeholder={'Текст до пункту '+countPoint+' *'}
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
                        </form>
                        <br/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок для списку*"   onChange={(e)=>{setTitle1(e.target.value)}} defaultValue={title1}/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 1*"   onChange={(e)=>{setText1(e.target.value)}} defaultValue={text1}/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 2*"   onChange={(e)=>{setText2(e.target.value)}} defaultValue={text2}/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 3*"   onChange={(e)=>{setText3(e.target.value)}} defaultValue={text3}/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 4*"   onChange={(e)=>{setText4(e.target.value)}} defaultValue={text4}/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 5*"   onChange={(e)=>{setText5(e.target.value)}} defaultValue={text5}/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 6*"   onChange={(e)=>{setText6(e.target.value)}} defaultValue={text6}/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст"   onChange={(e)=>{setText(e.target.value)}} defaultValue={text}/>
                        <br/>
                        <FormGroup>
                            <FormLabel id="demo-radio-buttons-group-label">Чибуде кнопка "Отримати консультацію"?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                onChange={handleRadioChange}
                                defaultValue={value}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="Так" />
                                <FormControlLabel value="false" control={<Radio />} label="Ні" />
                            </RadioGroup>
                        </FormGroup>
                        <Button onClick={save}>Зберегти</Button>
                        {button}
                    </form>
                </Paper>
            </Grid>
            <DialogDelete open={open} onClose={handleClose} deleteF={deleteF}/>
            <DialogDelete open={openNew} onClose={handleCloseNew} deleteF={deleteFNew}/>
        </>

    )
}