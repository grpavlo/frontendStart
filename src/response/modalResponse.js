import {Alert, Box, Input, Modal, Snackbar} from "@mui/material";
import {cssModal} from "../cssModal/cssModal";
import React,{useState}  from "react";
import {Close} from "@mui/icons-material/";
import server from "../server";

export default function ModalResponse(props){
    const { open, handleClose } = props;

    const [pib,setPib] =  useState("");
    const [name,setName] =  useState("");
    const [response,setResponse] =  useState("");

    const [openOk, setOpenOk] = React.useState(false);

    const handleClickOk = () => {
        setOpenOk(true);
    };

    const handleCloseOk = () => {
        setOpenOk(false);
    };

    function by(e){
        e.preventDefault()

        fetch(server+"api/nowResponse",{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pib,name,response
            })
        }).then(response => {
            return response.text();
        })
            .then(data => {
                handleClickOk()
                handleClose()
                document.getElementById("form").reset();
            })
    }

    return(
        <>
            <Snackbar   anchorOrigin={{  vertical: 'top', horizontal: 'right' }} open={openOk} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleCloseOk} severity="success" sx={{ width: '100%' }}>
                    Дякуємо за відгук!
                </Alert>
            </Snackbar>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={cssModal.global}>
                    <Close sx={cssModal.styleClose} onClick={handleClose}/>
                    <form id="form" style={cssModal.from} onSubmit={(e)=>{by(e)}}>
                        <Box sx={cssModal.contentR}>
                            <Input sx={cssModal.input} placeholder="ПІБ*" required onChange={(e)=>{setPib(e.target.value)}}/>
                            <Input sx={cssModal.input} placeholder="Назва вебінару *" required onChange={(e)=>{setName(e.target.value)}}/>
                            <Input sx={cssModal.input} placeholder="Відгук*"  required onChange={(e)=>{setResponse(e.target.value)}}/>
                        </Box>
                        <br/>
                        <button type="submit" className="carouselListLeftButton">Залишити відгук</button>
                    </form>
                </Box>
            </Modal>
        </>
    )
}