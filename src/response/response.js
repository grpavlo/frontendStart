import Header from "../header/Header";
import Footer from "../footer/footer";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import response from "../img/response.jpg"
import ModalResponse from "./modalResponse";
import server from "../server";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {Checkbox} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, {useEffect,useState} from "react";
export default function Response(){
    const [open,setOpen] =  useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [one,setOne]=useState("")

    const [rows,setRows] = useState([])

    function get() {
        fetch(server + "api/getResponse", {
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
                            pib:data[i].pib,
                            name:data[i].name,
                            response:data[i].response,
                        })
                    }
                }
                setRows(newData)
            })
    }

    useEffect(()=>{
        get()
    },[one])

    return(
        <div className="main">
            <Header/>
            <div className="contentResponse">
                <div className="componentResponse">
                    <div className="pointResponse">
                        <span className="miniTitle">START</span>
                        <span className="titleResponse">ВІДГУКИ З ВЕБІНАРІВ</span>
                        <span className="subtitleResponse">Залишайте відгуки про вебінари, нам важлива Ваша думка !</span>
                    </div>
                    <div className="pointResponse" style={{background:"white"}}>
                        <span className="titleResponseCard">Залиште відгук про вебінар</span>
                        <div className="lineResponseCard"/>
                        <button className="response" onClick={handleOpen}>Лишити відгук</button>
                    </div>
                    {
                        rows.map((data,index)=>(
                            <div className="pointResponse" key={index}>
                                <div className="lineFlexR"><div className="lineResponse"/><FormatQuoteIcon htmlColor="#6EC1E4"/><div className="lineResponse"/></div>
                                <span className="textResponse">
                                    {data.response}
                                </span>
                                <span className="nameResponse"> {data.pib}</span>
                                <span className="nameWebinarResponse"> {data.name}</span>
                            </div>
                        ))
                    }

                </div>
            </div>
            <ModalResponse open={open} handleClose={handleClose}/>
            <Footer/>
        </div>
    )
}