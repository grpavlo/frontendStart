import Header from "../header/Header";
import Footer from "../footer/footer";
import clients1 from "../img/clients1.jpg"
import {useEffect, useState} from "react";
import server from "../server";

export default function Clients(){
    const[one,setOne] = useState("")
    const [placeholder,setPlaceholder] = useState("Додайте фото *")
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
    const[blockTitle1,setBlockTitle1] = useState("")
    const[blockText1,setBlockText1] = useState("")
    const[blockTitle2,setBlockTitle2] = useState("")
    const[blockText2,setBlockText2] = useState("")
    const[blockTitle3,setBlockTitle3] = useState("")
    const[blockText3,setBlockText3] = useState("")
    const[blockTitle4,setBlockTitle4] = useState("")
    const[blockText4,setBlockText4] = useState("")
    const[blockTitle5,setBlockTitle5] = useState("")
    const[blockText5,setBlockText5] = useState("")
    const[blockTitle6,setBlockTitle6] = useState("")
    const[blockText6,setBlockText6] = useState("")

    const[credo,setCredo] = useState("")
    function get(){
        fetch(server+"api/getClients",{
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
                    setBlockTitle1(data.blocktitle1)
                    setBlockText1(data.blocktext1)
                    setBlockTitle2(data.blocktitle2)
                    setBlockText2(data.blocktext2)
                    setBlockTitle3(data.blocktitle3)
                    setBlockText3(data.blocktext3)
                    setBlockTitle4(data.blocktitle4)
                    setBlockText4(data.blocktext4)
                    setBlockTitle5(data.blocktitle5)
                    setBlockText5(data.blocktext5)
                    setBlockTitle6(data.blocktitle6)
                    setBlockText6(data.blocktext6)
                    setCredo(data.credo)
                }

            })
    }

    useEffect(()=>{
        get()
    },[one])

    return(
        <div className="main">
            <Header/>
            <div className="topBlockImg"/>

            <div className="topBloc">
                <span className="nameClientsTitle">{title}</span>
                <div className="lineHead"/>
                <span className="textHeadHiClients">{subTitle}</span>
            </div>
            <div className="blocksClients">
                <div className="blocksClientsLeft">
                    <span className="startTitle">START</span>
                    <span className="blocksClientsLeftTitle">{titleBlock1}</span>
                </div>
                <div className="blocksClientsRight">
                    <div className="pointClientsRight">{textBlock1}</div>
                    <div className="pointClientsRight">{textBlock2Bold}</div>
                    <div className="pointClientsRight">{textBlock2}</div>
                    <div className="pointClientsRight">{titlePoint}</div>
                    <div className="pointClientsRight">{subtitlePoint}</div>
                    <div className="pointClientsRight">{point1}</div>
                    <div className="pointClientsRight">{point2}</div>
                    <div className="pointClientsRight">{point3}</div>
                </div>
            </div>
            <div className="clientsServiceBlock">
                <img src={process.env.PUBLIC_URL+"/Clients/"+placeholder}/>
                <div className="clientsServiceContent">
                    <span className="startTitle">START</span>
                    <span className="blocksClientsRightTitle">{point4}</span>
                    <div className="lineClients"/>
                    <span className="blocksClientsRightText">{point5}</span>
                    <div className="buttonClient">
                        <button onClick={()=>{window.open("/","_self")
                            localStorage.setItem("url","section1")
                        }}>НАШІ ПОСЛУГИ > </button>
                    </div>
                </div>
            </div>
            <div className="OURClients">
                <div className="lineVerticalClients"/>
                <span className="startTitle">{point6}</span>
                <span  className="OURClientsTitle">{point7}</span>
                <span className="blocksClientsRightTextO">{point8}</span>
            </div>
            <div className="blocksClientsCard">
                <div className="blocksClientsCardMain">
                    <div className="blockClient">
                        <span className="pointClientsRightBlock">{blockTitle1}</span>
                        <span className="startTitleBlock">{blockText1}</span>
                    </div>
                    <div className="blockClient">
                        <span className="pointClientsRightBlock">{blockTitle2}</span>
                        <span className="startTitleBlock">{blockText2}</span>
                    </div>
                    <div className="blockClient">
                        <span className="pointClientsRightBlock">{blockTitle3}</span>
                        <span className="startTitleBlock">{blockText3}</span>
                    </div>
                    <div className="blockClient">
                        <span className="pointClientsRightBlock">{blockTitle4}</span>
                        <span className="startTitleBlock">{blockText4}</span>
                    </div>
                    <div className="blockClient">
                        <span className="pointClientsRightBlock">{blockTitle5}</span>
                        <span className="startTitleBlock">{blockText5}</span>
                    </div>
                    <div className="blockClient">
                        <span className="pointClientsRightBlock">{blockTitle6}</span>
                        <span className="startTitleBlock">{blockText6}</span>
                    </div>
                </div>
            </div>
            <div className="FooterClients">
                <div className="leftFooterClients">
                    <span className="startTitleFooter">START</span>
                    <span className="startTextFooter">{credo}</span>
                </div>
                <button className="buttonFooterClients" onClick={()=>{window.open("/response","_self")
                }}>ВІДГУК</button>
            </div>
            <Footer/>
        </div>
    )
}