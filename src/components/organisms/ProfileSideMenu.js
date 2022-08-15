import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import DiningIcon from '@mui/icons-material/Dining';
import HotelIcon from '@mui/icons-material/Hotel';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';

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

const ProfileSideMenu = () => {
    const [backgroundone, setBackgroundone] = useState(false)
    const [backgroundtwo, setBackgroundtwo] = useState(false)
    const [backgroundthree, setBackgroundthree] = useState(false)
    const [backgroundfour, setBackgroundfour] = useState(false)
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
                <Typography variant="h5" className={classes.textone} color={backgroundone ? 'white' : '$555'}>Personal Information</Typography>
            </div>
            <div className={classes.itemtwo}>
                <AirplaneTicketIcon className={classes.icontwo} />
                <Typography variant="h5" className={classes.texttwo} color={backgroundtwo ? 'white' : '$555'}>Transportation</Typography>
            </div>
            <div className={classes.itemthree}>
                <HotelIcon className={classes.iconthree} />
                <Typography variant="h5" className={classes.textthree} color={backgroundthree ? 'white' : '$555'}>Lodging</Typography>
            </div>
            <div className={classes.itemfour}>
                <DiningIcon className={classes.iconfour} />
                <Typography variant="h5" className={classes.textfour} color={backgroundfour ? 'white' : '$555'}>Dining</Typography>
            </div>
        </Container>
    );
}

export default ProfileSideMenu;
