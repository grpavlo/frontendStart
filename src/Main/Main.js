import React from "react";

import "../CSS/Main.css"
import Header from "../header/Header";
import Carousel from "../carousle/carousle";
import Webinar from "../webinar/webinar";
import Services from "../services/services";
import About from "../about/about";
import Library from "../library/library";
import Partners from "../partners/partners";
import Contacts from "../contacts/contacts";
import Footer from "../footer/footer";
import Scroll from "react-scroll";

let b = true

function Main() {

    const Element  = Scroll.Element;
    const scroller = Scroll.scroller;


    if(b){
        if(localStorage.getItem("url") !== "null"){
            setTimeout(()=>{
                scroller.scrollTo(localStorage.getItem("url"), {
                    smooth: true,
                })
                localStorage.setItem("url","null")
            },1000)
        }

    }

    return(
            <div className="main">
                <Header/>
                <Carousel/>
                <div className="textMini">
                    <a href="https://www.apob.org.ua/?page_id=209" style={{color: "#0170B9", textAlign:"center"}}>“АКРЕДИТОВАНИЙ НАВЧАЛЬНИЙ ЦЕНТР ОСНАД“</a>
                    <span>Детальніше →</span>
                </div>
                <Webinar />
                <div id="section1" className="textMini">
                    <Element name="section1">
                        <span className="servicesText">Послуги</span>
                    </Element>
                </div>
                <Services />
                <About/>
                <div className="textMini"  id="section2">
                    <span className="servicesText">Бібліотека</span>
                </div>
                <Library/>
                <div className="textMini">
                    <span className="servicesText">Наші партнери</span>
                </div>
                <Partners/>
                <Contacts />
                <div className="map">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5932177448035!2d30.599755376779846!3d50.44867718749102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cff16eb1d041%3A0xc9a01efb9c8ab611!2z0LLRg9C70LjRhtGPINCE0LLQs9C10L3QsCDQodCy0LXRgNGB0YLRjtC60LAsIDE3LCDQvtGEIDMwMiwg0JrQuNC10LIsIDAyMDIx!5e0!3m2!1suk!2sua!4v1692817890339!5m2!1suk!2sua"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"/>
                </div>
                <Footer/>
            </div>
    )
}

export default Main