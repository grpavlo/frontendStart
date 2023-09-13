import React,{useEffect, useState} from "react";

import "../CSS/Main.css"
import white from '../img/white.png'
import blue from '../img/blue.png'
import server from "../server";


function Partners() {

    const [one,setOne]=useState("")
    const [carouselBD,setCarouselBD]=useState(<></>)
    function get(){
        fetch(server+"api/getPartner",{
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

                let number = false
                let cra = 2
                setCarouselBD(newData.map((data,index)=>{

                    if(index!== 0 && index%4 === 0){
                        number=true
                    }
                    if(number){
                        if(index%cra !== 0){
                            return (
                                <div className="blockPartners" key={data.id}>
                                    <img src={white} alt="Зображення 1" className="base-image"/>
                                    <img src={blue} alt="Зображення 2" className="top-image"/>
                                    <div className="white">
                                        <img onClick={()=>{
                                            window.open(data.url,"_target")
                                        }} src={process.env.PUBLIC_URL+"/Partner/"+data.namephoto} alt="logo"/>
                                    </div>
                                </div>
                            )
                        }else{
                            return(

                                <div className="blockPartners" key={data.id}>
                                    <img src={white} alt="Зображення 1" className="top-image"/>
                                    <img src={blue} alt="Зображення 2" className="base-image"/>
                                    <div className="blue">
                                        <img onClick={()=>{
                                            window.open(data.url,"_target")
                                        }} src={process.env.PUBLIC_URL+"/Partner/"+data.namephoto} alt="logo"/>
                                    </div>
                                </div>
                            )
                        }
                    }else {
                        if(index%cra === 0){
                            return (
                                <div className="blockPartners" key={data.id}>
                                    <img src={white} alt="Зображення 1" className="base-image"/>
                                    <img src={blue} alt="Зображення 2" className="top-image"/>
                                    <div className="white">
                                        <img onClick={()=>{
                                            window.open(data.url,"_target")
                                        }} src={process.env.PUBLIC_URL+"/Partner/"+data.namephoto} alt="logo"/>
                                    </div>
                                </div>
                            )
                        }else{
                            return(

                                <div className="blockPartners" key={data.id}>
                                    <img src={white} alt="Зображення 1" className="top-image"/>
                                    <img src={blue} alt="Зображення 2" className="base-image"/>
                                    <div className="blue">
                                        <img onClick={()=>{
                                            window.open(data.url,"_target")
                                        }} src={process.env.PUBLIC_URL+"/Partner/"+data.namephoto} alt="logo"/>
                                    </div>
                                </div>
                            )
                        }
                    }



                }))

            })
    }
    useEffect(()=>{
        get()
    },[one])

    return(
        <div className="partners">
            <div className="partnersContainer">

                {carouselBD}
                <span className="partnersText">
                    Щиро дякуємо всім нашим партнерам! Разом ми зростаємо та стаємо кращими!
                </span>
            </div>
        </div>
    )
}

export default Partners



