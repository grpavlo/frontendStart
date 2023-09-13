import React, {useState,useEffect} from "react";
import server from "../server";
import {Input, Button} from "@mui/material";
import Paper from "@material-ui/core/Paper";
import Title from "./Ttitle";
import {MuiFileInput} from "mui-file-input";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "../useStyles";


export default function Clients(){

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
    const[one,setOne] = useState("")

    const classes = useStyles();

    const handleChange = (newValue) => {
        setPlaceholder(newValue.name)
        setValue(newValue);
    };

    function submit(e){
        e.preventDefault()
        if( placeholder !== "Додайте фото *"){
            let namePhoto = placeholder
            console.log(1)
            if(value !== null){
                namePhoto = value.name
                const formData = new FormData();
                formData.append('file', value);

                fetch(server+'api/uploadClients', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.text())
            }

            fetch(server+'api/newClients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    namePhoto,title,subTitle,titleBlock1,textBlock1,textBlock2Bold,textBlock2,titlePoint,subtitlePoint,point1,point2,point3,point4,point5,point6,point7,point8,blockTitle1,blockText1,blockTitle2,blockText2,blockTitle3,blockText3,blockTitle4,blockText4,blockTitle5,blockText5,blockTitle6,blockText6,credo
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
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст другого блоку" defaultValue={textBlock2Bold} onChange={(e)=>{setTextBlock2Bold(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст третьго блоку" defaultValue={textBlock2} onChange={(e)=>{setTextBlock2(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст четвертого блоку" defaultValue={titlePoint} onChange={(e)=>{setTitlePoint(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст п'ятого блоку" defaultValue={subtitlePoint} onChange={(e)=>{setSubtitlePoint(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст шостого блоку" defaultValue={point1} onChange={(e)=>{setPoint1(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст сьомого блоку" defaultValue={point2} onChange={(e)=>{setPoint2(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Текст восьмого блоку" defaultValue={point3} onChange={(e)=>{setPoint3(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Другий заголовок" defaultValue={point4} onChange={(e)=>{setPoint4(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Другий підзаголовок" defaultValue={point5} onChange={(e)=>{setPoint5(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="міні текст" defaultValue={point6} onChange={(e)=>{setPoint6(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Третій заголовок" defaultValue={point7} onChange={(e)=>{setPoint7(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Третій підзаголовок" defaultValue={point8} onChange={(e)=>{setPoint8(e.target.value)}} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Міні блок 1 заголовок" defaultValue={blockTitle1} onChange={(e)=>setBlockTitle1(e.target.value)} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Міні блок 1 підзаголовок" defaultValue={blockText1} onChange={(e)=>setBlockText1(e.target.value)} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Міні блок 2 заголовок" defaultValue={blockTitle2} onChange={(e)=>setBlockTitle2(e.target.value)} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Міні блок 2 підзаголовок" defaultValue={blockText2} onChange={(e)=>setBlockText2(e.target.value)} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Міні блок 3 заголовок" defaultValue={blockTitle3} onChange={(e)=>setBlockTitle3(e.target.value)} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Міні блок 3 підзаголовок" defaultValue={blockText3} onChange={(e)=>setBlockText3(e.target.value)} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Міні блок 4 заголовок" defaultValue={blockTitle4} onChange={(e)=>setBlockTitle4(e.target.value)} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Міні блок 4 підзаголовок" defaultValue={blockText4} onChange={(e)=>setBlockText4(e.target.value)} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Міні блок 5 заголовок" defaultValue={blockTitle5} onChange={(e)=>setBlockTitle5(e.target.value)} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Міні блок 5 підзаголовок" defaultValue={blockText5} onChange={(e)=>setBlockText5(e.target.value)} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Міні блок 6 заголовок" defaultValue={blockTitle6} onChange={(e)=>setBlockTitle6(e.target.value)} required/>
                        <br/>
                        <Input style={{width:"100%",margin:"10px 0px 10px"}} placeholder="Міні блок 6 підзаголовок" defaultValue={blockText6} onChange={(e)=>setBlockText6(e.target.value)} required/>
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