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
let textPoint = []
let b = true

export default function Service(){
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
    const [text4,setText4] =  useState("");
    const [text5,setText5] =  useState("");
    const [text6,setText6] = useState("");
    const [title,setTitle] =  useState("");
    const [subTitle,setSubTitle] =  useState("");
    const [title1,setTitle1] =  useState("");
    const [point,setPoint] = useState([]);

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
        fetch(server+"api/postServiceNew",{
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
                    setText(data.text)
                    setText1(data.text1)
                    setText2(data.text2)
                    setText3(data.text3)
                    setText4(data.text4)
                    setText5(data.text5)
                    setText6(data.text6)
                    setTitle(data.title)
                    setSubTitle(data.subtitle)
                    setTitle1(data.title1)
                    let pointall = JSON.parse(data.pointall)[0]
                    setPointsTitle(pointall.title)
                    textPoint = pointall.pointsText
                    setPoint(pointall.pointTitle)
                    console.log(pointall.pointsText)
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
            <div className="serviceBlock">
                <div className="colorService">
                    <span className="colorServiceTitle">{title}</span>
                    <span className="colorServiceSubTitle">{subTitle}</span>
                </div>
            </div>
            <br/>
            <div className="pointsBlocService">
                <span className="pointsBlocServiceTitle">{pointsTitle}</span>
                <div className="pointsBlocServiceMain">
                    <div className="pointsService">
                        {
                         point.map((data,index)=>{
                             if(index === point.length-1 && b){
                                 b= false
                                 setTimeout(()=>{
                                     document.getElementById("button0").click()
                                 },50)
                             }
                             return(
                                 <span className="pointsOneService" id={"button"+index} onClick={()=>{
                                     for(let i = 0 ;i<point.length;i++){
                                         if(index === i){
                                             console.log(textPoint)
                                             setTextDef(textPoint[i])
                                             document.getElementById("button"+i).style="background:#1d489e; color:white"
                                         }else {
                                             document.getElementById("button"+i).style=""
                                         }

                                     }
                                 }}>{data}</span>
                             )
                         })
                        }

                    </div>
                    <div className="textService">
                        {textDef}
                    </div>
                </div>
            </div>
            <div className="mainContentService">
                <span className="pointsBlocServiceTitle">{title1}</span>
                <div className="mainContentServiceTitleLine"/>
                <div className="mainContentServiceMain">
                    <div className="mainContentServiceMainPoints">
                        <div className="mainContentServicePoint">
                            <LocalLibraryIcon sx={{fontSize:50}}/>
                            <span>{text1}</span>
                        </div>
                        <div className="mainContentServicePoint">
                            <HailIcon sx={{fontSize:50}}/>
                            <span>{text2}</span>
                        </div>
                        <div className="mainContentServicePoint">
                            <DomainIcon sx={{fontSize:50}}/>
                            <span>{text3}</span>
                        </div>
                        <div className="mainContentServicePoint">
                            <CollectionsIcon sx={{fontSize:50}}/>
                            <span>{text4}</span>
                        </div>
                        <div className="mainContentServicePoint">
                            <MusicNoteIcon sx={{fontSize:50}}/>
                            <span>{text5}</span>
                        </div>
                        <div className="mainContentServicePoint">
                            <TagFacesIcon sx={{fontSize:50}}/>
                            <span>{text6}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="endContentService">
                <div className="lineService"/>
                <span >
                   {text}
                </span>
                <div className="lineService"/>
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