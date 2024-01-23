import Header from "../header/Header";
import Footer from "../footer/footer";
import React from "react";
import {useEffect, useState} from "react";
import server from "../server";
import {Alert, Box, Button, Checkbox, Input, Modal, Snackbar, Typography} from "@mui/material";
import {Close} from "@mui/icons-material/";
import  bookImg from  "../img/1.jpg"
import {cssModal} from "../cssModal/cssModal"
import { Helmet } from 'react-helmet';

export default function Book(){
    const [one,setOne]=useState("")
    const [text,setText] =  useState("");
    const [text1,setText1] =  useState("");
    const [text2,setText2] =  useState("");
    const [text3,setText3] =  useState("");
    const [text4,setText4] =  useState("");
    const [open,setOpen] =  useState(false);
    const [pib,setPib] =  useState("");
    const [tel,setTel] =  useState("");
    const [count,setCount] =  useState("");
    const [city,setCity] =  useState("");
    const [email,setEmail] =  useState("");
    const [name,setName] =  useState("");
    const [cod,setCod] =  useState("");
    const [promoCod, setPromoCod] = useState("");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    function get(){
        fetch(server+"api/getBook",{
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
            })
    }

    useEffect(()=>{
        get()
    },[one])

    function by(e){
        e.preventDefault()
        fetch(server+"api/byBook",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pib,tel,count,city,email,name,cod,promoCod
            })
        }).then(response => {
            return response.text();
        })
            .then(data => {
                if(data === "good"){
                    handleClickOk()
                    handleClose()
                    document.getElementById("form").reset();
                }
            })
    }

    const [openOk, setOpenOk] = React.useState(false);

    const handleClickOk = () => {
        setOpenOk(true);
    };

    const handleCloseOk = () => {
        setOpenOk(false);
    };


    return(
        <div className="main">
	     <Helmet>
        <title>Книга "МСФЗ: Короткий курс для практиків"</title>
        <meta name="description" content="Книга 'МСФЗ: Короткий курс для практиків' Посібник призначений для головних бухгалтерів, фінансистів та аудиторів, які складають, перевіряють або використовують фінансову звітність за МСФЗ у своїй професійній діяльності. Посібник стане у пригоді науковцям, викладачам та студентам вищих навчальних закладів, а також особам, які самостійно вивчають міжнародну практику ведення обліку та складання фінансової звітності." />
        <meta name="keywords" content="МСФЗ, Книга,Короткий курс для практиків,Короткий,курс,практиків" />
      </Helmet>
            <Header/>
            <Snackbar   anchorOrigin={{  vertical: 'top', horizontal: 'right' }} open={openOk} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleCloseOk} severity="success" sx={{ width: '100%' }}>
                    Дякуємо за замовлення, ми зв'яжемось з вами!
                </Alert>
            </Snackbar>
            <div className="bookTop">
                <img alt='Книга "МСФЗ"' src={bookImg}/>
                <div className="bookTopRight">
                    <div className="textMini">
                        <span className="servicesText">{text}</span>
                    </div>
                    <br/>
                    <span className="bookPrice">{text1}</span>
                    <br/>
                    <span>{text2}</span>
                    <br/>
                    <span className="bookName"><span>Авторський колектив:</span>{text3}</span>
                    <br/>
                    <span className="bookText">{text4}</span>
                    <br/>
                    <button className="carouselListLeftButton" onClick={handleOpen} >Замовити</button>

                </div>
            </div>
            <div className="bookBottom">
                <div className="bookBottomContent">
                    <span className="bookTitle">ЗМІСТ</span>
                    <span className="bookSubText">Передмова</span>
                    <span className="bookSubTitle">Глава 1. Вступ до МСФЗ</span>
                    <span className="bookSubText">1.1. Походження МСФЗ. Їх застосування в Україні та світі</span>
                    <span className="bookSubText" style={{marginBottom:15}}>1.2. Концептуальна основа фінансової звітності</span>
                    <span className="bookSubTitle">Глава 2. Складові фінансової звітності</span>
                    <span className="bookSubText">2.1. Ідентифікація фінансової звітності</span>
                    <span className="bookSubText">2.2. Звіт про фінансовий стан</span>
                    <span className="bookSubText">2.3. Звіт про прибутки та збитки та інший сукупний дохід</span>
                    <span className="bookSubText">2.4. Звіт про зміни у власному капіталі</span>
                    <span className="bookSubText">2.5. Звіт про рух грошових коштів</span>
                    <span className="bookSubText" style={{marginBottom:15}}>2.6. Примітки до фінансових звітів</span>
                    <span className="bookSubTitle">Глава 3. Загальна та нефінансова інформація у фінансовій звітності</span>
                    <span className="bookSubText">3.1. Загальні характеристики суб’єкта, що звітує</span>
                    <span className="bookSubText">3.2. Оцінка економічного середовища та здатності підприємства продовжувати діяльність</span>
                    <span className="bookSubText">3.3. Виклад застосованих облікових політик та облікових оцінок</span>
                    <span className="bookSubText" style={{marginBottom:15}}>3.4. Облікові оцінки та виправлення помилок</span>
                    <span className="bookSubTitle">Глава 4. Матеріальні та інші нефінансові активи підприємства</span>
                    <span className="bookSubText">4.1. Основні засоби</span>
                    <span className="bookSubText">4.2. Інвестиційна нерухомість</span>
                    <span className="bookSubText">4.3. Нематеріальні активи</span>
                    <span className="bookSubText">4.4. Необоротні активи на продаж та групи вибуття</span>
                    <span className="bookSubText">4.5. Запаси</span>
                    <span className="bookSubText">4.6. Біологічні активи</span>
                    <span className="bookSubText" style={{marginBottom:15}}>4.7. Орендовані необоротні активи</span>
                    <span className="bookSubTitle">Глава 5. Фінансові інструменти</span>
                    <span className="bookSubText">5.1. Загальні характеристики фінансових інструментів</span>
                    <span className="bookSubText">5.2. Фінансові інвестиції підприємства</span>
                    <span className="bookSubText">5.3. Гроші та їх еквіваленти</span>
                </div>
                <div className="bookBottomContent">
                    <span className="bookSubText">5.4. Кредити та позики</span>
                    <span className="bookSubText">5.5. Оренда у обліку та звітності орендодавця</span>
                    <span className="bookSubText" style={{marginBottom:15}}>5.6. Оцінка фінансових ризиків та управління ними</span>
                    <span className="bookSubTitle">Глава 6. Інші зобов’язання та забезпечення</span>
                    <span className="bookSubText">6.1. Розрахунки з персоналом</span>
                    <span className="bookSubText">6.2. Програми пенсійного забезпечення</span>
                    <span className="bookSubText" style={{marginBottom:15}}>6.3. Забезпечення, умовні зобов’язання та актив</span>
                    <span className="bookSubTitle">Глава 7. Доходи, витрати та результати діяльності</span>
                    <span className="bookSubText">7.1. Доходи від основної діяльності</span>
                    <span className="bookSubText">7.2. Державні гранти</span>
                    <span className="bookSubText">7.3. Собівартість та інші операційні витрати</span>
                    <span className="bookSubText" style={{marginBottom:15}}>7.4. Податок на прибуток</span>
                    <span className="bookSubTitle">Глава 8. Додаткові вимоги до оцінок та розкриття у фінансовій звітності</span>
                    <span className="bookSubText">8.1. Зменшення корисності активів</span>
                    <span className="bookSubText">8.2. Справедлива вартість</span>
                    <span className="bookSubText">8.3. Пов’язані особи</span>
                    <span className="bookSubText">8.4. Валютні курси</span>
                    <span className="bookSubText">8.5. Події після звітної дати</span>
                    <span className="bookSubText" style={{marginBottom:15}}>8.6. Операційні сегменти</span>
                    <span className="bookSubTitle">Глава 9. Міжнародні стандарти про окремі види фінансової звітності</span>
                    <span className="bookSubText">9.1. Перше застосування МСФЗ</span>
                    <span className="bookSubText">9.2. Проміжна фінансова звітність</span>
                    <span className="bookSubText" style={{marginBottom:15}}>9.3. Основи складання консолідованої фінансової звітності</span>
                    <span className="bookSubTitle" >Додатки</span>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={cssModal.global}>
                    <Close sx={cssModal.styleClose} onClick={handleClose}/>
                    <form id="form" style={cssModal.from} onSubmit={(e)=>{by(e)}}>
                        <Box sx={cssModal.content}>
                            <Box sx={cssModal.contentLeftRight} >
                                <Input sx={cssModal.input} placeholder="ПІБ*" required onChange={(e)=>{setPib(e.target.value)}}/>
                                <Input sx={cssModal.input} type="number" placeholder="Телефон*" required onChange={(e)=>{setTel(e.target.value)}}/>
                                <Input sx={cssModal.input} type="number" placeholder="Кількість*" min="0" required onChange={(e)=>{setCount(e.target.value)}}/>
                                <Input sx={cssModal.input} placeholder="Місто, відділення Нової Пошти*" required onChange={(e)=>{setCity(e.target.value)}}/>
                            </Box>
                            <Box sx={cssModal.contentLeftRight}>
                                <Input sx={cssModal.input} type="email" placeholder="Email*" required onChange={(e)=>{setEmail(e.target.value)}}/>
                                <Input sx={cssModal.input} placeholder="Підприємство" onChange={(e)=>{setName(e.target.value)}}/>
                                <Input sx={cssModal.input} type="number" min="0" placeholder="Код ЄДРПОУ" onChange={(e)=>{setCod(e.target.value)}}/>
                                <Input sx={cssModal.input} placeholder="Промокод" onChange={(e)=>{setPromoCod(e.target.value)}}/>
                            </Box>
                        </Box>
                        <br/>
                        <button type="submit" className="carouselListLeftButton"  >Купити книгу</button>
                    </form>
                </Box>
            </Modal>
            <Footer/>
        </div>
    )
}
