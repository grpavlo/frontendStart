import {MuiFileInput} from "mui-file-input";
import React, {useState, useEffect, useRef} from "react";
import server from "../server";
import {Input, Button, Checkbox, TextareaAutosize, FormGroup, FormControlLabel} from "@mui/material";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Title from "./Ttitle";
import {useStyles} from "../useStyles";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

let idFrom = 0
let submitAndUpdate = "submit"
let pointsText = []
let countPoint = 1
let countLecturers = 1
let lecturers = []

export default function WebinarOneAdmin(){
    const [value,setValue] = useState(null)
    const [valueLecturer,setValueLecturer] = useState(null)
    const [placeholder,setPlaceholder] = useState("Додайте фото *")
    const [placeholderLecturer,setPlaceholderLecturer] = useState("Додайте фото ")
    const [url,setUrl] = useState("")
    const [title,setTitle] = useState("")
    const [lecturer,setLecturer] = useState("")
    const [nameEvent,setNameEvent] = useState("")
    const [point1,setPoint1] = useState("")
    const [point2,setPoint2] = useState("")
    const [point3,setPoint3] = useState("")
    const [point4,setPoint4] = useState("")

    const [data,setData] = useState("")
    const [time,setTime] = useState("")
    const [price,setPrice] = useState("")
    const [location,setLocation] = useState("")

    const [pointsTitle,setPointsTitle] = useState("")

    const [text, setText] = useState('');
    const textareaRef = useRef(null);


    const [button,setButton] = useState(<></>);

    const [point,setPoint] = useState([]);
    const [lecturerNew,setLecturerNew] = useState([]);

    const [pib,setPib] =  useState(false);
    const [tel,setTel] =  useState(false);
    const [city,setCity] =  useState(false);
    const [email,setEmail] =  useState(false);
    const [name,setName] =  useState(false);
    const [edrpo,setEdrpo] =  useState(false);
    const [hb,setHb] =  useState(false);
    const [promoCod, setPromoCod] = useState(false);
    const [position,setPosition] = useState(false);
    const [question,setQuestion] = useState(false);

    const classes = useStyles();

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    function handleChangeLecturer (newValue, index){

        console.log(lecturers)
        console.log(index)
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

    function submit(){
        if(submitAndUpdate === "submit"){
            if( value !== null &&  nameEvent !== "" && data !== "" && time !== "" && price !== "" && location !== ""){
                // && url !== "" && title !== ""
                let pointsTextDB = {
                    pointsTitle,
                    pointsText
                }
                let namePhoto = ""
                namePhoto = value.name
                const formData = new FormData();
                formData.append('file', value);

                fetch(server+'api/uploadNewWebinar?name=1&id=0', {
                    method: 'POST',
                    body: formData,

                })
                    .then(response => response.text())
                if(valueLecturer !== null){
                    for(let i = 0;i<valueLecturer.length;i++){
                        const formData = new FormData();
                        formData.append('file', valueLecturer[i]["lecturersPhoto"]);

                        fetch(server+`api/uploadNewWebinar?name=${i+2}&id=0`, {
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



                fetch(server+'api/newNewWebinar', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        namePhoto,nameEvent,point1,point2,point3,point4,lecturer,data,time,price,location,pointsTextDB,lecturers,text, pib,tel,city,email,name,edrpo,hb,promoCod,position,question
                    })
                })
                    .then(response => response.text())
                    .then(data => {
                        setValue(null)
                        clear()
                    })
            }
        }
    }
    function clear(){
        idFrom--
        submitAndUpdate="submit"
        setValue(null)
        setUrl("")
        setTitle("")
        setLecturer("")
        setNameEvent("")
        setPlaceholder("Додайте фото")
        setPoint1("")
        setPoint2("")
        setPoint3("")
        setPoint4("")
        setData("")
        setTitle("")
        setTime([])
        setPrice("")
        setLocation("")
        setPointsTitle("")
        pointsText = []
        setValueLecturer(null)
        setLecturerNew([])
        setText("")
        submitAndUpdate = "submit"
        countPoint = 1
        countLecturers = 1
        lecturers = []
        document.getElementById("form1").reset()
        document.getElementById("form2").reset()
        document.getElementById("form3").reset()
        document.getElementById("form4").reset()
        document.getElementById("form5").reset()
        setButton(<></>)
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
                        <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Дата *" type="date" onChange={(e)=>{
                            let dataArr = String(e.target.value).split("-")
                            setData(dataArr[2]+"."+dataArr[1]+"."+dataArr[0])}} defaultValue={data}/>
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
                        }} defaultValue={time}/>
                        <br/>
                        {point.map((input, index)=>(
                            <>
                                <Input
                                    style={{width:"100%",margin:"10px 0px 10px"}}
                                    key={index}
                                    defaultValue={pointsText[index+1]}
                                    placeholder={'Пункт '+countPoint+' *'}
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

                        ))}
                        <AddCircleIcon htmlColor={"#13ad0a"} sx={{fontSize:50,cursor:"pointer"}} onClick={addInputPoint}/>
                        <RemoveIcon htmlColor={"#ad0a0a"} sx={{fontSize:50,cursor:"pointer"}} onClick={removeLastInput}/>
                    </form>
                    <br/>
                    <Title>Лектори</Title>
                    <form id="form4" style={{width:"100%"}} key={idFrom+4}>
                        <MuiFileInput
                            placeholder={placeholderLecturer}
                            value={valueLecturer == null ? null:valueLecturer[0]["lecturersPhoto"] }
                            onChange={(e)=>{handleChangeLecturer(e,0)}}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="ПІБ " onChange={(e)=>{
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
                        <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Текст" onChange={(e)=>{
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
                            return (
                                <div key={"Lecturer"+index}>
                                    <MuiFileInput
                                        placeholder={placeholderLecturer+index}
                                        value={valueLecturer.length-1 >= index+1 ? valueLecturer[index+1]["lecturersPhoto"] :null}
                                        onChange={(e)=>{handleChangeLecturer(e,index+1)}}
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
                                            lecturers[index+1] = {
                                                "lecturersPhoto":lecturers[index+1]["lecturersPhoto"] ,
                                                "lecturersName":e.target.value ,
                                                "lecturersText":lecturers[index+1]["lecturersText"],
                                            }
                                        }

                                        setValueLecturer(lecturers);

                                        console.log(lecturers)

                                    }} defaultValue={valueLecturer[index+1] != null? valueLecturer[index+1]["lecturersName"] : ""}/>
                                    <br/>
                                    <Input id="input" style={{width:"100%",margin:"10px 0px 10px"}}  placeholder="Текст" onChange={(e)=>{

                                        if(valueLecturer.length !== countLecturers){
                                            lecturers = lecturers.concat({
                                                "lecturersPhoto":null,
                                                "lecturersName":"",
                                                "lecturersText":e.target.value,
                                            })

                                        }else {
                                            lecturers[index+1] = {
                                                "lecturersPhoto":lecturers[index+1]["lecturersPhoto"] ,
                                                "lecturersName": lecturers[index+1]["lecturersName"],
                                                "lecturersText":e.target.value,
                                            }
                                        }

                                        setValueLecturer(lecturers);

                                        console.log(lecturers)

                                    }} defaultValue={valueLecturer[index+1] != null? valueLecturer[index+1]["lecturersText"] : ""}/>
                                    <br/>
                                </div>

                            )
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
                        <FormControlLabel   control={<Checkbox onChange={(e)=>{setEdrpo(e.target.checked)}} />}  />
                    </FormGroup>
                    <FormGroup row sx={{alignItems:"center"}}>
                        <span>Назва підприємства</span>
                        <FormControlLabel   control={<Checkbox onChange={(e)=>{setName(e.target.checked)}} />}  />
                    </FormGroup>
                    <FormGroup row sx={{alignItems:"center"}}>
                        <span>ПІБ</span>
                        <FormControlLabel   control={<Checkbox onChange={(e)=>{setPib(e.target.checked)}} />}  />
                    </FormGroup>
                    <FormGroup row sx={{alignItems:"center"}}>
                        <span>Посада</span>
                        <FormControlLabel   control={<Checkbox onChange={(e)=>{setPosition(e.target.checked)}} />}  />
                    </FormGroup>
                    <FormGroup row sx={{alignItems:"center"}}>
                        <span>День народження</span>
                        <FormControlLabel   control={<Checkbox onChange={(e)=>{setHb(e.target.checked)}} />}  />
                    </FormGroup>
                    <FormGroup row sx={{alignItems:"center"}}>
                        <span>Номер телефону</span>
                        <FormControlLabel   control={<Checkbox onChange={(e)=>{setTel(e.target.checked)}} />}  />
                    </FormGroup>
                    <FormGroup row sx={{alignItems:"center"}}>
                        <span>Електронна адреса учасника</span>
                        <FormControlLabel   control={<Checkbox onChange={(e)=>{setEmail(e.target.checked)}} />}  />
                    </FormGroup>
                    <FormGroup row sx={{alignItems:"center"}}>
                        <span>Адреса пошти, куди надсилати документи</span>
                        <FormControlLabel   control={<Checkbox onChange={(e)=>{setCity(e.target.checked)}} />}  />
                    </FormGroup>
                    <FormGroup row sx={{alignItems:"center"}}>
                        <span>Промокод (за наявності) </span>
                        <FormControlLabel   control={<Checkbox onChange={(e)=>{setPromoCod(e.target.checked)}} />}  />
                    </FormGroup>
                    <FormGroup row sx={{alignItems:"center"}}>
                        <span>Запитання до спікера</span>
                        <FormControlLabel   control={<Checkbox onChange={(e)=>{setQuestion(e.target.checked)}} />}  />
                    </FormGroup>

                    <div className={classes.seeMore}>
                        <Button onClick={()=>{submit()}}>Відправити</Button>
                        {button}
                    </div>
                    <br/>
                </Paper>
            </Grid>
        </>
    )
}