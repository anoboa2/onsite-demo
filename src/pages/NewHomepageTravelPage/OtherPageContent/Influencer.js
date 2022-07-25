import { makeStyles } from "@mui/styles";
import { Grid, Link } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import Typography from "../../../modules/components/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ModalIceland from '@mui/material/Modal';
import ModalItaly from '@mui/material/Modal';
import ModalParis from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { ReactPhotoCollage } from "react-photo-collage";
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from "react-router-dom";
import { Snackbar } from "@mui/material";
import Alert from '@mui/material/Alert';

import Iceland from "./images/Iceland.jpg";
import Paris from "./images/Paris.jpg";
import Italy2 from "./images/Italy2.png";

import './CardInfluencer.css';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 660,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    padding: "26.5px !important",
};

const iceland = {
    width: "350px",
    height: ["235px", "235px"],
    layout: [2, 2],
    photos: [
        {
            source:
                "https://images.unsplash.com/photo-1657657397196-0f875ad3cebd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            source:
                "https://images.unsplash.com/photo-1657656588044-a85446f1720c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            source:
                "https://images.unsplash.com/photo-1657656510946-bb347be6cd9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            source:
                "https://images.unsplash.com/photo-1657657397312-b5b81189cf3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            source:
                "https://images.unsplash.com/photo-1657657397194-d45ebd78d124?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            source:
                "https://images.unsplash.com/photo-1657656511197-069484aa25ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },

        {
            source:
                "https://images.unsplash.com/photo-1657656510988-ea0698dfc220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },

        {
            source:
                "https://images.unsplash.com/photo-1657656510997-d2848ab81043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },

        {
            source:
                "https://images.unsplash.com/photo-1657656510950-f36c5a4960e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        }

    ],
    showNumOfRemainingPhotos: true
};


const paris = {
    width: "350px",
    height: ["235px", "235px"],
    layout: [2, 2],
    photos: [
        {
            source:
                "https://images.unsplash.com/photo-1657317600657-4d9236858f13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            source:
                "https://images.unsplash.com/photo-1657577780796-cd84acffdd51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            source:
                "https://images.unsplash.com/photo-1657577780673-ea0fe926593f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            source:
                "https://images.unsplash.com/photo-1657578275713-d5dd57c7b3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            source:
                "https://images.unsplash.com/photo-1657578273352-bd3aabc645e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            source:
                "https://images.unsplash.com/photo-1657577780673-ea0fe926593f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        }

    ],
    showNumOfRemainingPhotos: true
};


const italy = {
    width: "350px",
    height: ["235px", "235px"],
    layout: [2, 2],
    photos: [
        {
            source:
                "https://images.unsplash.com/photo-1657317600657-4d9236858f13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            source:
                "https://images.unsplash.com/photo-1657262264728-97387f41b722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        },
        {
            source:
                "https://images.unsplash.com/photo-1657262264793-7944c090372d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        },
        {
            source:
                "https://images.unsplash.com/photo-1657263084850-a543af10cd82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            source:
                "https://images.unsplash.com/photo-1657262264840-8b63681ee659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        },
        {
            source:
                "https://images.unsplash.com/photo-1657263084919-d1523080ca74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            source:
                "https://images.unsplash.com/photo-1657643042129-5f3b80a5533a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            source:
                "https://images.unsplash.com/photo-1657643042462-2916050e46a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        }

    ],
    showNumOfRemainingPhotos: true
};

const useStyles = makeStyles((theme) => ({
    item: {
        [theme.breakpoints.down("sm")]: {
            display: 'flex',
            flexDirection: 'column !important',
            width: "200px !important",
        }
    },
    typography: {
        marginLeft: "10px !important",
        borderBottom: "3px solid #0FAACD",
        [theme.breakpoints.down("sm")]: {

            borderBottom: "none !important",
            fontSize: "35px !important",
        }
    },
    typography1: {
        borderBottom: "3px solid #0FAACD",
        [theme.breakpoints.down("sm")]: {

            borderBottom: "none !important",
            fontSize: "20px !important",
        }
    },
    maintypography: {

        marginTop: " 15% !important",
        marginBottom: " -1% !important",

        [theme.breakpoints.down("sm")]: {

            marginTop: " 10% !important",
            marginBottom: " 5% !important",
            borderBottom: "none !important",
            fontSize: "35px !important",
        }
    },
    maintypography1: {
        [theme.breakpoints.down("sm")]: {

            borderBottom: "none !important",
            fontSize: "20px !important",
        }
    },

    maintypography3: {

        marginBottom: " 3% !important",
        marginTop: " 2% !important",
        [theme.breakpoints.down("sm")]: {
            marginBottom: " 3% !important",
            marginTop: " 8% !important",
            borderBottom: "none !important",
            fontSize: "20px !important",
        }
    },

    boxone: {
        display: "flex",
        marginTop: " -30% !important",
        marginBottom: " 3% !important",
        flexDirection: "row !important",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            justifyContent: "center",
            fontSize: "20px !important",
            marginLeft: " 10% !important",
        }
    },
    boxtwo: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row !important",
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
            marginLeft: " 5% !important",
        }
    },

}));

const Influencer = () => {
    const [open, setOpen] = React.useState(false);
    const [openItaly, setOpenItaly] = React.useState(false);
    const [openParis, setOpenParis] = React.useState(false);
    const [isCancel, setIsCancel] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setIsCancel(false);
    }
    const search = useLocation().search;
    const cancellationMessage = "Checkout was not completed.  Please try again.";

    const classes = useStyles()

    const handleOpenItaly = () => {
        setOpenItaly(true);
    };

    const handleCloseItaly = () => {
        setOpenItaly(false);
    };

    const handleOpenParis = () => {
        setOpenParis(true);
    };

    const handleCloseParis = () => {
        setOpenParis(false);
    };

    const getCheckoutSession = product_id => event => {
        event.preventDefault();
        let url = "https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/product/createcheckoutsession"
        let body = {
            "product_id": product_id
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data)
                window.location.href = data.redirect_url
            })
            .catch(error => {
                console.log(error)
            })

    };

    React.useEffect(() => {
        const source = new URLSearchParams(search).get("checkout_cancel");
        if (source === 'true') {
            setIsCancel(true);
        }
    }, [])

    return (
        <Grid mb={5} pl={4} pr={4} pt={5}>
            <Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={isCancel}
                onClose={handleClose}>
                <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
                    {cancellationMessage}
                </Alert>
            </Snackbar>
            <Fade bottom>
                <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center" >
                    <Grid item xs={12}>
                        <Box className={classes.boxone}>
                            <Typography className={classes.maintypography} variant="h4" align="center" component="h2" >
                                Izanna's Recent<Typography variant='h4' display="inline-block" color="primary.main" className={classes.typography} >Travels</Typography>
                            </Typography>
                        </Box>
                        <Box className={classes.boxtwo}>
                            <Typography className={classes.maintypography1} variant="h6" align="center" component="h2" >
                                Check out Izanna's instagram for more <Link href="https://www.instagram.com/izanna.lev/" underline="none" > @izanna.lev</Link>
                            </Typography>
                        </Box>
                        <Box className={classes.boxtwo}>
                            <Typography className={classes.maintypography3} variant="body1" align="center" component="h2" >
                                Izanna has had a passion for traveling the world ever since she was a little girl. From organizing family trips to now inspiring others to pack their bags and book that trip. Below are some of her popular itineraries, you can preview and purchase. For customization requests, please use the link at the bottom of the page
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} width={"100%"} marginTop={"-5%"} >
                        <Box className={classes.item} width={"100%"} sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>

                            <div class="flexbox-container2">

                                {/* /Paris/ */}

                                <div>

                                    <Card sx={{ maxWidth: 400 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="350"
                                                src={Paris}
                                                alt="Izanna Paris"
                                                onClick={handleOpenParis}
                                            />
                                            <CardContent onClick={handleOpenParis}>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    Paris
                                                </Typography>

                                                <Typography variant="body2" color="text.secondary">
                                                    Itinerary for 3 days in the magical Paris, France.
                                                </Typography>

                                                <Typography variant="body2" color="#000" fontStyle="italic" fontSize="15px"><br />
                                                    Price: $9.99
                                                </Typography>

                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary" onClick={handleOpenParis}>
                                                Preview itinerary
                                            </Button>
                                            <Button size="small" color="primary" sx={{ paddingLeft: "65px" }} onClick={getCheckoutSession("prod_M3gRlnAKzowhmD")}>Buy Now</Button>
                                            <ModalParis
                                                aria-labelledby="paris-modal-title"
                                                aria-describedby="paris-modal-description"
                                                open={openParis}
                                                onClose={handleCloseParis}
                                                BackdropComponent={Backdrop}
                                                BackdropProps={{
                                                    timeout: 500,
                                                }}
                                                sx={{
                                                    zIndex: 1
                                                }}
                                            >
                                                <Fade in={openParis} >
                                                    <Box sx={style}>
                                                        <Typography id="paris-modal-title" variant="h6" component="h2">
                                                            Travel to Paris
                                                        </Typography><br />

                                                        <Button
                                                            sx={{
                                                                width: 50,
                                                                height: 50,
                                                                color: 'black',
                                                                position: 'absolute',
                                                                right: '5px',
                                                                top: '5px',
                                                            }}
                                                        >
                                                            <CloseIcon onClick={handleCloseParis} />
                                                        </Button>

                                                        <ReactPhotoCollage
                                                            sx={{
                                                                zIndex: 9999,
                                                            }}{...paris} >
                                                        </ReactPhotoCollage>

                                                        <div className="book-text2">
                                                            <Button
                                                                onClick={getCheckoutSession("prod_M3gRlnAKzowhmD")}
                                                                variant="contained" style={{
                                                                    backgroundColor: "#00aaca", padding: "10px 55px",
                                                                    marginTop: "27px",
                                                                    borderRadius: "10px",
                                                                    color: "white",
                                                                    fontSize: "15px",
                                                                }}>Buy Now</Button>
                                                        </div>
                                                    </Box>
                                                </Fade>
                                            </ModalParis>
                                        </CardActions>
                                    </Card>
                                </div>

                                {/* /Italy/ */}

                                <div>
                                    <Card sx={{ maxWidth: 400 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="350"
                                                src={Italy2}
                                                alt="Izanna Italy"
                                                onClick={handleOpenItaly}
                                            />
                                            <CardContent onClick={handleOpenItaly}>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    Italy
                                                </Typography>

                                                <Typography variant="body2" color="text.secondary">
                                                    Itinerary for 2 days in Florence, 2 days in Rome, 5 days in Positano, Italy.
                                                </Typography>


                                                <Typography variant="body2" color="#000" fontStyle="italic" fontSize="15px"><br />
                                                    Price: $9.99
                                                </Typography>

                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary" onClick={handleOpenItaly} >
                                                Preview itinerary
                                            </Button>
                                            <Button size="small" color="primary" sx={{ paddingLeft: "65px" }} onClick={getCheckoutSession("prod_M3gNSuwBEOfg1K")}>Buy Now</Button>
                                            <ModalItaly
                                                aria-labelledby="italy-modal-title"
                                                aria-describedby="italy-modal-description"
                                                open={openItaly}
                                                onClose={handleCloseItaly}
                                                BackdropComponent={Backdrop}
                                                BackdropProps={{
                                                    timeout: 500,
                                                }}
                                                sx={{
                                                    zIndex: 1
                                                }}
                                            >
                                                <Fade in={openItaly} >
                                                    <Box sx={style}>
                                                        <Typography id="italy-modal-title" variant="h6" component="h2">
                                                            Travel to Italy
                                                        </Typography><br />

                                                        <Button
                                                            sx={{
                                                                width: 50,
                                                                height: 50,
                                                                color: 'black',
                                                                position: 'absolute',
                                                                right: '5px',
                                                                top: '5px',
                                                            }}
                                                        >
                                                            <CloseIcon onClick={handleCloseItaly} />
                                                        </Button>

                                                        <ReactPhotoCollage
                                                            sx={{
                                                                zIndex: 9999
                                                            }}{...italy} >
                                                        </ReactPhotoCollage>

                                                        <div className="book-text2">
                                                            <Button
                                                                onClick={getCheckoutSession("prod_M3gNSuwBEOfg1K")}
                                                                variant="contained" style={{
                                                                    backgroundColor: "#00aaca", padding: "10px 55px",
                                                                    marginTop: "27px",
                                                                    borderRadius: "10px",
                                                                    color: "white",
                                                                    fontSize: "15px"
                                                                }}>Buy Now</Button>
                                                        </div>
                                                    </Box>
                                                </Fade>
                                            </ModalItaly>
                                        </CardActions>
                                    </Card>
                                </div>

                                {/* /Iceland/ */}

                                <div>
                                    <Card sx={{ maxWidth: 400 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="350"
                                                src={Iceland}
                                                alt="Izanna Iceland"
                                                onClick={handleOpen}
                                            />
                                            <CardContent onClick={handleOpen}>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    Iceland
                                                </Typography>

                                                <Typography variant="body2" color="text.secondary">
                                                    Itinerary for 7 days in Iceland. <br /> <br />
                                                </Typography>


                                                <Typography variant="body2" color="#000" fontStyle="italic" fontSize="15px"><br />
                                                    Price: $9.99
                                                </Typography>

                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary" onClick={handleOpen} >
                                                Preview itinerary
                                            </Button>
                                            <Button size="small" color="primary" sx={{ paddingLeft: "65px" }} onClick={getCheckoutSession("prod_M3gSPAjSf4ey64")}>Buy Now</Button>
                                            <ModalIceland
                                                aria-labelledby="iceland-modal-title"
                                                aria-describedby="iceland-modal-description"
                                                open={open}
                                                onClose={handleClose}
                                                BackdropComponent={Backdrop}
                                                BackdropProps={{
                                                    timeout: 500,
                                                }}
                                                sx={{
                                                    zIndex: 1
                                                }}
                                            >
                                                <Fade in={open} >
                                                    <Box sx={style}>
                                                        <Typography id="iceland-modal-title" variant="h6" component="h2">
                                                            Travel to Iceland
                                                        </Typography><br />

                                                        <Button
                                                            sx={{
                                                                width: 50,
                                                                height: 50,
                                                                color: 'black',
                                                                position: 'absolute',
                                                                right: '5px',
                                                                top: '5px',
                                                            }}
                                                        >
                                                            <CloseIcon onClick={handleClose} />
                                                        </Button>

                                                        <ReactPhotoCollage
                                                            sx={{
                                                                zIndex: 9999
                                                            }}{...iceland} >
                                                        </ReactPhotoCollage>

                                                        <div className="book-text2">
                                                            <Button
                                                                onClick={getCheckoutSession("prod_M3gSPAjSf4ey64")}
                                                                variant="contained" style={{
                                                                    backgroundColor: "#00aaca", padding: "10px 55px",
                                                                    marginTop: "27px",
                                                                    borderRadius: "10px",
                                                                    color: "white",
                                                                    fontSize: "15px"
                                                                }}>Buy Now</Button>
                                                        </div>
                                                    </Box>
                                                </Fade>
                                            </ModalIceland>
                                        </CardActions>
                                    </Card>
                                </div>


                            </div>

                        </Box>
                    </Grid>
                </Grid>
            </Fade>
        </Grid >
    );
}

export default Influencer;