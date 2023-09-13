import React, {useState} from "react";

import "../CSS/Main.css"
import logo from "../img/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import { Link} from "react-scroll";
import CloseIcon from '@mui/icons-material/Close';


function Header() {
    const [display,setDisplay] = useState({display:"none",animation:"ani 1s forwards"})
    const url = new URL(window.location.href);
    const urlPath = url.pathname;

    if(urlPath !== "/"){
        return(
            <div className="HeaderBar">
                <div className="divImgLogo">
                    <img onClick={()=>{
                        window.open("/","_self")
                    }}  className="ImgLogo" alt="START!" src={logo}/>
                </div>
                <div className="pointsBar">
                    <div  onClick={()=>{
                        window.open("/","_self")
                    }}  className="pointBar">Головна</div>
                    <div className="pointBar" onClick={()=>{window.open("/","_self")
                    localStorage.setItem("url","section1")
                    }} >Послуги</div>
                    <div className="pointBar" onClick={()=>{window.open("/response","_self")}}>Відгуки</div>
                    <div className="pointBar" onClick={()=>{window.open("/","_self")
                    localStorage.setItem("url","section2")
                    }}>Бібліотека</div>
                    <div className="pointBar" onClick={()=>{
                        window.open("/book","_self")
                    }}>Книга МСФЗ</div>
                    <div className="pointBar" onClick={()=>{window.open("/","_self")
                    localStorage.setItem("url","section2")
                    }}>Календарі</div>
                    <div className="pointBar" onClick={()=>{window.open("/","_self")
                    localStorage.setItem("url","section3")
                    }}>Контакти</div>
                </div>
                <div className="menuBar">
                    <MenuIcon onClick={()=>{
                        setDisplay({display:"flex",animation:"ani 1s forwards"})
                    }}  htmlColor="white" sx={{ fontSize: 40, cursor:"pointer" }} />
                </div>
                <div style={display} className="menuBarPoints">
                    <CloseIcon onClick={()=>{
                        setDisplay({display:"flex",animation:"ani2 1s forwards"})
                    }} htmlColor="white" sx={{ fontSize: 40,cursor:"pointer", position:"absolute",right:10,top:10 }} />
                    <br/>
                    <span className="point">START</span>
                    <br/>
                    <div className="menuBarPoint">
                        <span className="point" onClick={()=>{
                            window.open("/","_self")
                        }}>Головна</span>
                        <div className="point" onClick={()=>{window.open("/","_self")
                            localStorage.setItem("url","section1")
                        }} >Послуги</div>
                        <div className="point" onClick={()=>{window.open("/response","_self")}}>Відгуки</div>
                        <div className="point" onClick={()=>{window.open("/","_self")
                            localStorage.setItem("url","section2")
                        }}>Бібліотека</div>
                        <div className="point" onClick={()=>{
                            window.open("/book","_self")
                        }}>Книга МСФЗ</div>
                        <div className="point" onClick={()=>{window.open("/","_self")
                            localStorage.setItem("url","section2")
                        }}>Календарі</div>
                        <div className="point" onClick={()=>{window.open("/","_self")
                            localStorage.setItem("url","section3")
                        }}>Контакти</div>
                    </div>
                </div>
            </div>
        )
    }else {
        return(
            <div className="HeaderBar">
                <div className="divImgLogo">
                    <img onClick={()=>{
                        window.open("/","_self")
                    }}  className="ImgLogo" alt="START!" src={logo}/>
                </div>
                <div className="pointsBar">
                    <div  onClick={()=>{
                        window.open("/","_self")
                    }}  className="pointBar">Головна</div>
                    <Link smooth className="pointBar" to="section1" >Послуги</Link>
                    <div className="pointBar" onClick={()=>{window.open("/response","_self")}}>Відгуки</div>
                    <Link smooth className="pointBar" to="section2">Бібліотека</Link>
                    <div className="pointBar" onClick={()=>{
                        window.open("/book","_self")
                    }}>Книга МСФЗ</div>
                    <Link smooth className="pointBar" to="section2">Календарі</Link>
                    <Link smooth className="pointBar" to="section3">Контакти</Link>
                </div>
                <div className="menuBar">
                    <MenuIcon onClick={()=>{
                        setDisplay({display:"flex",animation:"ani 1s forwards"})
                    }}  htmlColor="white" sx={{ fontSize: 40, cursor:"pointer" }} />
                </div>
                <div style={display} className="menuBarPoints">
                    <CloseIcon onClick={()=>{
                        setDisplay({display:"flex",animation:"ani2 1s forwards"})
                    }} htmlColor="white" sx={{ fontSize: 40,cursor:"pointer", position:"absolute",right:10,top:10 }} />
                    <br/>
                    <span className="point">START</span>
                    <br/>
                    <div className="menuBarPoint">
                        <span className="point" onClick={()=>{
                        window.open("/","_self")
                        }}>Головна</span>
                        <Link className="point" smooth to="section1">Послуги</Link>
                        <span className="point" >Відгуки</span>
                        <Link className="point" smooth to="section2">Бібліотека</Link>
                        <div className="pointBar" onClick={()=>{
                            window.open("/book","_self")
                        }}>Книга МСФЗ</div>
                        <Link className="point" smooth to="section2">Календарі</Link>
                        <Link className="point" smooth to="section3">Контакти</Link>
                    </div>
                </div>
            </div>
        )
    }


}

export default Header