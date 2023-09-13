import React from "react";

import "../CSS/Main.css"
import services1 from '../img/services1.jpg'
import services2 from '../img/services2.jpg'
import services4 from '../img/services4.jpg'
import services5 from '../img/services5.jpg'
import services6 from '../img/services6.jpg'
import services7 from '../img/services7.jpg'
import services8 from '../img/services8.jpg'
import {useEffect, useState} from "react";
import server from "../server";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {CardImg} from "react-bootstrap";
import {Checkbox} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Services() {

    const [one,setOne]=useState("")
    const [rows,setRows] = useState([])
    function get(){
        fetch(server+"api/getService",{
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            return response.json();
        })
            .then(data => {
                console.log(data)
                let newData = []
                for(let i =0;i<data.length ;i++){
                    if(data[i].activated){
                        newData = newData.concat({
                            id:data[i].id,
                            namephoto:data[i].namephoto,
                            url:data[i].url,
                            text:data[i].text
                        })
                    }
                }

                setRows(data)
            })
    }
    useEffect(()=>{
        get()
    },[one])

    return(
        <div className="services">
            <div className="servicesContainer">
                {rows.map((data)=>(
                    <div className="blockServices">
                        <img src={process.env.PUBLIC_URL+"/Service/"+data.namephoto} alt="Webinar"/>
                        <p>{data.text}</p>
                        <button onClick={()=>{window.open(data.url,"_self")}}>Детальніше</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services


