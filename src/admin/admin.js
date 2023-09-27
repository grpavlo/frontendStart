import React, { useState} from "react";
import server from "../server";
import {useCookies} from "react-cookie";
import clsx from "clsx";
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Orders from './Orders';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DescriptionIcon from "@mui/icons-material/Description";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from '@mui/material/Collapse';
import MainPage from "./mainPage";
import {useStyles} from "../useStyles";
import Contact from "./contact";
import Partner from "./partner";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Book from "./book";
import WebIcon from '@mui/icons-material/Web';
import WebinarList from "./webinar";
import OldAllWebinar from "./oldAllWebinar";
import WebinarOneAdmin from "./webinarOneAdmin";
import WebinarNow from "./webinarNow";
import WebinarOld from "./webinarOld";
import ByOrRegistration from "./byOrRegistration";
import Service from "./service";
import NewService from "./newService";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ArticlesAdmin from "./articlesAdmin";
import AdminArticlesId from "./adminArticlesId";
import Video from "./video";
import YouTubeIcon from '@mui/icons-material/YouTube';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Calendar from "./calendar";
import RepeatIcon from '@mui/icons-material/Repeat';
import AdminResponse from "./adminResponse";
import Values from "./values";
import BusinessIcon from '@mui/icons-material/Business';
import Collective from "./collective";
import Head from "./head";
import Clients from "./clients";
import NewServiceTwo from "./newServiceTwo";


let carousel = false
let clickWebinar = false
let clickArticles = false
let clickValues = false

