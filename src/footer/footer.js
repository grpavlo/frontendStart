import React from "react";

import "../CSS/Main.css"
import { Link} from "react-scroll";


function Footer() {
    const url = new URL(window.location.href);
    const urlPath = url.pathname;
    if(urlPath !== "/") {
        return(
            <div className="FooterBar">

                <div className="footersBar">
                    <div  className="footerBar" onClick={()=>{
                        window.open("/book","_self")
                    }}>Книга МСФЗ</div>
                    <div className="footerBar" onClick={()=>{window.open("/","_self")
                        localStorage.setItem("url","section3")
                    }}>Контакти</div>
                    <div className="footerBar" onClick={()=>{
                        window.open("/","_self")
                    }}>Головна</div>
                    <div className="footerBar" onClick={()=>{
                        window.open("https://www.facebook.com/StartIFRS")
                    }}>Facebook</div>
                </div>
            </div>

        )
    }else {
        return(
            <div className="FooterBar">

                <div className="footersBar">
                    <div  className="footerBar" onClick={()=>{
                        window.open("/book","_self")
                    }}>Книга МСФЗ</div>
                    <Link smooth className="footerBar" to="section3">Контакти</Link>
                    <div className="footerBar" onClick={()=>{
                        window.open("/","_self")
                    }}>Головна</div>
                    <div className="footerBar" onClick={()=>{
                        window.open("https://www.facebook.com/StartIFRS")
                    }}>Facebook</div>
                </div>
            </div>

        )
    }
}

export default Footer