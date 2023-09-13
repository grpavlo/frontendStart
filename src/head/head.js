import Header from "../header/Header";
import Footer from "../footer/footer";
import about3 from "../img/about3.jpg"
import book1 from "../img/book1.png"
import book2 from "../img/book2.png"
import book4 from "../img/1.jpg"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {useEffect, useState} from "react";
import server from "../server";

export default function Head(){

    const [idFrom,setIdFrom] = useState(0)
    const[title,setTitle] = useState("")
    const[subTitle,setSubTitle] = useState("")
    const[titleBlock1,setTitleBlock1] = useState("")
    const[titleBlock2,setTitleBlock2] = useState("")
    const[textBlock1,setTextBlock1] = useState("")
    const[textBlock2,setTextBlock2] = useState("")
    const[subtitlePoint,setSubtitlePoint] = useState("")
    const[point1,setPoint1] = useState("")
    const[point2,setPoint2] = useState("")
    const[point3,setPoint3] = useState("")
    const[point4,setPoint4] = useState("")
    const[point5,setPoint5] = useState("")
    const[point6,setPoint6] = useState("")
    const[point7,setPoint7] = useState("")
    const[point8,setPoint8] = useState("")
    const[point9,setPoint9] = useState("")
    const[point10,setPoint10] = useState("")
    const[point11,setPoint11] = useState("")
    const[titleBlock3,setTitleBlock3] = useState("")
    const[textBlock3,setTextBlock3] = useState("")
    const[textBlock32,setTextBlock32] = useState("")
    const[credo,setCredo] = useState("")
    const[one,setOne] = useState("")

    const[textBlock12,setTextBlock12] = useState("")
    const[textBlock13,setTextBlock13] = useState("")
    const[textBlock14,setTextBlock14] = useState("")
    const[textBlock15,setTextBlock15] = useState("")
    const[textBlock15D,setTextBlock15D] = useState("")
    const[textBlock16,setTextBlock16] = useState("")
    const[textBlock16D,setTextBlock16D] = useState("")
    const[textBlock17,setTextBlock17] = useState("")
    const[textBlock17D,setTextBlock17D] = useState("")
    const[textBlock18,setTextBlock18] = useState("")
    const[textBlock19,setTextBlock19] = useState("")
    const[textBlock110,setTextBlock110] = useState("")


    const [placeholder1,setPlaceholder1] = useState("Додайте фото *")
    const [placeholder2, setPlaceholder2] = useState("Додайте фото *");
    const [placeholder3, setPlaceholder3] = useState("Додайте фото *");
    const [placeholder4, setPlaceholder4] = useState("Додайте фото *");
    const [placeholder5, setPlaceholder5] = useState("Додайте фото *");
    const [placeholder6, setPlaceholder6] = useState("Додайте фото *");
    const [placeholder7, setPlaceholder7] = useState("Додайте фото *");
    const [placeholder8, setPlaceholder8] = useState("Додайте фото *")
    function get(){
        fetch(server+"api/getHead",{
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
                    setSubTitle(data.subtitle)
                    setTitleBlock1(data.titleblock1)
                    setTitleBlock2(data.titleblock2)
                    setTextBlock1(data.textblock1)
                    setTextBlock2(data.textblock2)
                    setSubtitlePoint(data.subtitlepoint)
                    setPoint1(data.point1)
                    setPoint2(data.point2)
                    setPoint3(data.point3)
                    setPoint4(data.point4)
                    setPoint5(data.point5)
                    setPoint6(data.point6)
                    setPoint7(data.point7)
                    setPoint8(data.point8)
                    setPoint9(data.point6)
                    setPoint10(data.point10)
                    setPoint11(data.point11)
                    setTitleBlock3(data.titleblock3)
                    setTextBlock3(data.textblock3)
                    setTextBlock32(data.textblock32)
                    setTextBlock12(data.textblock12)
                    setTextBlock13(data.textblock13)
                    setTextBlock14(data.textblock14)
                    setTextBlock15(data.textblock15)
                    setTextBlock15D(data.textblock15d)
                    setTextBlock16(data.textblock16)
                    setTextBlock16D(data.textblock16d)
                    setTextBlock17(data.textblock17)
                    setTextBlock17D(data.textblock17d)
                    setTextBlock18(data.textblock18)
                    setTextBlock19(data.textblock19)
                    setTextBlock110(data.textblock110)
                    setPlaceholder1(data.placeholder1)
                    setPlaceholder2(data.placeholder2)
                    setPlaceholder3(data.placeholder3)
                    setPlaceholder4(data.placeholder4)
                    setPlaceholder5(data.placeholder5)
                    setPlaceholder6(data.placeholder6)
                    setPlaceholder7(data.placeholder7)
                    setPlaceholder8(data.placeholder8)
                    setCredo(data.credo)
                    setIdFrom(idFrom+1)


                    const textFromDatabase = `${data.credo}`;

                    // Регулярний вираз для знаходження посилань
                    const linkRegex = /https?:\/\/[^\s]+/g;
                    const textWithLinks = textFromDatabase.replace(linkRegex, (match) => {
                        return `<a href=${match} rel="noopener noreferrer">${match}</a>`
                    });

                    setCredo(textWithLinks)

                }

            })
    }

    useEffect(()=>{
        get()
    },[one])

    return(
        <div className="main">
            <Header/>
            <div className="titleHead">
                <span className="titleTextHead">НАШ КЕРІВНИК</span>
                <div className="lineHead"/>
            </div>
            <div className="mainPhoContainer">
                <img src={about3}/>
                <div className="mainTextContainerHead">
                    <span className="text1Head">{subTitle}</span>
                    <span className="text2Head">{title}</span>
                    <div className="lineHeadMain"/>
                    <span className="text3Head">{subtitlePoint}</span>
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
                </div>
            </div>
            <div className="pointHeadMain">
                <div className="pointHead">
                    <div className="onePoint">
                        <ArrowCircleUpIcon sx={{transform:"rotate(90deg)"}} htmlColor="#102D5E"/>
                        <span className="pointText">{point7}</span>
                    </div>
                    <div className="onePoint">
                        <ArrowCircleUpIcon sx={{transform:"rotate(90deg)"}} htmlColor="#102D5E"/>
                        <span className="pointText">{point8}</span>
                    </div>
                    <div className="onePoint">
                        <ArrowCircleUpIcon sx={{transform:"rotate(90deg)"}} htmlColor="#102D5E"/>
                        <span className="pointText">{point9}</span>
                    </div>
                    <div className="onePoint">
                        <ArrowCircleUpIcon sx={{transform:"rotate(90deg)"}} htmlColor="#102D5E"/>
                        <span className="pointText">{point10}</span>
                    </div>
                    <div className="onePoint">
                        <ArrowCircleUpIcon sx={{transform:"rotate(90deg)"}} htmlColor="#102D5E"/>
                        <span className="pointText">{point11}</span>
                    </div>
                </div>
            </div>
            <div className="developmentHead">
                <div className="developmentHeadLeft">
                    <span className="developmentHeadLeftTitle">{textBlock1}</span>
                    <div className="lineHeadMain"/>
                </div>
                <div className="developmentHeadRight">
                    <span className="textHeadHi">{textBlock1}</span>
                    <span className="textHeadHi">{textBlock12}</span>
                    <span className="textHeadHi">{textBlock13}</span>
                    <span className="textHeadHiBold">{textBlock14}</span>
                    <div className="blocksHead">
                        <div className="pontBlockHead">
                            <span className="pontBlockHeadText">{textBlock15}</span>
                            <span className="pontBlockHeadYears">{textBlock15D}</span>
                        </div>
                        <div className="pontBlockHead">
                            <span className="pontBlockHeadText">{textBlock16}</span>
                            <span className="pontBlockHeadYears">{textBlock16D}</span>
                        </div>
                        <div className="pontBlockHead">
                            <span className="pontBlockHeadText">{textBlock17}</span>
                            <span className="pontBlockHeadYears">{textBlock17D}</span>
                        </div>
                    </div>
                    <span className="textHeadHi">{textBlock18}</span>
                    <span className="textHeadHi"><span className="textHeadHiBold">{textBlock19}</span>{textBlock110}</span>

                </div>
            </div>
            <div className="developmentHead">
                <div className="developmentHeadLeft">
                    <span className="developmentHeadLeftTitle">{titleBlock2}</span>
                    <div className="lineHeadMain"/>
                </div>
                <div className="developmentHeadRight">
                    <span className="textHeadHi">{textBlock2}</span>
                    <div className="bookBlocks">
                        <img src={book1}/>
                        <img src={book2}/>
                        <img src={book1}/>
                        <img src={book1}/>
                        <img src={book2}/>
                        <img src={book1}/>
                    </div>
                </div>
            </div>
            <div className="developmentHead">
                <div className="developmentHeadLeft">
                    <span className="developmentHeadLeftTitle">{titleBlock3}</span>
                    <div className="lineHeadMain"/>
                </div>
                <div className="developmentHeadRight">
                    <div className="onePoint">
                        <ArrowCircleUpIcon sx={{transform:"rotate(90deg)"}} htmlColor="#102D5E"/>
                        <span className="pointText">{textBlock3}</span>
                    </div>
                    <div className="onePoint">
                        <ArrowCircleUpIcon sx={{transform:"rotate(90deg)"}} htmlColor="#102D5E"/>
                        <span className="pointText">{textBlock32}</span>
                    </div>
                    <div className="bookBlocks">
                        <img src={book4}/>
                        <img src={book2}/>
                    </div>
                </div>
            </div>
            <div className="footerHead">
               <div className="footerHeadBlock">
                   <div className="lineHeadMain"/>
                   <span dangerouslySetInnerHTML={{ __html: credo }} />
                   <div className="lineHeadMain"/>
               </div>
            </div>
            <Footer/>
        </div>
    )
}