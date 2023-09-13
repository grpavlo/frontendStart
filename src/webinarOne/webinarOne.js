import Header from "../header/Header";
import Footer from "../footer/footer";
import CheckIcon from '@mui/icons-material/Check';
import React,{useState,useEffect}  from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaidIcon from '@mui/icons-material/Paid';
import PlaceIcon from '@mui/icons-material/Place';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import logo from "../img/logoWebinar.png"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {Alert, Box, Checkbox, FormControlLabel, FormGroup, Input, Modal, Snackbar} from "@mui/material";
import {cssModal} from "../cssModal/cssModal";
import {Close} from "@mui/icons-material/";
import server from "../server";

export default function WebinarOne(){
    const [open,setOpen] =  useState(false);
    const [pib,setPib] =  useState("");
    const [tel,setTel] =  useState("");
    const [city,setCity] =  useState("");
    const [email,setEmail] =  useState("");
    const [name,setName] =  useState("");
    const [edrpo,setEdrpo] =  useState("");
    const [hb,setHb] =  useState("");
    const [permission,setPermission] =  useState("");
    const [promoCod, setPromoCod] = useState("");
    const [position,setPosition] = useState("");
    const [question,setQuestion] = useState("");
    const [online,setOnline] = useState(false)
    const [offline,setOffline] = useState(false)

    const [pibForm,setPibForm] = useState(false)
    const [telForm,setTelForm] = useState(false)
    const [cityForm,setCityForm] = useState(false)
    const [emailForm,setEmailForm] = useState(false)
    const [nameForm,setNameForm] = useState(false)
    const [promocodForm,setPromocodForm] = useState(false)
    const [positionForm,setPositionForm] = useState(false)
    const [questionForm,setQuestionForm] = useState(false)
    const [edrpoForm,setEdrpoForm] = useState(false)
    const [hbForm,setHbForm] = useState(false)
    const [permissionForm,setPermissionForm] = useState(false)



    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [one,setOne]=useState("")


    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');

    const [namePhoto,setNamePhoto] = useState("")
    const [nameEvent,setNameEvent] = useState("")
    const [point1,setPoint1] = useState("")
    const [point2,setPoint2] = useState("")
    const [point3,setPoint3] = useState("")
    const [point4,setPoint4] = useState("")
    const [lecturer,setLecturer] = useState("")

    const [data,setData] = useState("")
    const [time,setTime] = useState("")
    const [price,setPrice] = useState("")
    const [location,setLocation] = useState("")

    const [pointsTitle,setPointsTitle] = useState([])

    const [lecturerNew,setLecturerNew] = useState([]);

    const [text, setText] = useState("");

    function get(){
        console.log(id)
        fetch(server+"api/postNowWebinar",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({id})
        }).then(response => {
            return response.json();
        })
            .then(data => {
                if(data.length !== 0){
                    console.log(data)
                    setNamePhoto(data.namephoto)
                    setNameEvent(data.title)
                    setPoint1(data.points1)
                    setPoint2(data.points2)
                    setPoint3(data.points3)
                    setPoint4(data.points4)
                    setLecturer(data.lecturerandtext)
                    setData(data.data)
                    setTime(data.time)
                    setPrice(data.price)
                    setLocation(data.location)
                    setPointsTitle([JSON.parse(data.pointstext)])
                    setLecturerNew(JSON.parse(data.lecturers))
                    setText(data.program)
                    setPibForm(data.pib)
                    setTelForm(data.tel)
                    setCityForm(data.city)
                    setEmailForm(data.email)
                    setNameForm(data.name)
                    setPromocodForm(data.promocod)
                    setPositionForm(data.position)
                    setQuestionForm(data.question)
                    setEdrpoForm(data.edrpo)
                    setHbForm(data.hb)
                    setPermissionForm(data.permission)
                }
            })
    }
    useEffect(()=>{
        get()
    },[one])

    const [openOk, setOpenOk] = React.useState(false);

    const handleClickOk = () => {
        setOpenOk(true);
    };

    const handleCloseOk = () => {
        setOpenOk(false);
    };

    function by(e){
        e.preventDefault()
        if(online !== false || offline !== false){
            fetch(server+"api/byWebinar",{
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    pib,tel,city,email,name,promoCod,position,question,online,offline,url,edrpo,hb,permission
                })
            }).then(response => {
                return response.text();
            })
                .then(data => {
                    if(data === "good"){
                        handleClickOk()
                        handleClose()
                        setPib("")
                        setTel("")
                        setCity("")
                        setEmail("")
                        setName("")
                        setPromoCod("")
                        setPosition("")
                        setQuestion("")
                        setOnline(false)
                        setOffline(false)
                        document.getElementById("form").reset();
                    }
                })
        }
    }

    return(
        <div className="main"  style={{backgroundColor:"#f3f5f9"}}>
            <Header/>
            <Snackbar   anchorOrigin={{  vertical: 'top', horizontal: 'right' }} open={openOk} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleCloseOk} severity="success" sx={{ width: '100%' }}>
                    Дякуємо за реєстрацію, ми зв'яжемось з вами!
                </Alert>
            </Snackbar>
            <div className="webinarHeader">
                <div className="contentWebinarRight">
                    <span className="topic">{nameEvent}</span>
                    <div className="line"></div>
                    <span className="pointsWebinar"><CheckIcon htmlColor="#ffffff" sx={{marginRight:2}}/>{point1}</span>
                    <span className="pointsWebinar"><CheckIcon htmlColor="#ffffff" sx={{marginRight:2}}/>{point2}</span>
                    <span className="pointsWebinar"><CheckIcon htmlColor="#ffffff" sx={{marginRight:2}}/>{point3}</span>
                    <span className="pointsWebinar"><CheckIcon htmlColor="#ffffff" sx={{marginRight:2}}/>{point4}</span>
                    <button className="contactsSubmit" onClick={handleOpen}>Зареєструватися</button>
                </div>
                <div className="contentWebinarLeft">
                    <div className="contentWebinarLeftImg">
                        <img src={process.env.PUBLIC_URL+"/OneWebinar/"+id+"/"+namePhoto}/>
                    </div>

                    <span className="lecturerNameWebinar">{lecturer}</span>
                </div>
            </div>
            <div className="infoWebinar">
                <div className="blockInfoWebinar">
                    <CalendarMonthIcon htmlColor="#102D5E"  sx={{ fontSize: 40 }}/>
                    <span>Дата</span>
                    <span>{data}</span>
                </div>
                <div className="blockInfoWebinar">
                    <AccessTimeIcon htmlColor="#102D5E"  sx={{ fontSize: 40 }}/>
                    <span>Час</span>
                    <span>{time}</span>
                </div>
                <div className="blockInfoWebinar" >
                    <PaidIcon htmlColor="#102D5E" sx={{ fontSize: 40 }}/>
                    <span>Ціна відеозапису</span>
                    <span>{price}</span>
                </div>
                <div className="blockInfoWebinar" >
                    <PlaceIcon htmlColor="#102D5E" sx={{ fontSize: 40 }}/>
                    <span>Місце проведання</span>
                    <span>{location}</span>
                </div>
            </div>
            {pointsTitle.map((data)=>(
                <div className="participationWebinar">
                    <span className="textParticipationWebinar">{data.pointsTitle}</span>
                    {data.pointsText.map((point)=>(
                        <div className="container">
                        <div className="lineVertical"/>
                        <span className="pointsParticipationWebinar">
                      {point}
                        </span>
                        </div>
                        ))}
                </div>
            ))}
            <div className="lecturersWebinar">
                <div className="lecturersWebinarTwo">
                    {
                        lecturerNew.map((data)=>(
                            <div className="lecturersWebinarOne">
                                <img src={process.env.PUBLIC_URL+"/OneWebinar/"+id+"/"+data.lecturersPhoto}/>
                                <span className="nameLecturer">{data.lecturersName}</span>
                                <span className="textLecturer">{data.lecturersText}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="lineBlue"/>
            </div>
            <div className="programWebinar">
                <div className="programWebinarContent">
                    <div dangerouslySetInnerHTML={{ __html: text}} />
                </div>
            </div>
            <div className="textByWebinar">
                <span>ПРИДБАТИ ВІДЕО ТА МАТЕРІАЛИ ВЕБІНАРУ МОЖНА ЗАРЕЄСТРУВАВШИСЬ ЗА ПОСИЛАННЯМ</span>
                <br/><br/>
                <img src={logo}/>
                <br/>
                <KeyboardDoubleArrowDownIcon  htmlColor={"#064881"} sx={{ fontSize: 60 }}/>
                <br/>
                <button className="bigButton" onClick={handleOpen}>Зареєструватися</button>
                <br/><br/>
                <div>
                    <FacebookIcon style={{cursor:"pointer"}} onClick={()=>{window.open("https://www.facebook.com/groups/495706544896471/","_target")}} sx={{ fontSize: 100 }} htmlColor={"#064881"}/>
                    <YouTubeIcon style={{cursor:"pointer"}} onClick={()=>{window.open("https://www.youtube.com/channel/UCWXJfNezhZpsg-jl5Sf9LXA","_target")}} sx={{ fontSize: 100 }} htmlColor={"#cc2323"}/>
                    <TelegramIcon style={{cursor:"pointer"}} onClick={()=>{window.open("https://t.me/academiaStart","_target")}} sx={{ fontSize: 100 }} htmlColor={"#6EC1E4"}/>
                </div>
                <br/>
            </div>
            <Footer/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={cssModal.global}>
                    <Close sx={cssModal.styleClose} onClick={handleClose}/>
                    <form id="form" style={cssModal.from} onSubmit={(e)=>{by(e)}}>
                        <Box sx={cssModal.content}>
                            <Box sx={cssModal.contentLeftRight} >
                                {
                                    pibForm?<Input sx={cssModal.input} placeholder="ПІБ*" required onChange={(e)=>{setPib(e.target.value)}}/>:<></>
                                }
                                {
                                    telForm?<Input sx={cssModal.input} type="number" min="0" placeholder="Телефон*" required onChange={(e)=>{setTel(e.target.value)}}/>:<></>
                                }
                                {
                                    emailForm?<Input sx={cssModal.input} type="email" placeholder="Email*" required onChange={(e)=>{setEmail(e.target.value)}}/>:<></>
                                }
                                {
                                    nameForm?<Input sx={cssModal.input} placeholder="Підприємство" onChange={(e)=>{setName(e.target.value)}}/>:<></>
                                }
                                {
                                    edrpoForm?<Input sx={cssModal.input} placeholder="ЄДРПОУ" onChange={(e)=>{setEdrpo(e.target.value)}}/>:<></>
                                }
                            </Box>
                            <Box sx={cssModal.contentLeftRight}>
                                {
                                    positionForm?<Input sx={cssModal.input} type="text" placeholder="Посата"  onChange={(e)=>{setPosition(e.target.value)}}/>:<></>
                                }
                                {
                                    cityForm?<Input sx={cssModal.input} placeholder="Поштова адреса для відправлення документів" onChange={(e)=>{setCity(e.target.value)}}/>:<></>
                                }
                                {
                                    questionForm?<Input sx={cssModal.input} type="text"  placeholder="Питання, що цікавлять" onChange={(e)=>{setQuestion(e.target.value)}}/>:<></>
                                }
                                {
                                    promocodForm?<Input sx={cssModal.input} placeholder="Промокод" onChange={(e)=>{setPromoCod(e.target.value)}}/>:<></>
                                }
                                {
                                    hbForm?<Input sx={cssModal.input} type="date" placeholder="Дата народження" onChange={(e)=>{ let dataArr = String(e.target.value).split("-")
                                        setHb(dataArr[2]+"."+dataArr[1]+"."+dataArr[0])}}/>:<></>
                                }

                            </Box>
                        </Box>
                        <span>Як бажаєте прийняти участь?</span>
                        <FormGroup row >
                            <FormControlLabel  control={<Checkbox onChange={(e)=>{setOnline(e.target.checked)}} />} label="Онлайн" />
                            <FormControlLabel  control={<Checkbox onChange={(e)=>{setOffline(e.target.checked)}} />} label="Особисто в залі" />
                        </FormGroup>
                        <FormGroup row sx={{alignItems:"center"}}>
                            <span>Згода на обробку даних?</span>
                            <FormControlLabel required  control={<Checkbox onChange={(e)=>{setPermission(e.target.checked)}} />}  />
                        </FormGroup>
                        <br/>
                        <button type="submit" className="carouselListLeftButton"  >Зареєструватися</button>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}