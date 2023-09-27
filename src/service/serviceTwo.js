import Header from "../header/Header";
import Footer from "../footer/footer";
import {useState} from "react";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import HailIcon from '@mui/icons-material/Hail';
import DomainIcon from '@mui/icons-material/Domain';
import CollectionsIcon from '@mui/icons-material/Collections';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import React,{useEffect} from "react";
import {Alert, Box, Checkbox, Input, Modal, Snackbar} from "@mui/material";
import {cssModal} from "../cssModal/cssModal";
import server from "../server";
import {Close} from "@mui/icons-material/";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
let textPoint = []
let b = true

export default function ServiceTwo(){
    const [pib,setPib] =  useState("");
    const [tel,setTel] =  useState("");
    const [email,setEmail] =  useState("");
    const [name,setName] =  useState("");
    const [promoCod, setPromoCod] = useState("");
    const [one,setOne] = useState("")
    const [position,setPosition] = useState("")
    const [question,setQuestion] = useState("")

    const [open,setOpen] =  useState(false);
    const [pointsTitle,setPointsTitle] = useState("")

    const [button,setButton] = useState(<></>);

    const [text,setText] =  useState("");
    const [text1,setText1] =  useState("");
    const [text2,setText2] =  useState("");
    const [text3,setText3] =  useState("");
    const [maintext,setMaintext] =  useState("");
    const [mainTextG,setMainTextG] =  useState("");
    const [pointstitle,setPointstitle] = useState("");
    const [title,setTitle] =  useState("");
    const [subTitle,setSubTitle] =  useState("");
    const [title1,setTitle1] =  useState("");
    const [namePhoto,setNamePhoto] = useState([]);

    const url = new URL(window.location.href);
    let id= 0
    id = url.searchParams.get('id');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    function by(e){
        e.preventDefault()
        fetch(server+"api/newApplication",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pib,tel,email,name,position,question,promoCod,url
            })
        }).then(response => {
            return response.text();
        })
            .then(data => {
                if(data === "good"){
                    handleClickOk()
                    handleClose()
                    document.getElementById("form").reset();
                }
            })
    }

    const [openOk, setOpenOk] = React.useState(false);

    const handleClickOk = () => {
        setOpenOk(true);
    };

    const handleCloseOk = () => {
        setOpenOk(false);
    };

    function get(){
        fetch(server+"api/postServiceNewTwo",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({id})
        }).then(response => {
            return response.json();
        })
            .then(data => {
                if(data.length === 0){
                    window.open("/","_self")
                }else{
                    console.log(data)
                    setTitle(data.title)
                    setSubTitle(data.subtitle)
                    setMaintext(data.maintext)
                    setTitle1(data.title1)
                    setMainTextG(data.maintextg)
                    setPointstitle(data.pointstitle)
                    setText(data.text)
                    setText1(data.text1)
                    setText2(data.text2)
                    setText3(data.text3)
                    setNamePhoto(data.photoname)


                    if(data.tobeornottobe){
                        setButton(<button className="carouselListLeftButton" onClick={handleOpen} >Отримати консультацію</button>)
                    }
                }
            })
    }

    useEffect(()=>{
        get()
    },[one])




    const [textDef,setTextDef] = useState(text[0])
    return(
        <div className="main">
            <Header/>
            <Snackbar   anchorOrigin={{  vertical: 'top', horizontal: 'right' }} open={openOk} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleCloseOk} severity="success" sx={{ width: '100%' }}>
                    Дякуємо за замовлення, ми зв'яжемось з вами!
                </Alert>
            </Snackbar>
           <div className="topTextService">
               <div className="topTextServiceTitle">{title}</div>
               <div className="topTextServiceSubTitle">{subTitle}</div>
           </div>

            <div className="servicesMainBlockText">
                <div className="servicesGBlockTextDiv"  dangerouslySetInnerHTML={{__html: maintext}}/>
            </div>
            <br/>
            <div className="servicesMainBlockText">
                <b>{title1}</b>
            </div>
            <br/>
            <div className="servicesGBlockTextMain">
                <div className="servicesGBlockText" style={{width:"80%"}}>
                    <TaskAltIcon sx={{marginRight:"12px"}}/>
                    <div className="servicesGBlockTextDiv" dangerouslySetInnerHTML={{__html: mainTextG}}/>
                </div>
            </div>
            <div className="bottomService">
                <div className="bottomServiceLeft">
                    <span className="bottomServiceLeftSpan">{pointstitle}</span>
                    <br/>
                    <div className="bottomServiceLeftPoints">
                        <div className="bottomServiceLeftPoint">
                            <div className="bottomServiceLeftPointLine"> <FiberManualRecordIcon sx={{fontSize:10,marginRight:"3px"}}/>  1</div>
                            <span className="bottomServiceLeftPointText">{text}</span>
                        </div>
                        <div className="bottomServiceLeftPoint">
                            <div className="bottomServiceLeftPointLine"><FiberManualRecordIcon sx={{fontSize:10,marginRight:"3px"}}/> 2</div>
                            <span className="bottomServiceLeftPointText">{text1}</span>
                        </div>
                        <div className="bottomServiceLeftPoint">
                            <div className="bottomServiceLeftPointLine"><FiberManualRecordIcon sx={{fontSize:10,marginRight:"3px"}}/> 3</div>
                            <span className="bottomServiceLeftPointText">{text2}</span>
                        </div>
                        <div className="bottomServiceLeftPoint">
                            <div className="bottomServiceLeftPointLine"><FiberManualRecordIcon sx={{fontSize:10,marginRight:"3px"}}/> 4</div>
                            <span className="bottomServiceLeftPointText">{text3}</span>
                        </div>
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL+"/Servicenewtwo/"+namePhoto}/>
            </div>
            <div className="endContentServiceTwo">
                {
                    button
                }
            </div>
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
                                <Input sx={cssModal.input} placeholder="ПІБ*" required onChange={(e)=>{setPib(e.target.value)}}/>
                                <Input sx={cssModal.input} type="number" min="0" placeholder="Телефон*" required onChange={(e)=>{setTel(e.target.value)}}/>
                                <Input sx={cssModal.input} type="email" placeholder="Email*" required onChange={(e)=>{setEmail(e.target.value)}}/>
                                <Input sx={cssModal.input} placeholder="Підприємство" onChange={(e)=>{setName(e.target.value)}}/>
                            </Box>
                            <Box sx={cssModal.contentLeftRight}>
                                <Input sx={cssModal.input} placeholder="Посада" onChange={(e)=>{setPosition(e.target.value)}}/>
                                <Input sx={cssModal.input} placeholder="Питання, що цікавить " onChange={(e)=>{setQuestion(e.target.value)}}/>
                                <Input sx={cssModal.input} placeholder="Промокод" onChange={(e)=>{setPromoCod(e.target.value)}}/>
                            </Box>
                        </Box>
                        <br/>
                        <button type="submit" className="carouselListLeftButton"  >Подати заявку</button>
                    </form>
                </Box>
            </Modal>
            <Footer/>
        </div>
    )
}