import React, {useState,useEffect} from "react";

import "../CSS/Main.css"
import server from "../server";
import {Alert, Checkbox, Snackbar} from "@mui/material";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import DeleteIcon from "@mui/icons-material/Delete";



function Contacts() {
    const [pib,setPib]=useState("")
    const [tel,setTel]=useState("")
    const [email,setEmail]=useState("")
    const [question,setQuestion]=useState("")

    const [text,setText] =  useState("");
    const [text1,setText1] =  useState("");
    const [text2,setText2] =  useState("");
    const [text3,setText3] =  useState("");
    const [text4,setText4] =  useState("");
    const [text5,setText5] =  useState("");
    const [text6,setText6] = useState("");
    const [text7,setText7] =  useState("");
    const [text8,setText8] =  useState("");
    const [text9,setText9] =  useState("");
    const [one,setOne]=useState("")

    function get(){
        fetch(server+"api/getClientContactInfo",{
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            return response.json();
        })
            .then(data => {
                setText(data.text)
                setText1(data.text1)
                setText2(data.text2)
                setText3(data.text3)
                setText4(data.text4)
                setText5(data.text5)
                setText6(data.text6)
                setText7(data.text7)
                setText8(data.text8)
                setText9(data.text9)
            })
    }

    useEffect(()=>{
        get()
    },[one])

    function submit(e){
        e.preventDefault()
        fetch(server+"api/clientContact",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pib,tel,email,question
            })
        }).then(response => {
            return response.text();
        })
            .then(data => {
                if(data === "good"){
                    handleClick()
                    document.getElementById("form").reset();
                }
            })
    }

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div className="contacts" id="section3">
            <Snackbar   anchorOrigin={{  vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Дякуємо,ми зв'яжемось з вами!
                </Alert>
            </Snackbar>
            <div className="contactsContainer">
                <div className="blockContacts">
                   <span className="contactsTitle">КОНТАКТИ</span>
                   <div className="contactsContact">
                       <span className="contactsTitleBlue">ТЕЛЕФОНИ</span>
                       <span className="contactsTitleStandard">{text} </span>
                       <span className="contactsTitleStandard">{text1}</span>
                       <span className="contactsTitleStandard">{text2}</span>
                       <span className="contactsTitleStandard">{text3}</span>
                       <span className="contactsTitleStandard">{text4}</span>
                       <span className="contactsTitleStandard">{text5}</span>
                       <br/>
                       <br/>
                        <span className="contactsTitleBlue">{text6}</span>
                        <span className="contactsTitleStandard">{text7}</span>
                        <span className="contactsTitleBlue">{text8}</span>
                        <span className="contactsTitleStandard">{text9}</span>
                    </div>
                </div>
                <div className="blockContacts">
                    <form  className="contactsContact" id="form"  onSubmit={(e)=>{submit(e)}}>
                        <input className="contactsInput" placeholder="ПІБ" onChange={(e)=>{setPib(e.target.value)}} required />
                        <input className="contactsInput" placeholder="Телефон" type="number" min="0" onChange={(e)=>{setTel(e.target.value)}} required />
                        <input className="contactsInput" placeholder="email" type="email" onChange={(e)=>{setEmail(e.target.value)}} required />
                        <input className="contactsInput" placeholder="Питання до нас" onChange={(e)=>{setQuestion(e.target.value)}} required />
                        <input className="contactsSubmit" type="submit" value="Відправити дані"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts


