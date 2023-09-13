
import "../CSS/Main.css"
import React,{useEffect, useState} from "react";
import server from "../server";



function Webinar() {
    const [rows,setRows] = useState(null)
    const [one,setOne]=useState("")
    function get(){
        fetch(server+"api/getWebinar",{
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
                            namephoto:data[i].namephoto,
                            url:data[i].url,
                        })
                    }
                }
                setRows(newData.map((data,index) => (
                    <div className="block" key={index}>
                        <img src={process.env.PUBLIC_URL+"/Webinar/"+data.namephoto} alt="Webinar"/>
                        <p>{data.title}</p>
                        <button onClick={()=>{
                            window.open(data.url,"_self")
                        }}>Детальніше</button>
                    </div>
                )))
            })
    }
    useEffect(()=>{
        get()
    },[one])

    return(
        <div className="webinar">
            <div className="webinarContainer">
                {rows}
            </div>
        </div>
    )
}

export default Webinar


