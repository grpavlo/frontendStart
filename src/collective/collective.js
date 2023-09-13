import Footer from "../footer/footer";
import Header from "../header/Header";
import col1 from  "../img/col1.jpg"
import col2 from  "../img/le1.jpg"
import col3 from  "../img/le3.jpg"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useEffect, useState} from "react";
import server from "../server";


let namePhoto0 = "";
let namePhoto1 = "";
let namePhoto2 = "";
let namePhoto3 = "";
let namePhoto4 = "";
let namePhoto5 = "";
let namePhoto6 = "";
let namePhoto7 = "";
let namePhoto8 = "";

export default function Collective(){

    const[one,setOne] = useState("")

    const[title,setTitle] = useState("")

    const[titlePoint,setTitlePoint] = useState("")
    const[point1,setPoint1] = useState("")
    const[point2,setPoint2] = useState("")
    const[point3,setPoint3] = useState("")
    //namePhoto

    const[textBlock2,setTextBlock2] = useState("")


    const[titleBlock3,setTitleBlock3] = useState("")
    //namePhoto1
    const [pib1,setPib1] = useState("")
    const [position1,setPosition1] = useState("")
    const [text1,setText1] = useState("")
    //namePhoto2
    const [pib2, setPib2] = useState("");
    const [position2, setPosition2] = useState("");
    const [text2, setText2] = useState("");

    const [titleBlock4, setTitleBlock4] = useState("");
    //namePhoto3
    const [pib3, setPib3] = useState("");
    const [position3, setPosition3] = useState("");
    const [text3, setText3] = useState("");
    //namePhoto4
    const [pib4, setPib4] = useState("");
    const [position4, setPosition4] = useState("");
    const [text4, setText4] = useState("");

    const [titleBlock5, setTitleBlock5] = useState("");
    //namePhoto5
    const [pib5, setPib5] = useState("");
    const [position5, setPosition5] = useState("");
    const [text5, setText5] = useState("");
    //namePhoto6
    const [pib6, setPib6] = useState("");
    const [position6, setPosition6] = useState("");
    const [text6, setText6] = useState("");

    const [titleBlock6, setTitleBlock6] = useState("");
    //namePhoto7
    const [pib7, setPib7] = useState("");
    const [position7, setPosition7] = useState("");
    const [text7, setText7] = useState("");
    //namePhoto8
    const [pib8, setPib8] = useState("");
    const [position8, setPosition8] = useState("");
    const [text8, setText8] = useState("");

    function get(){
        fetch(server+"api/getCollective",{
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
                    setTitle(data.title)
                    setTitlePoint(data.titlepoint)
                    setPoint1(data.point1)
                    setPoint2(data.point2)
                    setPoint3(data.point3)
                    setTextBlock2(data.textblock2)
                    setTitleBlock3(data.titleblock3)
                    namePhoto0 = data.namephoto
                    namePhoto1 = data.namephoto1
                    setPib1(data.pib1)
                    setPosition1(data.position1)
                    setText1(data.text1)
                    namePhoto2= data.namephoto2
                    setPib2(data.pib2)
                    setPosition2(data.position2)
                    setText2(data.text2)
                    setTitleBlock4(data.titleblock4)
                    namePhoto3 = data.namephoto3
                    setPib3(data.pib3)
                    setPosition3(data.position3)
                    setText3(data.text3)
                    namePhoto4= data.namephoto4
                    setPib4(data.pib4)
                    setPosition4(data.position4)
                    setText4(data.text4)
                    setTitleBlock5(data.titleblock5)
                    namePhoto5= data.namephoto5
                    setPib5(data.pib5)
                    setPosition5(data.position5)
                    setText5(data.text5)
                    namePhoto6= data.namephoto6
                    setPib6(data.pib6)
                    setPosition6(data.position6)
                    setText6(data.text6)
                    setTitleBlock6(data.titleblock6)
                    namePhoto7= data.namephoto7
                    setPib7(data.pib7)
                    setPosition7(data.position7)
                    setText7(data.text7)
                    namePhoto8= data.namephoto8
                    setPib8(data.pib8)
                    setPosition8(data.position8)
                    setText8(data.text8)


                }

            })
    }

    useEffect(()=>{
        get()
    },[one])

    return(
        <div className="main">
            <Header/>
            <div className="titleCollective">
                <span className="miniTitleCollective">START</span>
                <span className="miniSubTitleCollective">{title}</span>
            </div>
            <div className="componentCollective">
                <div className="doneInputCollective">
                    <span className="titleCollective1">{titlePoint}</span>
                    <div className="pointCollective">
                        <CheckCircleIcon htmlColor="#1d489e" sx={{fontSize:30}}/>
                        <span className="pointCollectiveText">{point1}</span>
                    </div>
                    <div className="pointCollective">
                        <CheckCircleIcon  htmlColor="#1d489e" sx={{fontSize:30}}/>
                        <span className="pointCollectiveText">{point2}</span>
                    </div>
                    <div className="pointCollective">
                        <CheckCircleIcon  htmlColor="#1d489e" sx={{fontSize:30}}/>
                        <span className="pointCollectiveText">{point3}</span>
                    </div>
                </div>
                <img  className="imgInputCollective" src={process.env.PUBLIC_URL+"/Collective/"+namePhoto0}/>
            </div>
            <div className="componentCollective">
                <span className="componentCollectiveText">
                    {textBlock2}
                </span>
            </div>
            <div className="photoBlockCollective">
                <span className="photoBlockCollectiveTitle">{titleBlock3}</span>
                <div className="photoBlockCollectiveOne">
                    <div className="blockPhotoAndText">
                        <div className="blockPhoto">
                            <img src={process.env.PUBLIC_URL+"/Collective/"+namePhoto1}/>
                        </div>
                        <span className="blockTextName">{pib1}</span>
                        <span className="blockTextTitle">{position1}</span>
                        <span className="blockTextSubTitle">{text1}</span>
                    </div>

                    <div className="blockPhotoAndText">
                        <div className="blockPhoto">
                            <img src={process.env.PUBLIC_URL+"/Collective/"+namePhoto2}/>
                        </div>
                        <span className="blockTextName">{pib2}</span>
                        <span className="blockTextTitle">{position2}</span>
                        <span className="blockTextSubTitle">{text2}</span></div>
                </div>
            </div>
            <div className="photoBlockCollective">
                <span className="photoBlockCollectiveTitle">{titleBlock4}</span>
                <div className="photoBlockCollectiveOne">
                    <div className="blockPhotoAndText">
                        <div className="blockPhoto">
                            <img src={process.env.PUBLIC_URL+"/Collective/"+namePhoto3}/>
                        </div>
                        <span className="blockTextName">{pib3}</span>
                        <span className="blockTextTitle">{position3}</span>
                        <span className="blockTextSubTitle">{text3}</span>
                    </div>

                    <div className="blockPhotoAndText">
                        <div className="blockPhoto">
                            <img src={process.env.PUBLIC_URL+"/Collective/"+namePhoto4}/>
                        </div>
                        <span className="blockTextName">{pib4}</span>
                        <span className="blockTextTitle">{position4}</span>
                        <span className="blockTextSubTitle">{text4}</span></div>
                </div>
            </div>
            <div className="photoBlockCollective">
                <span className="photoBlockCollectiveTitle">{titleBlock5}</span>
                <div className="photoBlockCollectiveOne">
                    <div className="blockPhotoAndText">
                        <div className="blockPhoto">
                            <img src={process.env.PUBLIC_URL+"/Collective/"+namePhoto5}/>
                        </div>
                        <span className="blockTextName">{pib5}</span>
                        <span className="blockTextTitle">{position5}</span>
                        <span className="blockTextSubTitle">{text5}</span>
                    </div>

                    <div className="blockPhotoAndText">
                        <div className="blockPhoto">
                            <img src={process.env.PUBLIC_URL+"/Collective/"+namePhoto6}/>
                        </div>
                        <span className="blockTextName">{pib6}</span>
                        <span className="blockTextTitle">{position6}</span>
                        <span className="blockTextSubTitle">{text6}</span></div>
                </div>
            </div>
            <div className="photoBlockCollective">
                <span className="photoBlockCollectiveTitle">{titleBlock6}</span>
                <div className="photoBlockCollectiveOne">
                    <div className="blockPhotoAndText">
                        <div className="blockPhoto">
                            <img src={process.env.PUBLIC_URL+"/Collective/"+namePhoto7}/>
                        </div>
                        <span className="blockTextName">{pib7}</span>
                        <span className="blockTextTitle">{position7}</span>
                        <span className="blockTextSubTitle">{text7}</span>
                    </div>

                    <div className="blockPhotoAndText">
                        <div className="blockPhoto">
                            <img src={process.env.PUBLIC_URL+"/Collective/"+namePhoto8}/>
                        </div>
                        <span className="blockTextName">{pib8}</span>
                        <span className="blockTextTitle">{position8}</span>
                        <span className="blockTextSubTitle">{text8}</span></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}