
import Footer from "../footer/footer";
import Header from "../header/Header";
import le1 from "../img/le1.jpg"
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import React, {useEffect, useState} from "react";
import server from "../server";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {CardImg} from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ArticlesId(){

    const [one,setOne]=useState("")
    const [rows,setRows] = useState({pointTitle:[]})

    const [value,setValue] = useState("")
    const [title,setTitle] = useState("")
    const [subtitle,setSubtitle]=useState("")
    const [subtitlePhoto,setSubtitlePhoto]=useState("")
    const [titlePhoto,setTitlePhoto]=useState("")

    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');

    function get(){
        fetch(server+"api/postArticlesId",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id})
        }).then(response => {
            return response.json();
        })
            .then(data => {
                console.log(data)
                setTitle(data.title)
                setSubtitle(data.subtitle)
                setTitlePhoto(data.titlephoto)
                setSubtitlePhoto(data.subtitlephoto)
                setValue(data.namephoto)
                console.log(JSON.parse(data["point"]))
                setRows(JSON.parse(data["point"])[0])
            })
    }
    useEffect(()=>{
        get()
    },[one])
/*
<div className="lineFlex">
                                <div className="lineBlack"/>
                            </div>
*/
    return(
        <div className="main">
            <Header/>
            <div className="blockArticlesTop">
                <span className="titleArticles">{title}</span>
                <span className="subtitleArticles">{subtitle}</span>
            </div>
            <div style={{display:"none"}}  className="lineFlex">
                <div className="lineBlack"/>
            </div>
            <div className="blockArticlesCenter">
                <div className="blockArticlesMain">
                    <img src={process.env.PUBLIC_URL+"/Articlesid/"+value}/>
                    <div className="blockArticlesText">
                        <span className="ArticlesName">{titlePhoto}</span>
                        <span className="ArticlesTitle">{subtitlePhoto}</span>
                    </div>
                </div>
            </div>
            <br/>
            {
                rows.pointTitle.map((data,index)=>(
                    <>
                        <div className="lineFlex" key={index}>
                            <div className="lineBlack"/>
                        </div>
                        <div className="contentArticles"  key={index+1}>
                            <div className="pointArticles">
                                <QuestionMarkIcon sx={{fontSize:50,position:"absolute"}} htmlColor="#4B4F58"/>

                                <div className="titleArticlesPoint">
                                    
				    <div dangerouslySetInnerHTML={{__html:data}} />
                                </div>
                                <span className="titleArticlesText">
<div dangerouslySetInnerHTML={{__html:rows.pointsText[index]}} />
</span>
                            </div>
                        </div>
                    </>
                ))
            }

            <br/>
            <br/>
<div className="ArticleA">
 <a href={subtitle} >
<div dangerouslySetInnerHTML={{__html:title}} />
</a>
                <a href={subtitle} >Посилання джерело...</a>
<br/>
</div>
            <Footer/>
        </div>
    )
}
