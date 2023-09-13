import React from "react";

import "../CSS/Main.css"
import about1 from '../img/about1.png'
import about2 from '../img/about2.jpg'
import about3 from '../img/about3.jpg'
import about4 from '../img/about4.jpg'


function About() {
    return(
        <div className="about">
            <div className="aboutBlock block1">
                <h1 className="aboutText">Про компанію</h1>
            </div>
            <div className="aboutBlock block2">
                <div className="sub-block subBlock1">
                    <img className="imgAbout" src={about1} alt="2"/>
                        <h1 className="aboutText">ІСТОРІЯ ТА ЦІННОСТІ</h1>
                        <button className="block2Button"  onClick={()=>{window.open("/values","_self")}}>Детальніше ></button>
                </div>
                <div className="sub-block subBlock2">
                    <img className="imgAbout" src={about2} alt="3"/>
                        <h1 className="aboutText">НАШ КОЛЕКТИВ</h1>
                        <button className="block2Button" onClick={()=>{window.open("/collective","_self")}}>Детальніше ></button>
                </div>
            </div>
            <div className="aboutBlock block3">
                <div className="sub-block subBlock3">
                    <img className="imgAbout" src={about3} alt="4"/>
                        <h1 className="aboutText">НАШ КЕРІВНИК</h1>
                        <button className="block3Button" onClick={()=>{window.open("/head","_self")}}>Детальніше ></button>
                </div>
                <div className="sub-block subBlock4">
                    <img className="imgAbout" src={about4} alt="5"/>
                        <h1 className="aboutText">НАШІ КЛІЄНТИ</h1>
                        <button className="block3Button" onClick={()=>{window.open("/clients","_self")}}>Детальніше ></button>
                </div>
            </div>
        </div>
    )
}

export default About


