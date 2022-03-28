import React from 'react';
import { makeStyles } from "@mui/styles";
import { Apps, Camera, Group, Home, Settings, Shop, Videocam, ViewList } from "@mui/icons-material";
import { Logout, Male } from "@mui/icons-material";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import HotelIcon from '@mui/icons-material/Hotel';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import Typography from '../../../modules/components/Typography';
import { Container } from '@mui/material';
import DiningIcon from '@mui/icons-material/Dining';
import { useIsFocusVisible } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        height: "100vh",
        backgroundColor: "white",
        color: "#555",
        border: "1px solid #ece7e7",
        [theme.breakpoints.down("sm")]: {
            backgroundColor: "#0FAACD",
            color: "white",

        },
        // position sticky to make the left bar stay in position even if the feed is still going down
        position: "sticky",
        top: 0,
        bottom: 370,
    },
    iconone: {
        color: (props) => (props.backgroundone ? "white" : "#52D681"),
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px",
            color: (props) => (props.backgroundone ? "white" : "#555"),
        }
    },
    icontwo: {
        color: (props) => (props.backgroundtwo ? "white" : "#52D681"),
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px",
            color: (props) => (props.backgroundtwo ? "white" : "#555"),
        }
    },
    iconthree: {
        color: (props) => (props.backgroundthree ? "white" : "#52D681"),
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px",
            color: (props) => (props.backgroundthree ? "white" : "#555"),
        }
    },
    iconfour: {
        color: (props) => (props.backgroundfour ? "white" : "#52D681"),
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px",
            color: (props) => (props.backgroundfour ? "white" : "#555"),
        }
    },
    itemone: {
        display: "flex",
        alignItems: "center",
        padding: "5% 8%",
        borderRadius: "20px",
        backgroundColor: (props) => (props.backgroundone ? "#0FAACD" : "white"),
        cursor: "pointer",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
            backgroundColor: "#0FAACD !important",
        },
        color: "white",

    },
    itemtwo: {
        display: "flex",
        alignItems: "center",
        padding: "5% 8%",
        borderRadius: "20px",
        backgroundColor: (props) => (props.backgroundtwo ? "#0FAACD" : "white"),

        cursor: "pointer",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
            backgroundColor: "#0FAACD !important",
        },
        color: "white",

    },
    itemthree: {
        display: "flex",
        alignItems: "center",
        padding: "5% 8%",
        borderRadius: "20px",
        backgroundColor: (props) => (props.backgroundthree ? "#0FAACD" : "white"),
        marginBottom: theme.spacing(4),
        cursor: "pointer",
        [theme.breakpoints.down("sm")]: {
            backgroundColor: "#0FAACD !important",
        },
        color: "white",

    },
    itemfour: {
        display: "flex",
        alignItems: "center",
        padding: "5% 8%",
        borderRadius: "20px",
        backgroundColor: (props) => (props.backgroundfour ? "#0FAACD" : "white"),
        cursor: "pointer",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
            backgroundColor: "#0FAACD !important",
        },
        color: "white",

    },
    textone: {
        color: (props) => (props.backgroundone ? "white" : "#555"),
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    texttwo: {
        color: (props) => (props.backgroundtwo ? "white" : "#555"),
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    textthree: {
        color: (props) => (props.backgroundthree ? "white" : "#555"),
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    textfour: {
        color: (props) => (props.backgroundfour ? "white" : "#555"),
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    }
}));

const Leftbar = () => {
    // 0 - 440, 441 - 1063, 1016 - 1642,1642
    // const changeBackground = () => {
    //     console.log(window.scrollY)
    // }
    const [backgroundone, setBackgroundone] = React.useState(false)
    const [backgroundtwo, setBackgroundtwo] = React.useState(false)
    const [backgroundthree, setBackgroundthree] = React.useState(false)
    const [backgroundfour, setBackgroundfour] = React.useState(false)
    const changeBackground = () => {

        if (window.scrollY >= 60 && window.scrollY < 480) {
            setBackgroundone(true)
            setBackgroundtwo(false)
            setBackgroundthree(false)
            setBackgroundfour(false)
        }
        else if
            (window.scrollY >= 480 && window.scrollY < 1055) {
            setBackgroundtwo(true)
            setBackgroundthree(false)
            setBackgroundfour(false)
            setBackgroundone(false)
        }
        else if (window.scrollY >= 1056 && window.scrollY < 1682) {
            setBackgroundthree(true)
            setBackgroundtwo(false)
            setBackgroundfour(false)
            setBackgroundone(false)
        }
        else if (window.scrollY >= 1682) {
            setBackgroundfour(true)
            setBackgroundtwo(false)
            setBackgroundone(false)
            setBackgroundthree(false)
        }
    }
    const classes = useStyles({ backgroundone, backgroundtwo, backgroundthree, backgroundfour });

    window.addEventListener('scroll', changeBackground)

    return (
        <Container className={classes.container}>

            <div className={classes.itemone}>
                <SettingsAccessibilityIcon className={classes.iconone} />
                <Typography variant="h5" className={classes.textone}>Personal Information</Typography>
            </div>
            <div className={classes.itemtwo}>
                <AirplaneTicketIcon className={classes.icontwo} />
                <Typography variant="h5" className={classes.texttwo}>Transportation</Typography>
            </div>
            <div className={classes.itemthree}>
                <HotelIcon className={classes.iconthree} />
                <Typography variant="h5" className={classes.textthree}>Lodging</Typography>
            </div>
            <div className={classes.itemfour}>
                <DiningIcon className={classes.iconfour} />
                <Typography variant="h5" className={classes.textfour}>Dining</Typography>
            </div>
        </Container>
    );
}

export default Leftbar;
