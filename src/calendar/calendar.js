import Header from "../header/Header";
import Footer from "../footer/footer";
import calendar1 from "../img/calendar1.png"
import React, {useEffect, useState} from "react";
import server from "../server";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {CardImg} from "react-bootstrap";
import {Checkbox} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export default function Calendar(){
    const [one,setOne]=useState("")

    const [rows,setRows] = useState([])

    function get(){
        fetch(server+"api/getCalendar",{
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
                            namephoto:data[i].namephoto,
                            url:data[i].url,
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
            <div className="mainContentCalendar">
                <div className="componentContentCalendar">
                    {
                        rows.map((data)=>(
                            <div className="photoCalendar">
                                <img src={process.env.PUBLIC_URL+"/Calendar/"+data.namephoto}/>
                                <a href={process.env.PUBLIC_URL+"/Calendar/"+data.namephoto} download>Завантажити</a>
                            </div>
                        ))
                    }

                </div>
            </div>
            <Footer/>
        </div>
    )
}