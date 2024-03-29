import Paper from "@material-ui/core/Paper";
import Title from "./Ttitle";
import {
    Button,
    Checkbox,
    FormControlLabel, FormGroup, FormLabel,
    Input, Radio, RadioGroup
} from "@mui/material";
import Grid from "@material-ui/core/Grid";
import React, {useEffect, useState, useRef} from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {useStyles} from "../useStyles";
import server from "../server";
import DeleteIcon from '@mui/icons-material/Delete';
import DialogDelete from "./dialog/dialogDelete"
import TitleIcon from '@mui/icons-material/Title';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import EditIcon from "@mui/icons-material/Edit";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import {MuiFileInput} from "mui-file-input";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

let id = 0
let idService
let pointTitle = []
let pointsText = []
let countPoint = 1
let idFrom = 0
let submitAndUpdate = "submit"
let editB = false
let namePhoto = ""

export default function NewServiceTwo(){
    const classes = useStyles();

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
        fetch(server+"api/doneServiceNewTwo",{
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
        fetch(server+"api/deleteServiceNewTwo",{
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body:JSON.stringify({
                id: id,
                name: namePhoto
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

        fetch(server+"api/getServiceNewTwo",{
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
                            namePhoto = row.photoname
                            handleClickOpenNew()}}/>
                            <EditIcon onClick={()=>{
                                edit(row)}}/></TableCell>
                    </TableRow>
                )))
            })
    }

    useEffect(()=>{
        get()
    },[])


    function edit(row){

        idFrom++
        submitAndUpdate= "update"
        setIdForm(idFrom)

        setTitle(row.title)
        setSubTitle(row.subtitle)
        setMainText(row.maintext)
        setTitle1(row.title1)
        setMainTextG(row.maintextg)
        setPointsTitle(row.pointstitle)
        setText(row.text)
        setText1(row.text1)
        setText2(row.text2)
        setText3(row.text3)
        setPlaceholder(row.photoname)

        idService = row.id
        console.log(idService)
        setValue(row.tobeornottobe)
        document.getElementById("input").focus()
        editB = true
        setButton(<><Button onClick={()=>{clear()}}>Очистити</Button></>)



        setTimeout(()=>{
            editorRef.current.innerHTML  = row.maintext;
            editorRef2.current.innerHTML = row.maintextg;
        },500)

    }

    function save() {
        let pointAll =[{
            title:pointsTitle,
            pointTitle:pointTitle,
            pointsText:pointsText
        }]
        if(submitAndUpdate ==="submit"){
            console.log(title,subTitle,mainText,title1,mainTextG,pointsTitle,text,text1,text2,text3,valuePhoto,value)
            const formData = new FormData();
            formData.append('file', valuePhoto);
            fetch(server+'api/uploadServicePhoto', {
                method: 'POST',
                body: formData
            })
                .then(response => response.text())

            fetch(server+"api/newServiceNewTwo",{
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body:JSON.stringify({
                    title,subTitle,mainText,title1,mainTextG,pointsTitle,text,text1,text2,text3,value
                })
            }).then(response => {
                return response.text();
            }).then(()=>{
                get()
                clear()
            })


        }else if(submitAndUpdate === "update"){

            console.log(valuePhoto)
            if(valuePhoto !== null){
                const formData = new FormData();
                formData.append('file', valuePhoto);
                fetch(server+'api/uploadServicePhoto', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.text())

                fetch(server+"api/updateServiceNewTwo",{
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                    body:JSON.stringify({
                        title,subTitle,mainText,title1,mainTextG,pointsTitle,text,text1,text2,text3,value,id:idService
                    })
                }).then(response => {
                    return response.text();
                }).then(()=>{
                    get()
                    clear()
                })
            }else {
                fetch(server+"api/updateServiceNewTwoNoPhoto",{
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                    body:JSON.stringify({
                        title,subTitle,mainText,title1,mainTextG,pointsTitle,text,text1,text2,text3,value,id:idService
                    })
                }).then(response => {
                    return response.text();
                }).then(()=>{
                    get()
                    clear()
                })
            }

        }
        editB = false
    }

    function clear(){
        submitAndUpdate = "submit"
        id = 0
        pointTitle = []
        pointsText = []
        countPoint = 1
        idFrom = 0
        editB = false
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
        setValuePhoto(null)
        setPointsTitle("")
        document.getElementById("formAll").reset()
        editorRef.current.innerHTML = '';
        editorRef2.current.innerHTML = '';
        setMainTextG("")
        setMainText("")
    }

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    const editorRef = useRef(null);
    const editorRef2 = useRef(null);

    const [mainText,setMainText] = useState("")
    const [mainTextG,setMainTextG] = useState("")

    const makeBold = () => {
        document.execCommand('bold', false, null);
    };

    const makeList = () => {
        document.execCommand('insertUnorderedList', false, null);
    };
    const numberList = () => {
        document.execCommand('insertOrderedList', false, null);
    };
    const handleInput = () => {
        const content = editorRef.current.innerHTML;
        setMainText(content)
        console.log(content);
    };
    const handleInput2 = () => {
        const content = editorRef2.current.innerHTML;
        setMainTextG(content)
        console.log(content);
    };

    const [valuePhoto,setValuePhoto] = useState(null)
    const [placeholder,setPlaceholder] = useState("Додайте фото *")
    const handleChange = (newValue) => {
        setValuePhoto(newValue);
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
                        <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок"  onChange={(e)=>{setTitle(e.target.value)}} defaultValue={title}/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Підзаголовок"  onChange={(e)=>{setSubTitle(e.target.value)}} defaultValue={subTitle}/>
                        <div>
                            <TitleIcon onClick={makeBold}/>
                            <FormatListNumberedIcon onClick={numberList}/>
                            <FormatListBulletedIcon  onClick={makeList}/>
                        </div>
                        <div
                            id="editorRef"
                            ref={editorRef}
                            contentEditable={true}
                            onInput={handleInput}
                            style={{ border: '1px solid black', minHeight: '100px' , padding:"15px"}}>
			</div>
                        <div style={{justifyContent:"flex-start"}} className="servicesMainBlockText">
                            <div dangerouslySetInnerHTML={{__html: mainText}}/>
                        </div>
                        <br/>
                        <Input  style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок для виділеного блоку"  onChange={(e)=>{setTitle1(e.target.value)}} defaultValue={title1} />
                        <br/>
                        <div
                            ref={editorRef2}
                            contentEditable={true}
                            onInput={handleInput2}
                            style={{ border: '1px solid black', minHeight: '100px' , padding:"15px"}}>
                        </div>
                        <div className="servicesGBlockText">
                            <TaskAltIcon/>
                            <div className="servicesGBlockTextDiv" style={{justifyContent:"flex-start"}}  dangerouslySetInnerHTML={{__html: mainTextG}}/>
                        </div>
                        <br/>
                        <Input  style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок для блоку"  onChange={(e)=>{setPointsTitle(e.target.value)}} defaultValue={pointsTitle} />
                        <br/>
                        <Input  style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст 1"  onChange={(e)=>{setText(e.target.value)}} defaultValue={text} />
                        <br/>
                        <Input  style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст 2"  onChange={(e)=>{setText1(e.target.value)}} defaultValue={text1} />
                        <br/>
                        <Input  style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст 3"  onChange={(e)=>{setText2(e.target.value)}} defaultValue={text2} />
                        <br/>
                        <Input  style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст 4"  onChange={(e)=>{setText3(e.target.value)}} defaultValue={text3} />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder}
                            value={valuePhoto}
                            onChange={handleChange}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <FormGroup>
                            <FormLabel id="demo-radio-buttons-group-label">Чи буде кнопка "Отримати консультацію"?</FormLabel>
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
