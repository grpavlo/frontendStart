import Header from "../header/Header";
import Footer from "../footer/footer";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {useEffect, useState} from "react";
import server from "../server";
export default function Values(){

    const [placeholder,setPlaceholder] = useState("1")

    const[title,setTitle] = useState("")
    const[subTitle,setSubTitle] = useState("")
    const[titleBlock1,setTitleBlock1] = useState("")
    const[textBlock1,setTextBlock1] = useState("")
    const[textBlock2Bold,setTextBlock2Bold] = useState("")
    const[textBlock2,setTextBlock2] = useState("")
    const[titlePoint,setTitlePoint] = useState("")
    const[subtitlePoint,setSubtitlePoint] = useState("")
    const[point1,setPoint1] = useState("")
    const[point2,setPoint2] = useState("")
    const[point3,setPoint3] = useState("")
    const[point4,setPoint4] = useState("")
    const[point5,setPoint5] = useState("")
    const[point6,setPoint6] = useState("")
    const[point7,setPoint7] = useState("")
    const[point8,setPoint8] = useState("")
    const[titleBlock3,setTitleBlock3] = useState("")
    const[textBlock3,setTextBlock3] = useState("")
    const[credo,setCredo] = useState("")
    const[one,setOne] = useState("")

    function get(){
        fetch(server+"api/getValues",{
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            return response.json();
        })
            .then(data => {
                console.log(data)
                if(data.length !== 0){
                    data = data[0]
                    setPlaceholder(data.namephoto)
                    setTitle(data.title)
                    setSubTitle(data.subtitle)
                    setTitleBlock1(data.titleblock1)
                    setTextBlock1(data.textblock1)
                    setTextBlock2Bold(data.textblock2bold)
                    setTextBlock2(data.textblock2)
                    setTitlePoint(data.titlepoint)
                    setSubtitlePoint(data.subtitlepoint)
                    setPoint1(data.point1)
                    setPoint2(data.point2)
                    setPoint3(data.point3)
                    setPoint4(data.point4)
                    setPoint5(data.point5)
                    setPoint6(data.point6)
                    setPoint7(data.point7)
                    setPoint8(data.point8)
                    setTitleBlock3(data.titleblock3)
                    setTextBlock3(data.textblock3)
                    setCredo(data.credo)
                }

            })
    }

    useEffect(()=>{
        get()
    },[one])
    return(
        <div className="main" style={{background:"white"}}>
            <Header/>

            <div className="minContentValues">
                <div className="leftLene"/>

                <div className="rightValues">
                    <div className="headerValues">
                        <span className="headerValuesTitle">{title}</span>
                        <div className="lineBlueValues"/>
                        <span className="headerValuesText">{subTitle}</span>
                    </div>
                    <div className="hisroryValues">
                        <span className="hisroryValuesTitle">{titleBlock1}</span>
                        <span className="hisroryValuesTtxt">{textBlock1}</span>
                    </div>
                    <div className="photoBlockValues">
                        <img src={process.env.PUBLIC_URL+"/Values/"+placeholder}/>
                        <span className="hisroryValuesTtxt2"><span className="hisroryValuesTtxtBold">{textBlock2Bold}</span>{textBlock2}</span>
                    </div>
                    <div className="pointValuesComponent">
                        <div className="pointValuesComponentText">
                            <span className="pointValuesComponentTextTitle">{titlePoint}</span>
                            <span className="pointValuesComponentTextSubTitle">{subtitlePoint}</span>
                        </div>
                        <div className="pointValuesComponentPoint">
                            <div className="onePoint">
                                <ArrowCircleUpIcon sx={{transform:"rotate(90deg)"}} htmlColor="#102D5E"/>
                                <span className="pointText">{point1}</span>
                            </div>
                            <div className="onePoint">
                                <ArrowCircleUpIcon sx={{transform:"rotate(90deg)"}} htmlColor="#102D5E"/>
                                <span className="pointText">{point2}</span>
                            </div>
                            <div className="onePoint">
                                <ArrowCircleUpIcon sx={{transform:"rotate(90deg)"}} htmlColor="#102D5E"/>
                                <span className="pointText">{point3}</span>
                            </div>
                            <div className="onePoint">
                                <ArrowCircleUpIcon sx={{transform:"rotate(90deg)"}} htmlColor="#102D5E"/>
                                <span className="pointText">{point4}</span>
                            </div>
                            <div className="onePoint">
                                <ArrowCircleUpIcon sx={{transform:"rotate(90deg)"}} htmlColor="#102D5E"/>
                                <span className="pointText">{point5}</span>
                            </div>
                            <div className="onePoint">
                                <ArrowCircleUpIcon sx={{transform:"rotate(90deg)"}} htmlColor="#102D5E"/>
                                <span className="pointText">{point6}</span>
                            </div>
                            <div className="onePoint">
                                <ArrowCircleUpIcon sx={{transform:"rotate(90deg)"}} htmlColor="#102D5E"/>
                                <span className="pointText">{point7}</span>
                            </div>
                            <div className="onePoint">
                                <ArrowCircleUpIcon sx={{transform:"rotate(90deg)"}} htmlColor="#102D5E"/>
                                <span className="pointText">{point8}</span>
                            </div>
                        </div>
                    </div>
                    <div className="pointValuesComponent1">
                        <div className="pointValuesComponentText1">{textBlock3}</div>
                        <div className="pointValuesComponentPoint1">{titleBlock3}</div>
                    </div>
                    <div className="pointValuesComponent1">
                        <div className="pointValuesComponentText2">C</div>
                        <div className="pointValuesComponentPoint1">кладним питанням знаходимо прості та зрозумілі рішення</div>
                    </div>
                    <div className="pointValuesComponent1">
                        <div className="pointValuesComponentText2">Т</div>
                        <div className="pointValuesComponentPoint1">ворчо співпрацюємо та навчаємо</div>
                    </div>
                    <div className="pointValuesComponent1">
                        <div className="pointValuesComponentText2">А</div>
                        <div className="pointValuesComponentPoint1">ктивно консультуємо та надихаємо</div>
                    </div>
                    <div className="pointValuesComponent1">
                        <div className="pointValuesComponentText2">Р</div>
                        <div className="pointValuesComponentPoint1">азом переходимо на МСФЗ та обираємо кращі облікові політики</div>
                    </div>
                    <div className="pointValuesComponent1">
                        <div className="pointValuesComponentText2">Т</div>
                        <div className="pointValuesComponentPoint1">римаємо руку на пульсі змін та постійно розвиваємось</div>
                    </div>
                    <div className="squareBlock">
                        <div className="square">
                            <span className="squareText">{credo}</span>
                        </div>
                    </div>
                </div>

            </div>

            <Footer/>
        </div>
    )
}