import Header from "../header/Header";
import Footer from "../footer/footer";
import React, {useEffect, useState} from "react";
import server from "../server";

export default function Articles(){

    const [one,setOne]=useState("")

    const [rows,setRows] = useState([])


    function get(){
        fetch(server+"api/getArticles",{
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
                            title:data[i].title,
                            point:JSON.parse(data[i]["point"])
                        })
                    }
                }
                console.log(newData)
                setRows(newData)
            })
    }
    useEffect(()=>{
        get()
    },[one])


    return(
        <div className="main">
            <Header/>
                <div className="mainArticles">
                    {
                        rows.map((data,index)=>(
                            <div className="componentArticles" key={index}>
                                <img src={process.env.PUBLIC_URL+"/Articles/"+data.namephoto}/>
                                <span>{data.title}</span>
                                {
                                    data["point"][0].pointTitle.map((dataPoint,index)=>(
                                        <button onClick={()=>{window.open(data["point"][0].pointsText[index])}}>{dataPoint}</button>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            <Footer />
        </div>
    )
}