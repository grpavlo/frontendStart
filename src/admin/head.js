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

export default function Head(){

    const [placeholder,setPlaceholder] = useState("Додайте фото *")

    const [value,setValue] = useState(null)
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
    const [value0,setValue0] = useState(null)
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [value4, setValue4] = useState(null);
    const [value5, setValue5] = useState(null);
    const [value6, setValue6] = useState(null);
    const [value7, setValue7] = useState(null);
    const [value8, setValue8] = useState(null);

    const handleChange = (newValue) => {
        namePhoto0=newValue.name
        setPlaceholder(namePhoto0)
        setValue0(newValue);
    };
    const handleChange1 = (newValue1) => {
        namePhoto1=newValue1.name
        setPlaceholder1(namePhoto1)
        setValue1(newValue1);
    };
    const handleChange2 = (newValue2) => {
        namePhoto2=newValue2.name
        setPlaceholder2(namePhoto2)
        setValue2(newValue2);
    };

    const handleChange3 = (newValue3) => {
        namePhoto3=newValue3.name
        setPlaceholder3(namePhoto3)
        setValue3(newValue3);
    };

    const handleChange4 = (newValue4) => {
        namePhoto4=newValue4.name
        setPlaceholder4(namePhoto4)
        setValue4(newValue4);
    };

    const handleChange5 = (newValue5) => {
        namePhoto5=newValue5.name
        setPlaceholder5(namePhoto5)
        setValue5(newValue5);
    };

    const handleChange6 = (newValue6) => {
        namePhoto6=newValue6.name
        setPlaceholder6(namePhoto6)
        setValue6(newValue6);
    };

    const handleChange7 = (newValue7) => {
        namePhoto7=newValue7.name
        setPlaceholder7(namePhoto7)
        setValue7(newValue7);
    };

    const handleChange8 = (newValue8) => {
        namePhoto8=newValue8.name
        setPlaceholder8(namePhoto8)
        setValue8(newValue8);
    };

    const classes = useStyles();


    function submit(e){
        e.preventDefault()
        if(placeholder !== "Додайте фото *" || placeholder1 !== "Додайте фото *" || placeholder2 !== "Додайте фото *" || placeholder3 !== "Додайте фото *" || placeholder4 !== "Додайте фото *" || placeholder5 !== "Додайте фото *" || placeholder6 !== "Додайте фото *" || placeholder7 !== "Додайте фото *" || placeholder8 !== "Додайте фото *"){
            for (let i = 0; i < 9; i++) {
                const valueName = `value${i}`;

                if (eval(valueName) !== null) {
                    const formData = new FormData();
                    formData.append('file', eval(valueName));

                    fetch(`${server}api/uploadHead?id=${i}`, {
                        method: 'POST',
                        body: formData
                    })
                        .then(response => response.text())
                }
            }



            fetch(server+'api/newHead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    placeholder,subTitle,title,subtitlePoint,point1,point2,point3,point4,point5,point6,point7,point8,point9,point10,point11,titleBlock1,textBlock1,textBlock12,textBlock13,textBlock14,textBlock15,textBlock15D,textBlock16,textBlock16D,textBlock17,textBlock17D,textBlock18,textBlock19,textBlock110,titleBlock2,textBlock2,placeholder1,placeholder2,placeholder3,placeholder4,placeholder5,placeholder6,titleBlock3,textBlock3,textBlock32,placeholder7,placeholder8,credo
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
                    setValue(null)
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
                    <Title>Керівник</Title>
                    <form onSubmit={(e)=>{submit(e)}}  id="form" style={{width:"100%"}} key={idFrom}>
                        <MuiFileInput
                            placeholder={placeholder}
                            value={value0}
                            onChange={handleChange}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Підзаголовок" defaultValue={subTitle} onChange={(e)=>{setSubTitle(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок" defaultValue={title} onChange={(e)=>{setTitle(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Підзаголовок пунктів" defaultValue={subtitlePoint} onChange={(e)=>{setSubtitlePoint(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 1" defaultValue={point1} onChange={(e)=>{setPoint1(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 2" defaultValue={point2} onChange={(e)=>{setPoint2(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 3" defaultValue={point3} onChange={(e)=>{setPoint3(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 4" defaultValue={point4} onChange={(e)=>{setPoint4(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 5" defaultValue={point5} onChange={(e)=>{setPoint5(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 6" defaultValue={point6} onChange={(e)=>{setPoint6(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 7" defaultValue={point7} onChange={(e)=>{setPoint7(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 8" defaultValue={point8} onChange={(e)=>{setPoint8(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 9" defaultValue={point9} onChange={(e)=>{setPoint9(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 10" defaultValue={point10} onChange={(e)=>{setPoint10(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 11" defaultValue={point11} onChange={(e)=>{setPoint11(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок першого блоку" defaultValue={titleBlock1} onChange={(e)=>{setTitleBlock1(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Перший текст першого блоку" defaultValue={textBlock1} onChange={(e)=>{setTextBlock1(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Другий текст першого блоку" defaultValue={textBlock12} onChange={(e)=>{setTextBlock12(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Третій текст першого блоку" defaultValue={textBlock13} onChange={(e)=>{setTextBlock13(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Четвертий текст першого блоку" defaultValue={textBlock14} onChange={(e)=>{setTextBlock14(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="П'ятий текст першого блоку" defaultValue={textBlock15} onChange={(e)=>{setTextBlock15(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="П'ятий текст першого блоку дата" defaultValue={textBlock15D} onChange={(e)=>{setTextBlock15D(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Шостий текст першого блоку" defaultValue={textBlock16} onChange={(e)=>{setTextBlock16(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Шостий текст першого блоку дата" defaultValue={textBlock16D} onChange={(e)=>{setTextBlock16D(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Сьомий текст першого блоку" defaultValue={textBlock17} onChange={(e)=>{setTextBlock17(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Сьомий текст першого блоку дата" defaultValue={textBlock17D} onChange={(e)=>{setTextBlock17D(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Восьмий текст першого блоку" defaultValue={textBlock18} onChange={(e)=>{setTextBlock18(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Дев'ятий текст першого блоку виділиний" defaultValue={textBlock19} onChange={(e)=>{setTextBlock19(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Дев'ятий текст першого блоку " defaultValue={textBlock110} onChange={(e)=>{setTextBlock110(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок другого блоку" defaultValue={titleBlock2} onChange={(e)=>{setTitleBlock2(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст другого блоку" defaultValue={textBlock2} onChange={(e)=>{setTextBlock2(e.target.value)}} />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder1}
                            value={value1}
                            onChange={handleChange1}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder2}
                            value={value2}
                            onChange={handleChange2}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder3}
                            value={value3}
                            onChange={handleChange3}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder4}
                            value={value4}
                            onChange={handleChange4}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder5}
                            value={value5}
                            onChange={handleChange5}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder6}
                            value={value6}
                            onChange={handleChange6}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок третього блоку" defaultValue={titleBlock3} onChange={(e)=>{setTitleBlock3(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Перший текст третього блоку" defaultValue={textBlock3} onChange={(e)=>{setTextBlock3(e.target.value)}} />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Другий текст третього блоку" defaultValue={textBlock32} onChange={(e)=>{setTextBlock32(e.target.value)}} />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder7}
                            value={value7}
                            onChange={handleChange7}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <MuiFileInput
                            placeholder={placeholder8}
                            value={value8}
                            onChange={handleChange8}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Нижній текст" defaultValue={credo} onChange={(e)=>{setCredo(e.target.value)}} />
                        <div className={classes.seeMore}>
                            <Button type="submit">Відправити</Button>
                        </div>
                    </form >
                </Paper>
            </Grid>
        </>
    )
}