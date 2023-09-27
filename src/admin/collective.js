import React, {useState,useEffect} from "react";
import server from "../server";
import {Input, Button} from "@mui/material";
import Paper from "@material-ui/core/Paper";
import Title from "./Ttitle";
import {MuiFileInput} from "mui-file-input";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "../useStyles";

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
    const [placeholder,setPlaceholder] = useState("Додайте фото *")
    const [placeholder1,setPlaceholder1] = useState("Додайте фото *")
    const [placeholder2, setPlaceholder2] = useState("Додайте фото *");
    const [placeholder3, setPlaceholder3] = useState("Додайте фото *");
    const [placeholder4, setPlaceholder4] = useState("Додайте фото *");
    const [placeholder5, setPlaceholder5] = useState("Додайте фото *");
    const [placeholder6, setPlaceholder6] = useState("Додайте фото *");
    const [placeholder7, setPlaceholder7] = useState("Додайте фото *");
    const [placeholder8, setPlaceholder8] = useState("Додайте фото *")

    const [value0,setValue0] = useState(null)
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [value4, setValue4] = useState(null);
    const [value5, setValue5] = useState(null);
    const [value6, setValue6] = useState(null);
    const [value7, setValue7] = useState(null);
    const [value8, setValue8] = useState(null);

    const [idFrom,setIdFrom] = useState(0)

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

    const[one,setOne] = useState("")

    const classes = useStyles();

    const handleChange = (newValue) => {
        setValue0(newValue);
        if(newValue !== null){
            namePhoto0=newValue.name
            setPlaceholder(namePhoto0)
        }else{
            namePhoto0=""
            setPlaceholder(namePhoto0)
        }

    };
    const handleChange1 = (newValue1) => {
        setValue1(newValue1);
        if(newValue1 !== null){
            namePhoto1=newValue1.name
            setPlaceholder1(namePhoto1)
        }else{
            namePhoto1=""
            setPlaceholder1(namePhoto1)
        }
    };
    const handleChange2 = (newValue2) => {
        setValue2(newValue2);
        if(newValue2 !== null){
            namePhoto2=newValue2.name
            setPlaceholder2(namePhoto2)
        }else{
            namePhoto2=""
            setPlaceholder2(namePhoto2)
        }
    };

    const handleChange3 = (newValue3) => {
        setValue3(newValue3);
        if(newValue3 !== null){
            namePhoto3=newValue3.name
            setPlaceholder3(namePhoto3)
        }else{
            namePhoto3=""
            setPlaceholder3(namePhoto3)
        }
    };

    const handleChange4 = (newValue4) => {
        setValue4(newValue4);
        if(newValue4 !== null){
            namePhoto4=newValue4.name
            setPlaceholder4(namePhoto4)
        }else{
            namePhoto4=""
            setPlaceholder4(namePhoto4)
        }
    };

    const handleChange5 = (newValue5) => {
        setValue5(newValue5);
        if(newValue5 !== null){
            namePhoto5=newValue5.name
            setPlaceholder5(namePhoto5)
        }else{
            namePhoto5=""
            setPlaceholder5(namePhoto5)
        }
    };

    const handleChange6 = (newValue6) => {
        setValue6(newValue6);
        if(newValue6 !== null){
            namePhoto6=newValue6.name
            setPlaceholder6(namePhoto6)
        }else{
            namePhoto6=""
            setPlaceholder6(namePhoto6)
        }
    };

    const handleChange7 = (newValue7) => {
        setValue7(newValue7);
        if(newValue7 !== null){
            namePhoto7=newValue7.name
            setPlaceholder7(namePhoto7)
        }else{
            namePhoto7=""
            setPlaceholder7(namePhoto7)
        }
    };

    const handleChange8 = (newValue8) => {
        setValue8(newValue8);
        if(newValue8 !== null){
            namePhoto8=newValue8.name
            setPlaceholder8(namePhoto8)
        }else{
            namePhoto8=""
            setPlaceholder8(namePhoto8)
        }
    };

    function submit(e){
        e.preventDefault()
        console.log(title,titlePoint,point1,point2,point3,namePhoto0,textBlock2,titleBlock3,namePhoto1,pib1,position1,text1,namePhoto2,pib2,position2,text2,namePhoto3,pib3,position3,text3,namePhoto4,pib4,position4,text4,titleBlock5,namePhoto5,pib5,position5,text5,namePhoto6,pib6,position6,text6,titleBlock6,namePhoto7,pib7,position7,text7,namePhoto8,pib8,position8,text8,titleBlock4)
        if( placeholder !== "Додайте фото *" || placeholder1 !== "Додайте фото *" || placeholder2 !== "Додайте фото *" || placeholder3 !== "Додайте фото *" || placeholder4 !== "Додайте фото *" || placeholder5 !== "Додайте фото *" || placeholder6 !== "Додайте фото *" || placeholder7 !== "Додайте фото *" || placeholder8 !== "Додайте фото *"){
            for (let i = 0; i < 9; i++) {
                const valueName = `value${i}`;

                if (eval(valueName) !== null) {
                    const formData = new FormData();
                    formData.append('file', eval(valueName));

                    fetch(`${server}api/uploadCollective?id=${i}`, {
                        method: 'POST',
                        body: formData
                    })
                        .then(response => response.text())
                }
            }



            fetch(server+'api/newCollective', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,titlePoint,point1,point2,point3,namePhoto0,textBlock2,titleBlock3,namePhoto1,pib1,position1,text1,namePhoto2,pib2,position2,text2,namePhoto3,pib3,position3,text3,namePhoto4,pib4,position4,text4,titleBlock5,namePhoto5,pib5,position5,text5,namePhoto6,pib6,position6,text6,titleBlock6,namePhoto7,pib7,position7,text7,namePhoto8,pib8,position8,text8,titleBlock4
                })
            })
                .then(response => response.text())
                .then(data => {
                    document.getElementById("form").reset()
                    setValue0(null);
                    setValue1(null);
                    setValue2(null);
                    setValue3(null);
                    setValue4(null);
                    setValue5(null);
                    setValue6(null);
                    setValue7(null);
                    setValue8(null);

                    get()
                })
        }
    }

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
                    setIdFrom(idFrom+1)
                    setValue0(null);
                    setValue1(null);
                    setValue2(null);
                    setValue3(null);
                    setValue4(null);
                    setValue5(null);
                    setValue6(null);
                    setValue7(null);
                    setValue8(null);
                    setPlaceholder(namePhoto0)
                    setPlaceholder1(namePhoto1)
                    setPlaceholder2(namePhoto2)
                    setPlaceholder3(namePhoto3)
                    setPlaceholder4(namePhoto4)
                    setPlaceholder5(namePhoto5)
                    setPlaceholder6(namePhoto6)
                    setPlaceholder7(namePhoto7)
                    setPlaceholder8(namePhoto8)

                }

            })
    }

    useEffect(()=>{
        get()
    },[one])


    return(
        <>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Title>Колектив</Title>
                    <form onSubmit={(e)=>{submit(e)}}  id="form" style={{width:"100%"}} key={idFrom}>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок" defaultValue={title} onChange={(e)=>{setTitle(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок пунктів" defaultValue={titlePoint} onChange={(e)=>{setTitlePoint(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 1" defaultValue={point1} onChange={(e)=>{setPoint1(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 2" defaultValue={point2} onChange={(e)=>{setPoint2(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 3" defaultValue={point3} onChange={(e)=>{setPoint3(e.target.value)}} />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder}
                            value={value0}
                            onChange={handleChange}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст другого блоку" defaultValue={textBlock2} onChange={(e)=>{setTextBlock2(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок третього блоку" defaultValue={titleBlock3} onChange={(e)=>{setTitleBlock3(e.target.value)}} />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder1}
                            value={value1}
                            onChange={handleChange1}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="ПІБ 1" defaultValue={pib1} onChange={(e)=>{setPib1(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Посада 1" defaultValue={position1} onChange={(e)=>{setPosition1(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст 1" defaultValue={text1} onChange={(e)=>{setText1(e.target.value)}} />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder2}
                            value={value2}
                            onChange={handleChange2}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="ПІБ 2" defaultValue={pib2} onChange={(e)=>{setPib2(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Посада 2" defaultValue={position2} onChange={(e)=>{setPosition2(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст 2" defaultValue={text2} onChange={(e)=>{setText2(e.target.value)}} />
                        <br/>


                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок четвертого блоку" defaultValue={titleBlock4} onChange={(e)=>{setTitleBlock4(e.target.value)}} />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder3}
                            value={value3}
                            onChange={handleChange3}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="ПІБ 3" defaultValue={pib3} onChange={(e)=>{setPib3(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Посада 3" defaultValue={position3} onChange={(e)=>{setPosition3(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст 3" defaultValue={text3} onChange={(e)=>{setText3(e.target.value)}} />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder4}
                            value={value4}
                            onChange={handleChange4}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="ПІБ 4" defaultValue={pib4} onChange={(e)=>{setPib4(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Посада 4" defaultValue={position4} onChange={(e)=>{setPosition4(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст 4" defaultValue={text4} onChange={(e)=>{setText4(e.target.value)}} />
                        <br/>


                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок п'ятого блоку" defaultValue={titleBlock5} onChange={(e)=>{setTitleBlock5(e.target.value)}} />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder5}
                            value={value5}
                            onChange={handleChange5}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="ПІБ 5" defaultValue={pib5} onChange={(e)=>{setPib5(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Посада 5" defaultValue={position5} onChange={(e)=>{setPosition5(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст 5" defaultValue={text5} onChange={(e)=>{setText5(e.target.value)}} />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder6}
                            value={value6}
                            onChange={handleChange6}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="ПІБ 6" defaultValue={pib6} onChange={(e)=>{setPib6(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Посада 6" defaultValue={position6} onChange={(e)=>{setPosition6(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст 6" defaultValue={text6} onChange={(e)=>{setText6(e.target.value)}} />
                        <br/>


                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок шостого блоку" defaultValue={titleBlock6} onChange={(e)=>{setTitleBlock6(e.target.value)}} />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder7}
                            value={value7}
                            onChange={handleChange7}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="ПІБ 7" defaultValue={pib7} onChange={(e)=>{setPib7(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Посада 7" defaultValue={position7} onChange={(e)=>{setPosition7(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст 7" defaultValue={text7} onChange={(e)=>{setText7(e.target.value)}} />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder8}
                            value={value8}
                            onChange={handleChange8}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="ПІБ 8" defaultValue={pib8} onChange={(e)=>{setPib8(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Посада 8" defaultValue={position8} onChange={(e)=>{setPosition8(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст 8" defaultValue={text8} onChange={(e)=>{setText8(e.target.value)}} />
                        <br/>

                        <div className={classes.seeMore}>
                            <Button type="submit">Відправити</Button>
                        </div>
                    </form >
                </Paper>
            </Grid>
        </>
    )
}