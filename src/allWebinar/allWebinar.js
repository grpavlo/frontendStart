import Header from "../header/Header";
import Footer from "../footer/footer";
import React,{useEffect, useState} from "react";
import webinar1 from '../img/webinar1.jpg'
import webinar2 from '../img/webinar2.png'
import server from "../server";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {CardImg} from "react-bootstrap";
import {Checkbox} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ModalResponse from "../response/modalResponse";

export default function AllWebinar(){
    const [one,setOne]=useState("")
    const [rows,setRows] = useState(null)

    function get(){
        fetch(server+"api/getOldAllWebinar",{
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            return response.json();
        })
            .then(data => {
                let newData = []
                for(let i =0;i<data.length ;i++){
                    if(data[i].activated){
                        newData = newData.concat({
                            id:data[i].id,
                            title:data[i].title,
                            nameEvent:data[i].nameEvent,
                            lecturer:data[i].lecturer,
                            namephoto:data[i].namephoto,
                            url:data[i].url,
                        })
                    }
                }
                console.log(newData)
                setRows(newData.map((data,index) => {
                    let lecturer = "Лектори"
                    console.log(data.lecturer)
                    if(data.lecturer.split(",").length === 1){
                        lecturer = "Лектор"
                    }
                    return(
                        <div className="oneWebinar" id={index}>
                            <div className="imgOneWebinar">
                                <img src={process.env.PUBLIC_URL+"/OldAllWebinar/"+data.namephoto}/>
                            </div>
                            <div className="contentOneWebinar">
                                <span className="webinarResponseTitle">{data.nameevent}</span>
                                <span className="titleWebinarSubtitle" style={{textAlign:"left"}}>{data.title}</span>
                                <span className="webinarResponseText">{lecturer}: {data.lecturer}</span>
                                <span className="webinarResponseLink" onClick={()=>{window.open(data.url,"_self")}}>ПРОГРАМА ВЕБІНАРУ</span>
                            </div>
                        </div>
                    )
                }))
            })
    }
    useEffect(()=>{
        get()
    },[one])

    const [open,setOpen] =  useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div  className="main" style={{backgroundColor:"#f3f5f9"}}>
            <Header/>
            <div id="section1" className="textMiniWebinar">
                <span className="servicesTextWebinar">ЗАЛИШАЙТЕ ВІДГУКИ ПРО ВЕБІНАРИ,<br/> НАМ ВАЖЛИВА ВАША ДУМКА</span>
                <span className="line"/>
            </div>
            <div className="responseWebinar">
                <img src={webinar1} alt="people"/>
                <div>
                    <span className="webinarResponseTitle">Лишіть відгук про вебінар</span>
                    <button onClick={handleOpen}>Лишити відгук</button>
                    <span className="webinarResponseText">Відгуки про вебінари та курси можна подивитись, натиснувши тут:</span>
                    <span className="webinarResponseLink" onClick={()=>{window.open("/response")}}>ДИВИТИСЬ ВІДГУКИ</span>
                </div>
            </div>
            <div className="titleWebinar">
                <span className="titleWebinarName">START</span>
                <span className="titleWebinarTitle">ВЕБІНАРИ, ЯКІ ВІДБУЛИСЬ</span>
                <span className="titleWebinarSubtitle">Переглядайте вебінари, які вже відбулись і будемо Вас раді бачити на нових</span>
            </div>
            <div className="allWebinar">
                <span className="allWebinarYears">2023 рік</span>
                {
                    rows
                }
            </div>
            <ModalResponse open={open} handleClose={handleClose}/>
            <Footer/>
        </div>
    )
}