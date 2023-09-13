const cssModal ={
    global:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "70%",
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,

    },
    styleClose:{
        position: "absolute",
        top:15,
        right:15
    },
    content:{
        display:"flex",
        width:"100%"
    },
    contentR:{
        display:"flex",
        width:"100%",
        flexDirection:"column"
    },
    contentLeftRight:{
        display: "flex",
        flexDirection:"column",
        width: "45%",
        marginRight:"5%"
    },
    input:{
        marginBottom:"20px"
    },
    from:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }
}

export {cssModal}