function Admin() {
    const [cookies,setCookie] = useCookies(['inf']);
    const [ready,setReady] = useState(false)
    const token = cookies.inf;

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const [openMini, setOpenMini] = useState(false);
    const [openArticles, setOpenArticles] = useState(false);
    const [openValues, setOpenValues] = useState(false);
    const [openMiniWebinar, setOpenMiniWebinar] = useState(false);



    const handleClick = () => {
        setOpen(true);
        setOpenMini(!openMini);
    };

    const handleClickArticles = () => {
        setOpen(true);
        setOpenArticles(!openArticles);
    };

    const handleClickValues = () => {
        setOpen(true);
        setOpenValues(!openValues);
    };

    const handleClickWebinar = () =>{
        setOpen(true);
        setOpenMiniWebinar(!openMiniWebinar);
    }

    const [mainPanel,setMainPanel] = useState(<></>)

    const handleDrawerOpen = () => {
        setOpen(true);
        setOpenMini(carousel);
        setOpenValues(clickValues);
        setOpenMiniWebinar(clickWebinar);
        setOpenArticles(clickArticles)
    };
    const handleDrawerClose = () => {
        carousel=openMini
        clickWebinar=openMiniWebinar
        clickArticles=openArticles
        clickValues=openValues
        setOpen(false);
        setOpenMini(false);
        setOpenMiniWebinar(false);
        setOpenArticles(false);

    };

    fetch(server+"api/testToken",{
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token
        })
    }).then(response => {
        return response.text();
    })
        .then(data => {
            console.log(data)
            if(data === "Good"){
                setReady(true)
            }else {
                window.open("/admin/sign-in","_self")
            }
        })


    function mainPage(){
        setMainPanel(
            <MainPage/>
        )
    }

    function contact(){
        setMainPanel(
            <Contact/>
        )
    }

    function parent() {
        setMainPanel(
            <Partner/>
        )
    }

    function book() {
        setMainPanel(
            <Book/>
        )
    }

    function webinar() {
        setMainPanel(
            <WebinarList/>
        )
    }

    function oldAllWebinar() {
        setMainPanel(
            <OldAllWebinar/>
        )
    }

    function newWebinar() {
        setMainPanel(
            <WebinarOneAdmin/>
        )
    }

    function webinarNow() {
        setMainPanel(
            <WebinarNow/>
        )
    }

    function webinarOld() {
        setMainPanel(
            <WebinarOld/>
        )
    }
    function byOrRegistration() {
        setMainPanel(
            <ByOrRegistration/>
        )
    }

    function service() {
        setMainPanel(
            <Service/>
        )
    }

    function newService() {
        setMainPanel(
            <NewService/>
        )
    }
    function newServiceTwo() {
        setMainPanel(
            <NewServiceTwo/>
        )
    }

    function articles() {
        setMainPanel(
            <ArticlesAdmin/>
        )
    }

    function adminArticlesId() {
        setMainPanel(
            <AdminArticlesId/>
        )
    }

    function video() {
        setMainPanel(
            <Video/>
        )
    }

    function calendar() {
        setMainPanel(
            <Calendar/>
        )
    }

    function response() {
        setMainPanel(
            <AdminResponse/>
        )
    }

    function values() {
        setMainPanel(
            <Values/>
        )
    }

    function collective() {
        setMainPanel(
            <Collective/>
        )
    }

    function head() {
        setMainPanel(
            <Head/>
        )
    }

    function clients() {
        setMainPanel(
            <Clients/>
        )
    }

    if(ready){
        return(
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button onClick={handleClick}>
                            <ListItemIcon>
                                <DescriptionIcon />
                            </ListItemIcon>
                            <ListItemText primary="Головна" />
                            {openMini ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openMini} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 2 }} onClick={mainPage}>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText primary="Карусель" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 2 }} onClick={parent}>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText primary="Наші партренри" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 2 }} onClick={contact}>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText primary="Контакти" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 2 }} onClick={service}>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText primary="Послуги" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItem button onClick={book}>
                            <ListItemIcon>
                                <MenuBookIcon />
                            </ListItemIcon>
                            <ListItemText primary="Книга" />
                        </ListItem>
                        <ListItem button onClick={handleClickWebinar}>
                            <ListItemIcon>
                                <WebIcon />
                            </ListItemIcon>
                            <ListItemText primary="Вебінари" />
                            {openMiniWebinar ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openMiniWebinar} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 2 }} onClick={webinar}>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText primary='Вебінари (плитка)' />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openMiniWebinar} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 2 }} onClick={oldAllWebinar}>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText primary="Відбулися (плитка)" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openMiniWebinar} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 2 }} onClick={newWebinar}>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText primary="Створити новий" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openMiniWebinar} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 2 }} onClick={webinarNow}>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText primary="Список тривалих" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openMiniWebinar} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 2 }} onClick={webinarOld}>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText primary="Список які відбулися" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openMiniWebinar} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 2 }} onClick={byOrRegistration}>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText primary="Реєстрацій/замов..." />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                    <ListItem button onClick={newServiceTwo}>
                        <ListItemIcon>
                            <HomeRepairServiceIcon />
                        </ListItemIcon>
                        <ListItemText primary="Послуги" />
                    </ListItem>
                    <ListItem button onClick={handleClickArticles}>
                        <ListItemIcon>
                            <DescriptionIcon />
                        </ListItemIcon>
                        <ListItemText primary="Статті" />
                        {openArticles ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openArticles} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 2 }} onClick={articles}>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary="Статті підпункти" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 2 }} onClick={adminArticlesId}>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary="Зміст підпункта" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItem button onClick={video}>
                        <ListItemIcon>
                            <YouTubeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Відео" />
                    </ListItem>
                    <ListItem button onClick={calendar}>
                        <ListItemIcon>
                            <CalendarMonthIcon />
                        </ListItemIcon>
                        <ListItemText primary="Календар" />
                    </ListItem>
                    <ListItem button onClick={response}>
                        <ListItemIcon>
                            <RepeatIcon />
                        </ListItemIcon>
                        <ListItemText primary="Відгуки" />
                    </ListItem>
                    <ListItem button onClick={handleClickValues}>
                        <ListItemIcon>
                            <BusinessIcon />
                        </ListItemIcon>
                        <ListItemText primary="Про компанію" />
                        {openValues ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openValues} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 2 }} onClick={values}>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary="Цінності" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 2 }} onClick={collective}>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary="Колектив" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 2 }} onClick={head}>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary="Керівник" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 2 }} onClick={clients}>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary="Кліенти" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container  maxWidth="lg" className={classes.container}>
                        <Grid  container spacing={3}>
                            {mainPanel}
                        </Grid>
                    </Container>
                </main>
            </div>
        )
    }


}

export {Admin};