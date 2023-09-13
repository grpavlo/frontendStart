import React from "react";

import "../CSS/Main.css"
import articlesMain from '../img/articlesMain.jpg'
import video from '../img/videoMain.jpg'
import calendar from '../img/calendarMain.png'
    import book from "../img/bookMain.jpg"
function Library() {
    return(
        <div className="library">
            <div className="libraryContainer">
                <div className="blockLibrary">
                    <img src={book} alt="library"/>
                    <p>Книга "МСФЗ:Короткий курс для практиків"</p>
                    <button onClick={()=>{window.open("/book")}}>Детальніше ></button>
                </div>
                <div className="blockLibrary">
                    <img src={articlesMain} alt="library"/>
                    <p>Статті</p>
                    <button onClick={()=>(window.open("/Articles"))}>Детальніше ></button>
                </div>
                <div className="blockLibrary">
                    <img src={video} alt="library"/>
                    <p>Відео</p>
                    <button onClick={()=>(window.open("/video"))}>Детальніше ></button>
                </div>
                <div className="blockLibrary">
                    <img src={calendar} alt="library"/>
                    <p>Календарі на робочий стіл 2023</p>
                    <button onClick={()=>(window.open("/Calendar"))}>Детальніше ></button>
                </div>
            </div>
        </div>
    )
}

export default Library


