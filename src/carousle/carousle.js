import React,{useState} from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import imagesTest from '../img/1.jpg'
import imagesTest2 from '../img/2.png'
import imagesTest3 from '../img/3.jpg'
import imagesTest4 from '../img/3.png'

import {useEffect} from "react";
import server from "../server";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {CardImg} from "react-bootstrap";
import {Checkbox} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

let maxSteps = 0;

function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [activeColor, setActiveColor] = useState("linear-gradient(180deg, #0072D2 0%, #00B6C3 100%)");
    const [one,setOne]=useState("")
    const [carouselBD,setCarouselBD]=useState(<></>)

    const handleNext = () => {
        if(activeStep === maxSteps - 1){
            setActiveStep(0);

        }else{
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if(activeStep === 0){
            setActiveStep(maxSteps-1)
        }else {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }

    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };


    function get(){
        fetch(server+"api/getCarousel",{
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            return response.json();
        })
            .then(data => {
                maxSteps=0
                let newData = []
                for(let i =0;i<data.length ;i++){
                    if(data[i].activated){
                        newData = newData.concat({
                            id:data[i].id,
                            namephoto:data[i].namephoto,
                            title:data[i].title,
                            subtitle:data[i].subtitle,
                            maintext:data[i].maintext,
                            url:data[i].url,
                        })
                    }
                }
                console.log(newData)
                setCarouselBD(newData.map((data)=>{
                    maxSteps++
                    if(data.maintext === "" && data.subtitle === "" && data.title === ""){
                        return (
                            <div className="carouselListNoPhoto" key={data.id}>
                                <img className="carouselListRightNo" alt="asd" src={process.env.PUBLIC_URL+"/carousel/"+data.namephoto}/>
                                <button className="carouselListLeftButton" onClick={()=>{window.open(data.url)}}>Детальніше</button>
                            </div>
                        )
                    }else{
                        return(
                            <div className="carouselList" key={data.id}>
                                <div className="carouselListLeftYellow">
                                    <h2 className="carouselListLeftTitle" >{data.title}</h2>
                                    <button className="carouselListLeftSubtitle" >{data.subtitle}</button>
                                    <p className="carouselListLeftMainText" >{data.maintext}</p>
                                    <button className="carouselListLeftButton"  onClick={()=>{window.open(data.url)}}>Детальніше</button>
                                </div>
                                <img className="carouselListRight" alt="asd" src={process.env.PUBLIC_URL+"/carousel/"+data.namephoto}/>
                            </div>
                        )
                    }
                }))

            })
    }
    useEffect(()=>{
            get()
    },[one])

    return (
        <div className="carouselMain" style={{
            background: activeColor
        }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {
                    carouselBD
                }
            </AutoPlaySwipeableViews>


            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                variant={null}
                sx={{
                    position:"absolute",
                    top:370,
                    width:"99%",
                    backgroundColor:"#00000000",
                    padding:0
                }}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}

                        sx={{
                            color:"red"
                        }}
                    >

                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        sx={{
                            color:"red"
                        }}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}

                    </Button>
                }
            />
            <div                 className="dot"
            >
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    className="dot"
                    sx={{
                        position:"absolute",
                        top:640,
                        width:"99%",
                        backgroundColor:"#00000000",
                        display:"flex",
                        justifyContent:"center",
                        padding:0

                    }}
                />
            </div>

        </div>
    );
}

export default Carousel;

/*
<div className="carouselList" key="2">
                    <div className="carouselListLeftYellow">
                        <button className="carouselListLeftSubtitleYellow">ОНОВЛЕННЯ НОВИН ЩОПОНЕДІЛКА</button>
                        <div className="carouselListLeftTitleYellow">НОВИНИ ЗАКОНОДАВСТВА</div>
                        <p className="carouselListLeftMainTextYellow">ВІЛЬНІ ТА НЕЗЛАМНІ ДУШЕЮ І ТІЛОМ УКРАЇНЦІ</p>
                        <button className="carouselListLeftButtonYellow">Детальніше</button>
                    </div>
                    <img className="carouselListRight" alt="asd" src={imagesTest4}/>
                </div>
*/
