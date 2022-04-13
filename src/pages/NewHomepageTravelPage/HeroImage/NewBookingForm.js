import React, { useState } from 'react';
import {
    Box,
    Container,
    Grid,
    Modal,
    Typography
} from '@mui/material';
import NewInitialBookingContent from './NewInitialBookingContent';
import withRoot from '../../../modules/withRoot';
import { useRownd } from '@rownd/react';
import { useLocalStorage } from '../../../useLocalStorage';
import { makeStyles } from "@mui/styles";
import NewSubsequentBookingContent from './NewSubsequentBookingContent';


// const boxstyle = {
//     px: { xs: 0, sm: 5, },
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff80',
//     backdropFilter: 'blur(2px)',
//     borderRadius: 10,
//     ml: 30,
//     mt: 90,
//     width: 0.8,
//     height: {

//     }
// };

const useStyles = makeStyles((theme) => ({
    bookingformcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex !important'
    },
    boxstyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1CCC6F10',
        backdropFilter: 'blur(2px)',
        borderRadius: 10,
        marginTop: 50,
        width: 900,
        [theme.breakpoints.down("sm")]: {
            width: 350,
            borderRadius: 5,
            marginTop: 25,
        },
    },
    buttonletsplan: {
        display: (props) => (props.display ? "none " : "flex "),

        [theme.breakpoints.down("sm")]: {
            paddingLeft: "110px !important",
            paddingBottom: "10px !important"
        },
    },

    gridone: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        [theme.breakpoints.down("sm")]: {
            alignContent: 'center',
            flexDirection: 'column !important'
        },
    },
    gridtwo: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down("sm")]: {
            alignContent: 'center',
            flexDirection: 'column !important'
        },


    },
    // mainbuttonletsplan: {

    //     [theme.breakpoints.down("sm")]: {
    //         width: 100,
    //         marginTop: 0,
    //         marginRight: "100px !important",
    //         paddingLeft: 0,
    //         paddingRight: 0
    //     },

    // },
    mainbuttonletsplan: {
        width: 100,
        marginTop: "80px !important",
        marginRight: "64px !important",
        paddingLeft: "64px !important",
        paddingRight: "64px !important",
        paddingTop: "15px !important",
        [theme.breakpoints.down("sm")]: {
            marginTop: "10px !important",
            marginRight: "14px !important",
        },
    },
}))
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};



const NewBookingForm = () => {

    const [display, setDisplay] = useLocalStorage("booking_full_display", false)
    const classes = useStyles({ display })

    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        location: '',
        daterange: [null, null],
        dateunsure: false,
        occasion: [],
        activities: [],
        numberofadults: 1,
        numberofkids: 0,
        budget: 0,
        notes: '',
        contact_pref: 'Email'
    }
    const { is_authenticated, user, requestSignIn } = useRownd();

    const [values, setValues] = useLocalStorage("last_booking", initialValues)


    // console.log(user.data.full_name)
    // console.log(user.data.email)

    function handleInputChange(name, event) {
        setValues({ ...values, [name]: event });
    }
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        let url = 'https://fz7rq6tvx4.execute-api.us-east-1.amazonaws.com/prod';

        if (!is_authenticated) requestSignIn({ auto_sign_in: true, identifier: user.data.email, post_login_redirect: '/profile?source=booking'  });
        else {
            const body = {
                ...values,
                first_name: user.data.first_name,
                last_name: user.data.last_name,
                email: user.data.email,
            }

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(body)
            })
                .then((response) => response.json())


            console.log('Form submitted to AWS API Gateway')
            setOpen(true)
            setValues(initialValues)
            // setDisplay(false)
            console.log("Form values reset successfully")
            // window.location.assign("https://buy.stripe.com/5kA7vi4cketEgWk6oM")
            localStorage.removeItem("last_booking")
            localStorage.removeItem("booking_full_display")
        }
    }


    return (
        <Container className={classes.bookingformcontainer}>
            <Box
                id="booking-form"
                component="form"
                onSubmit={handleSubmit}
                className={classes.boxstyle}

            >
                <Grid className={classes.gridone} >
                    <Grid className={classes.gridtwo} sx={{}}>
                        <NewInitialBookingContent
                            values={values}
                            handleInputChange={handleInputChange.bind(this)}
                        />
                        {/* <Grid item className={classes.buttonletsplan} >
                            <Box>
                                <Button variant="contained" className={classes.mainbuttonletsplan} sx={{

                                }}
                                    color="secondary" onClick={() => setDisplay(true)}
                                >Let's Plan!</Button>
                            </Box>
                        </Grid> */}


                    </Grid>
                </Grid>
                <Grid item className={classes.sbc}>
                    <NewSubsequentBookingContent values={values}
                        handleInputChange={handleInputChange} />
                </Grid>
                <div>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Thank you for submitting
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Your personal travel concierge will reach out to you within 1 business day
                            </Typography>
                        </Box>
                    </Modal>
                </div>
                {/* {display ? <SubsequentBookingContent values={values}
                 handleInputChange={handleInputChange} /> : <Grid item xs={6}
                  sx={{ mx: 'auto', textAlign: 'center', }}><Button variant="contained"
                   color="secondary" onClick={() => setDisplay(true)}
                    sx={{ width: 200, mb: 6, }}>Let's Plan!</Button></Grid>} */}
            </Box>
        </Container >

    );
}

export default withRoot(NewBookingForm);
