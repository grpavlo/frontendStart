import {MuiFileInput} from "mui-file-input";
import React, {useState,useEffect,useRef} from "react";
import server from "../server";
import {Input, Button, Checkbox, FormGroup, FormControlLabel} from "@mui/material";
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
import AddIcon from "@mui/icons-material/Add";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

let id = 0
let name = ""
let namePhoto= ""
let idFrom = 0
let submitAndUpdate = "submit"
let oldPhoto = ""

let pointsText = []
let countPoint = 1
let countLecturers = 1
let lecturers = []

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
        fetch(server+"api/doneNewWebinar",{
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

    function oldOrNow(event,id,idUrl){
        fetch(server+"api/oldOrNowNewWebinar",{
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body:JSON.stringify({
                id: id,
                done: event.target.checked,
                idUrl:idUrl
            })
        }).then(response => {
            return response.text();
        }).then(()=>get())
    }

    function get(){
        fetch(server+"api/getNowWebinar",{
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
                        <TableCell><CardImg src={process.env.PUBLIC_URL+"/OneWebinar/"+row.urltooldby.split("=")[1]+"/"+row.namephoto}></CardImg></TableCell>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.urltooldby}</TableCell>
                        <TableCell><Checkbox defaultChecked={row.activated} color="success" onChange={(e)=>{done(e,row.id)}}  /></TableCell>
                        <TableCell><Checkbox defaultChecked={row.oldornow} color="success" onChange={(e)=>{oldOrNow(e,row.id,row.urltooldby.split("=")[1])}}  /></TableCell>
                        <TableCell>
                            <DeleteIcon onClick={()=>{
                                id=row.id
                                name = row.urltooldby.split("=")[1]
                                handleClickOpen()}}/>
                            <EditIcon onClick={()=>{
                                id=row.id
                                edit(row)}}/>
                        </TableCell>
                    </TableRow>
                )))
            })
    }

    function deleteF(){
        fetch(server+"api/deleteNewWebinar",{
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body:JSON.stringify({
                id: id,
                idFS:name
            })
        }).then(response => {
            return response.text();
        }).then(get)

        setOpen(false);
    }

    function editDB(){

        let pointsTextDB = {
            pointsTitle,
            pointsText
        }

        let namePhoto = placeholder
        if(value !== null){
            namePhoto = value.name
            const formData = new FormData();
            formData.append('file', value);

            fetch(server+`api/uploadNewWebinar?name=1&id=${id}`, {
                method: 'POST',
                body: formData,

            })
                .then(response => response.text())
        }


        if(valueLecturer !== null){
            for(let i = 0;i<valueLecturer.length;i++){
                const formData = new FormData();
                if(typeof valueLecturer[i]["lecturersPhoto"] === "object"){
                    formData.append('file', valueLecturer[i]["lecturersPhoto"]);

                    fetch(server+`api/uploadNewWebinar?name=${i+2}&id=${id}`, {
                        method: 'POST',
                        body: formData,
                    })
                        .then(response => response.text())

                    lecturers[i]={
                        "lecturersPhoto":lecturers[i]['lecturersPhoto'].name,
                        "lecturersName":lecturers[i]["lecturersName"],
                        "lecturersText":lecturers[i]["lecturersText"],
                    }
                }
            }

        }

        fetch(server+'api/updateNewWebinar ', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,namePhoto,nameEvent,point1,point2,point3,point4,lecturer,data,time,price,location,pointsTextDB,lecturers,text, pib,tel,city,email,nameC,edrpo,hb,promoCod,position,question
            })
        })
            .then(response => response.text())
            .then(data => {
                setValue(null)
                clear()
            })

    }

    useEffect(()=>{
        get()
    },[one])

    //-------------------------------------------------//

    const [valueLecturer,setValueLecturer] = useState(null)
    const [placeholderLecturer,setPlaceholderLecturer] = useState("Додайте фото ")
    const [lecturer,setLecturer] = useState("")
    const [nameEvent,setNameEvent] = useState("")
    const [point1,setPoint1] = useState("")
    const [point2,setPoint2] = useState("")
    const [point3,setPoint3] = useState("")
    const [point4,setPoint4] = useState("")

    const [data,setData] = useState("")
    const [dataW,setDataW] = useState("")
    const [time,setTime] = useState("")
    const [price,setPrice] = useState("")
    const [location,setLocation] = useState("")

    const [pointsTitle,setPointsTitle] = useState("")

    const [text, setText] = useState('');
    const textareaRef = useRef(null);

    const [point,setPoint] = useState([]);
    const [lecturerNew,setLecturerNew] = useState([]);

    const [pib,setPib] =  useState(false);
    const [tel,setTel] =  useState(false);
    const [city,setCity] =  useState(false);
    const [email,setEmail] =  useState(false);
    const [nameC,setName] =  useState(false);
    const [edrpo,setEdrpo] =  useState(false);
    const [hb,setHb] =  useState(false);
    const [promoCod, setPromoCod] = useState(false);
    const [position,setPosition] = useState(false);
    const [question,setQuestion] = useState(false);


    function edit(row){

        setPib(row.pib)
        setTel(row.tel)
        setCity(row.city)
        setEmail(row.email)
        setName(row.name)
        setPromoCod(row.promocod)
        setPosition(row.position)
        setQuestion(row.question)
        setEdrpo(row.edrpo)
        setHb(row.hb)

        idFrom++
        submitAndUpdate="update"
        setValue(null)
        setPlaceholder(row.namephoto)
        setNameEvent(row.title)
        setPoint1(row.points1)
        setPoint2(row.points2)
        setPoint3(row.points3)
        setPoint4(row.points4)
        setLecturer(row.lecturerandtext)
        setData(row.data)
        setDataW(row.data)
        setTime(row.time)
        setPrice(row.price)
        setLocation(row.location)
        let pointsTextDB = JSON.parse(row.pointstext)
        setPointsTitle(pointsTextDB.pointsTitle)
        pointsText = pointsTextDB.pointsText
        setPoint(pointsText)
        countPoint = pointsText.length
        lecturers = JSON.parse(row.lecturers)
        console.log(lecturers)
        if(lecturers.length !== 0){
            countLecturers = lecturers.length
            setValueLecturer(lecturers)
            setLecturerNew(lecturers)
        }

        setText(row.program)
        document.getElementById("input").focus()
        setButton(<><Button onClick={()=>{clear()}}>Очистити</Button></>)
    }

    function handleChangeLecturer (newValue, index){

        if(lecturers.length === 0){
            lecturers = [{
                "lecturersPhoto":newValue,
                "lecturersName":"",
                "lecturersText":"",
            }]
        }else if(lecturers.length === index){
            lecturers = lecturers.concat({
                "lecturersPhoto":newValue,
                "lecturersName":"",
                "lecturersText":"",
            })
        }else {
            lecturers[index] = {
                "lecturersPhoto":newValue,
                "lecturersName":lecturers[index]["lecturersName"],
                "lecturersText":lecturers[index]["lecturersText"],
            }
        }


        setValueLecturer(lecturers);

        setLecturerNew([...lecturerNew])

    }

    function clear(){
        idFrom--
        submitAndUpdate="submit"
        setValue(null)
        setUrl("")
        setLecturer("")
        setNameEvent("")
        setPlaceholder("Додайте фото")
        setPoint1("")
        setPoint2("")
        setPoint3("")
        setPoint4("")
        setData("")
        setTime("")
        setTitle("")
        setPrice("")
        setLocation("")
        setPointsTitle("")
        setPoint([])
        pointsText = []
        setValueLecturer(null)
        setLecturerNew([])
        setText("")
        lecturers=[]
        document.getElementById("form1").reset()
        document.getElementById("form2").reset()
        document.getElementById("form3").reset()
        document.getElementById("form4").reset()
        document.getElementById("form5").reset()
        setButton(<></>)
        setPib(false)
        setTel(false)
        setCity(false)
        setEmail(false)
        setName(false)
        setPromoCod(false)
        setPosition(false)
        setQuestion(false)
        setEdrpo(false)
        setHb(false)
    }

    function addInputPoint(){
        if(pointsText.length === countPoint && pointsText[pointsText.length-1] !== ""){
            countPoint++
            setPoint([...point,(
                <></>
            )])
        }
    }

    function addInputLecturer(){
        if(lecturers.length === countLecturers ){
            countLecturers++
            setLecturerNew([...lecturerNew,(
                <></>
            )])
        }
    }

    function removeLastInput() {
        if(countPoint !== 1){
            const updatedInputs = [...point];
            updatedInputs.pop();
            setPoint(updatedInputs);

            if(pointsText.length !== 1 && pointsText[countPoint-1] !== undefined){
                const updatedPointsText = pointsText
                updatedPointsText.pop()
                pointsText = updatedPointsText
            }
            countPoint--

        }
    }

    function removeLastLecturers() {
        if(countLecturers !== 1){
            const updatedLecturers = [...lecturerNew];
            updatedLecturers.pop();
            setLecturerNew(updatedLecturers);

            if(lecturers.length !== 1 && lecturers[countLecturers-1] !== undefined){
                const updatedLecturers = lecturers
                updatedLecturers.pop()
                lecturers = updatedLecturers
            }
            countLecturers--
        }
    }

    function addTitle(){
        setText(text+'\n'+'<div class="programWebinarContentOne">'+'\n'+"<span class='programWebinarContentOneTitle'>\n \n <!--Ваш заголовок--> \n \n </span>"+'<br/><br/>\n \n <!--ваш вміст--> \n \n'+'</div>\n <br/>'+'\n')
    }

    function addList (){
        const textarea = textareaRef.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const newText = text.substring(0, start) + ` 
<ul class="programPoint">
    <li>\t</li>
    <li>\t</li>
    <li>\t</li>
</ul> \n` + text.substring(end);

        setText(newText)
    }

    function addSubTitle(){
        const textarea = textareaRef.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const newText = text.substring(0, start) + ` 
<span class="programWebinarContentOneSubTitle">\t</span> \n` + text.substring(end);

        setText(newText)
    }


    return(
        <>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Title>Список вебінарів які тривають </Title>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>№</TableCell>
                                <TableCell>Фото</TableCell>
                                <TableCell>Тема</TableCell>
                                <TableCell>URL</TableCell>
                                <TableCell>Активовано</TableCell>
                                <TableCell>Триває</TableCell>
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
                    <Title>Редагувати</Title>
                    <form id="form" style={{width:"100%"}} key={idFrom}>
                        <Paper className={classes.paper}>
                            <Title>Блок заголовок</Title>
                            <form id="form1" style={{width:"100%"}} key={idFrom}>
                                <MuiFileInput
                                    placeholder={placeholder}
                                    value={value}
                                    onChange={handleChange}
                                    inputProps={{ accept: '.png, .jpeg, .jpg' }}
                                />
                                <br/>
                                <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Назва *" onChange={(e)=>{setNameEvent(e.target.value)}} defaultValue={nameEvent}/>
                                <br/>
                                <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Пункт списку 1" onChange={(e)=>{setPoint1(e.target.value)}} defaultValue={point1}/>
                                <br/>
                                <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Пункт списку 2" onChange={(e)=>{setPoint2(e.target.value)}} defaultValue={point2}/>
                                <br/>
                                <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Пункт списку 3" onChange={(e)=>{setPoint3(e.target.value)}} defaultValue={point3}/>
                                <br/>
                                <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Пункт списку 4" onChange={(e)=>{setPoint4(e.target.value)}} defaultValue={point4}/>
                                <br/>
                                <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Текст під картинкою" onChange={(e)=>{setLecturer(e.target.value)}} defaultValue={lecturer}/>
                                <br/>
                            </form>
                            <br/>
                            <Title>Блок дата / час / ціна / місце</Title>
                            <form id="form2" style={{width:"100%"}} key={idFrom+1}>
                                <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Дата *" onChange={(e)=>{

                                    setData(e.target.value)}} defaultValue={dataW}/>
                                <br/>
                                <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Час *" onChange={(e)=>{setTime(e.target.value)}} defaultValue={time}/>
                                <br/>
                                <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Ціна * " onChange={(e)=>{setPrice(e.target.value)}} defaultValue={price}/>
                                <br/>
                                <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Місце проведення *" onChange={(e)=>{setLocation(e.target.value)}} defaultValue={location}/>
                                <br/>
                            </form>
                            <br/>
                            <Title>Блок список</Title>
                            <form id="form3" style={{width:"100%"}} key={idFrom+3}>
                                <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Заголовок списку "  onChange={(e)=>{setPointsTitle(e.target.value)}} defaultValue={pointsTitle}/>
                                <br/>
                                <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder={'Пункт ' + 1 } onChange={(e)=>{
                                    if(pointsText[0] !== null){
                                        pointsText[0] =  e.target.value
                                    }else{
                                        pointsText = [ e.target.value]
                                    }
                                }} defaultValue={pointsText[0]}/>
                                <br/>
                                {point.map((input, index)=>{
                                    if(index !== 0){
                                        return (
                                            <>
                                                <Input
                                                    style={{width:"100%",margin:"10px 0px 10px"}}
                                                    key={index}
                                                    defaultValue={pointsText[index]}
                                                    placeholder={'Пункт '+countPoint+' *'}
                                                    onChange={(e) => {
                                                        if(index <= pointsText.length){
                                                            pointsText[index] =  e.target.value
                                                        }else{
                                                            pointsText = pointsText.concat(e.target.value)
                                                        }
                                                    }}
                                                />
                                                <br/>
                                            </>

                                        )
                                    }
                                })}
                                <AddCircleIcon htmlColor={"#13ad0a"} sx={{fontSize:50,cursor:"pointer"}} onClick={addInputPoint}/>
                                <RemoveIcon htmlColor={"#ad0a0a"} sx={{fontSize:50,cursor:"pointer"}} onClick={removeLastInput}/>
                            </form>
                            <br/>
                            <Title>Лектори</Title>
                            <form id="form4" style={{width:"100%"}} key={idFrom+4}>
                                <MuiFileInput
                                    placeholder={valueLecturer == null ? null:valueLecturer[0]["lecturersPhoto"]}
                                    value={valueLecturer == null ? null:valueLecturer[0]["lecturersPhoto"].value == null ? null: valueLecturer[0]["lecturersPhoto"]}
                                    onChange={(e)=>{handleChangeLecturer(e,0)}}
                                    inputProps={{ accept: '.png, .jpeg, .jpg' }}
                                />
                                <br/>
                                <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}} defaultValue={valueLecturer == null ?"":valueLecturer[0]["lecturersName"] }  placeholder="ПІБ " onChange={(e)=>{
                                    if(lecturers.length === 0){
                                        lecturers = [{
                                            "lecturersPhoto":null,
                                            "lecturersName":e.target.value ,
                                            "lecturersText":"",
                                        }]
                                    }else {
                                        lecturers[0] = {
                                            "lecturersPhoto":lecturers[0]["lecturersPhoto"] ,
                                            "lecturersName":e.target.value ,
                                            "lecturersText":lecturers[0]["lecturersText"],
                                        }
                                    }

                                    setValueLecturer(lecturers);

                                }}/>
                                <br/>
                                <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}} defaultValue={valueLecturer == null ?"":valueLecturer[0]["lecturersText"]}  placeholder="Текст" onChange={(e)=>{
                                    if(lecturers.length === 0){
                                        lecturers = [{
                                            "lecturersPhoto":null,
                                            "lecturersName":"",
                                            "lecturersText":e.target.value,
                                        }]
                                    }else {
                                        lecturers[0] = {
                                            "lecturersPhoto":lecturers[0]["lecturersPhoto"] ,
                                            "lecturersName": lecturers[0]["lecturersName"],
                                            "lecturersText":e.target.value,
                                        }
                                    }

                                    setValueLecturer(lecturers);
                                }}/>
                                <br/>
                                {lecturerNew.map((input, index)=>{
                                    if(index !== 0){
                                        let element = 1
                                        if(valueLecturer.length-1 >= index){
                                            element=valueLecturer[index]["lecturersPhoto"]
                                        }
                                        return (
                                            <div key={"Lecturer"+index}>
                                                <MuiFileInput
                                                    placeholder={typeof element === "string" ?  valueLecturer[index]["lecturersPhoto"]:""}
                                                    value={typeof element === "object" ? valueLecturer[index]["lecturersPhoto"] : null }
                                                    onChange={(e)=>{handleChangeLecturer(e,index)}}
                                                    inputProps={{ accept: '.png, .jpeg, .jpg' }}
                                                />
                                                <br/>
                                                <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="ПІБ " onChange={(e)=>{
                                                    if(valueLecturer.length !== countLecturers){
                                                        lecturers = lecturers.concat({
                                                            "lecturersPhoto":null,
                                                            "lecturersName":e.target.value ,
                                                            "lecturersText":"",
                                                        })
                                                    }else {
                                                        lecturers[index] = {
                                                            "lecturersPhoto":lecturers[index]["lecturersPhoto"] ,
                                                            "lecturersName":e.target.value ,
                                                            "lecturersText":lecturers[index]["lecturersText"],
                                                        }
                                                    }

                                                    setValueLecturer(lecturers);

                                                    console.log(lecturers)

                                                }} defaultValue={valueLecturer[index] != null? valueLecturer[index]["lecturersName"] : ""}/>
                                                <br/>
                                                <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Текст" onChange={(e)=>{

                                                    if(valueLecturer.length !== countLecturers){
                                                        lecturers = lecturers.concat({
                                                            "lecturersPhoto":null,
                                                            "lecturersName":"",
                                                            "lecturersText":e.target.value,
                                                        })

                                                    }else {
                                                        lecturers[index] = {
                                                            "lecturersPhoto":lecturers[index]["lecturersPhoto"] ,
                                                            "lecturersName": lecturers[index]["lecturersName"],
                                                            "lecturersText":e.target.value,
                                                        }
                                                    }

                                                    setValueLecturer(lecturers);

                                                    console.log(lecturers)

                                                }} defaultValue={valueLecturer[index] != null? valueLecturer[index]["lecturersText"] : ""}/>
                                                <br/>
                                            </div>

                                        )
                                    }
                                })}
                                <AddCircleIcon htmlColor={"#13ad0a"} sx={{fontSize:50,cursor:"pointer"}} onClick={addInputLecturer}/>
                                <RemoveIcon htmlColor={"#ad0a0a"} sx={{fontSize:50,cursor:"pointer"}} onClick={removeLastLecturers}/>

                            </form>
                            <Title>Блок головний текст</Title>
                            <form id="form5" style={{width:"100%"}} key={idFrom+5}>
                                <AddIcon onClick={addTitle} htmlColor={"#13ad0a"} sx={{fontSize:50,cursor:"pointer"}}/>
                                <FormatListNumberedIcon onClick={addList} htmlColor={"#13ad0a"} sx={{fontSize:50,cursor:"pointer"}}/>
                                <SubdirectoryArrowRightIcon onClick={addSubTitle} htmlColor={"#13ad0a"} sx={{fontSize:50,cursor:"pointer"}}/>
                                <textarea ref={textareaRef} value={text}
                                          onChange={(e)=> setText(e.target.value)}
                                          style={{width:"100%",margin:"10px 0px 10px",height:500}}
                                          placeholder=""

                                />
                            </form>
                            <br/>
                            <div className="programWebinarContentTest">
                                <div className="programName">
                                    <span >ПРОГРАМА ВЕБІНАРУ</span>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: text }} />
                            </div>


                            <FormGroup row sx={{alignItems:"center"}}>
                                <span>ЄДРПОУ</span>
                                <FormControlLabel   control={<Checkbox onChange={(e)=>{setEdrpo(e.target.checked)}} defaultChecked={edrpo} />}  />
                            </FormGroup>
                            <FormGroup row sx={{alignItems:"center"}}>
                                <span>Назва підприємства</span>
                                <FormControlLabel   control={<Checkbox onChange={(e)=>{setName(e.target.checked)}} defaultChecked={nameC}/>}  />
                            </FormGroup>
                            <FormGroup row sx={{alignItems:"center"}}>
                                <span>ПІБ</span>
                                <FormControlLabel   control={<Checkbox onChange={(e)=>{setPib(e.target.checked)}} defaultChecked={pib}/>}  />
                            </FormGroup>
                            <FormGroup row sx={{alignItems:"center"}}>
                                <span>Посада</span>
                                <FormControlLabel   control={<Checkbox onChange={(e)=>{setPosition(e.target.checked)}} defaultChecked={position}/>}  />
                            </FormGroup>
                            <FormGroup row sx={{alignItems:"center"}}>
                                <span>День народження</span>
                                <FormControlLabel   control={<Checkbox onChange={(e)=>{setHb(e.target.checked)}} defaultChecked={hb}/>}  />
                            </FormGroup>
                            <FormGroup row sx={{alignItems:"center"}}>
                                <span>Номер телефону</span>
                                <FormControlLabel   control={<Checkbox onChange={(e)=>{setTel(e.target.checked)}} defaultChecked={tel}/>}  />
                            </FormGroup>
                            <FormGroup row sx={{alignItems:"center"}}>
                                <span>Електронна адреса учасника</span>
                                <FormControlLabel   control={<Checkbox onChange={(e)=>{setEmail(e.target.checked)}} defaultChecked={email}/>}  />
                            </FormGroup>
                            <FormGroup row sx={{alignItems:"center"}}>
                                <span>Адреса пошти, куди надсилати документи</span>
                                <FormControlLabel   control={<Checkbox onChange={(e)=>{setCity(e.target.checked)}} defaultChecked={city}/>}  />
                            </FormGroup>
                            <FormGroup row sx={{alignItems:"center"}}>
                                <span>Промокод (за наявності) </span>
                                <FormControlLabel   control={<Checkbox onChange={(e)=>{setPromoCod(e.target.checked)}} defaultChecked={promoCod}/>}  />
                            </FormGroup>
                            <FormGroup row sx={{alignItems:"center"}}>
                                <span>Запитання до спікера</span>
                                <FormControlLabel   control={<Checkbox onChange={(e)=>{setQuestion(e.target.checked)}} defaultChecked={question}/>}  />
                            </FormGroup>


                            <div className={classes.seeMore}>
                                <Button onClick={()=>{submit()}}>Відправити</Button>
                                {button}
                            </div>
                            <br/>
                        </Paper>
                    </form>
                </Paper>
            </Grid>
            <DialogDelete open={open} onClose={handleClose} deleteF={deleteF}/>
        </>
    )
}