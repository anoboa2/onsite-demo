import { makeStyles } from "@mui/styles";
import { Grid , Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
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

import Iceland from "./images/Iceland.jpg";
import Paris from "./images/Paris.jpg";
import Italy2 from "./images/Italy2.JPG";

import './CardInfluencer.css';


const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 622,
    height: 660,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };


  const style3 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 622,
    height: 660,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };


  const iceland = {
    width: "560px",
    height: ["235px", "235px"],
    layout: [2, 2],
    photos: [
      {
        source:
          "https://images.unsplash.com/photo-1531168556467-80aace0d0144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        source:
          "https://images.unsplash.com/photo-1489593426629-5e4e00ce821c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aWNlbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        source:
          "https://images.unsplash.com/photo-1521024221340-efe7d7fa239b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ad8a99d809d3fa3a9e8dff3ecc81878&auto=format&fit=crop&w=750&q=80"
      },
      {
        source:
          "https://images.unsplash.com/photo-1517088455889-bfa75135412c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5548929376f93d8b1b7a21097df03bd&auto=format&fit=crop&w=749&q=80"
      },
      {
        source:
          "https://images.unsplash.com/photo-1517088455889-bfa75135412c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5548929376f93d8b1b7a21097df03bd&auto=format&fit=crop&w=749&q=80"
      }
      
    ],
    showNumOfRemainingPhotos: true
  };


  const paris = {
    width: "560px",
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
    width: "560px",
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
        [theme.breakpoints.down("sm")]: {

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
    boxone: {
        display: "flex",
        marginTop: " -30% !important",
        marginBottom: " 3% !important",
        flexDirection: "row !important",
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
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

})) 

const Influencer = () => {
    const [open, setOpen] = React.useState(false);
    const [openItaly, setOpenItaly] = React.useState(false);
    const [openParis, setOpenParis] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
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
    
    return (
        <Grid mb={5} pl={4} pr={4} pt={5}>
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
                    </Grid>
                    <Grid item xs={12} width={"100%"} marginTop={"-5%"} >
                        <Box className={classes.item} width={"100%"} sx={{ mt: 8, display: 'flex', justifyContent: 'center'}}>

                     <div class="flexbox-container2">
                        
                        {/* /Paris/ */}

                        <div>
                        
                        <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="350"
                            src={Paris}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Paris
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                            add small description of the place or module
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={handleOpenParis}>
                            Preview itinerary
                            </Button>
                            <Button size="small" color="primary" sx={{paddingLeft:"65px"}}>Buy Now</Button>
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
                                <Box sx={style3}>
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
                                    zIndex: 9999
                                }}{...paris } >
                                </ReactPhotoCollage>

                                <div className="book-text2">
                                <Button href="/booking"
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
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Italy
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                            add small description of the place or module
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={handleOpenItaly} >
                            Preview itinerary
                            </Button>
                            <Button size="small" color="primary" sx={{paddingLeft:"65px"}}>Buy Now</Button>
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
                                <Box sx={style3}>
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
                                }}{...italy } >
                                </ReactPhotoCollage>

                                <div className="book-text2">
                                <Button href="/booking"
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
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Iceland
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                            add small description of the place or module
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={handleOpen} >
                            Preview itinerary
                            </Button>
                            <Button size="small" color="primary" sx={{paddingLeft:"65px"}}>Buy Now</Button>
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
                                <Box sx={style1}>
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
                                }}{...iceland } >
                                </ReactPhotoCollage>

                                <div className="book-text2">
                                <Button href="/booking"
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