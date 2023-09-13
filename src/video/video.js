import Header from "../header/Header";
import Footer from "../footer/footer";
import video from "../img/video1.jpg"
import React, {useEffect, useState} from "react";
import server from "../server";

export default function Video(){

    const [one,setOne]=useState("")
    const [rows,setRows] = useState([])
    function get(){
        fetch(server+"api/getVideo",{
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
            <div className="mainContentVideo">
                <div className="flexContentVideo">
                    {
                        rows.map((data)=>(
                            <div className="video">
                                <img src={process.env.PUBLIC_URL+"/Video/"+data.namephoto}/>
                                <button onClick={()=>{window.open(data.url)}}>Дивитись</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}