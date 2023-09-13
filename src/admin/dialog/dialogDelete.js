import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import React from "react";

export default function DialogDelete(props){
    const { open, onClose, deleteF } = props;

    return(
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Підтвердження видалення"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Ви впевнені що хочете видалити запис?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Відхилити</Button>
                <Button onClick={deleteF} color="warning" autoFocus>
                    Видалити
                </Button>
            </DialogActions>
        </Dialog>
    )
}