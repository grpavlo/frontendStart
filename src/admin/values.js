import React, {useState,useEffect} from "react";
import server from "../server";
import {Input, Button} from "@mui/material";
import Paper from "@material-ui/core/Paper";
import Title from "./Ttitle";
import {MuiFileInput} from "mui-file-input";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "../useStyles";

export default function Values(){

    const [placeholder,setPlaceholder] = useState("Додайте фото *")

    const [value,setValue] = useState(null)
    const [idFrom,setIdFrom] = useState(0)
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

    const classes = useStyles();

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    function submit(e){
        e.preventDefault()
        if( placeholder !== "Додайте фото *"){
            let namePhoto = placeholder
            if(value !== null){
                namePhoto = value.name
                const formData = new FormData();
                formData.append('file', value);

                fetch(server+'api/uploadValues', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.text())
            }

            fetch(server+'api/newValues', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    namePhoto,title,subTitle,titleBlock1,textBlock1,textBlock2Bold,textBlock2,titlePoint,subtitlePoint,point1,point2,point3,point4,point5,point6,point7,point8,titleBlock3,textBlock3,credo
                })
            })
                .then(response => response.text())
                .then(data => {
                    document.getElementById("form").reset()
                    setValue(null)
                    get()
                })
        }
    }

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
                    <Title>Цінності</Title>
                    <form onSubmit={(e)=>{submit(e)}}  id="form" style={{width:"100%"}} key={idFrom}>
                        <MuiFileInput
                            placeholder={placeholder}
                            value={value}
                            onChange={handleChange}
                            inputProps={{ accept: '.png, .jpeg, .jpg' }}
                        />
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок" defaultValue={title} onChange={(e)=>{setTitle(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Підзаголовок" defaultValue={subTitle} onChange={(e)=>{setSubTitle(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок першого блоку" defaultValue={titleBlock1} onChange={(e)=>{setTitleBlock1(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст першого блоку" defaultValue={textBlock1} onChange={(e)=>{setTextBlock1(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Виділиний текст другого блоку" defaultValue={textBlock2Bold} onChange={(e)=>{setTextBlock2Bold(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст другого блоку" defaultValue={textBlock2} onChange={(e)=>{setTextBlock2(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок пунктів" defaultValue={titlePoint} onChange={(e)=>{setTitlePoint(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Підзаголовок пунктів" defaultValue={subtitlePoint} onChange={(e)=>{setSubtitlePoint(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 1" defaultValue={point1} onChange={(e)=>{setPoint1(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 2" defaultValue={point2} onChange={(e)=>{setPoint2(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 3" defaultValue={point3} onChange={(e)=>{setPoint3(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 4" defaultValue={point4} onChange={(e)=>{setPoint4(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 5" defaultValue={point5} onChange={(e)=>{setPoint5(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 6" defaultValue={point6} onChange={(e)=>{setPoint6(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 7" defaultValue={point7} onChange={(e)=>{setPoint7(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Пункт 8" defaultValue={point8} onChange={(e)=>{setPoint8(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Заголовок третього блоку" defaultValue={titleBlock3} onChange={(e)=>{setTitleBlock3(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст третього блоку" defaultValue={textBlock3} onChange={(e)=>{setTextBlock3(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Кредо" defaultValue={credo} onChange={(e)=>{setCredo(e.target.value)}} required/>
                        <div className={classes.seeMore}>
                            <Button type="submit">Відправити</Button>
                        </div>
                    </form >
                </Paper>
            </Grid>
        </>
    )
}