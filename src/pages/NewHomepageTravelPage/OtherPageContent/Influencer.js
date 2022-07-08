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
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { ReactPhotoCollage } from "react-photo-collage";
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

import Iceland from "./images/Iceland.jpg";
import Bermuda from "./images/Bermuda.jpg";
import Italy from "./images/Italy.jpg";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 620,
    height: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const setting = {
    width: "560px",
    height: ["250px", "250px"],
    layout: [2, 2],
    photos: [
      {
        source:
          "https://images.unsplash.com/photo-1517088455889-bfa75135412c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5548929376f93d8b1b7a21097df03bd&auto=format&fit=crop&w=749&q=80"
      },
      {
        source:
          "https://images.unsplash.com/photo-1526656892012-7b336603ed46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31c8e58b58c25dfcc18452ed29b52951&auto=format&fit=crop&w=334&q=80"
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
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles()
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

                        <div class="flexbox-container">

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

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={handleOpen} >
                            view image gallery
                            </Button>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
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
                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                   Travel to Iceland
                                    </Typography>

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
                                }}{...setting } >
                                </ReactPhotoCollage>
                                    
                                </Box>
                                </Fade>
                            </Modal>
                        </CardActions>
                        </Card>
                        </div>

                        {/* /Bermuda/ */}

                        <div>
                        
                        <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="350"
                            src={Bermuda}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Bermuda
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            view image gallery
                            </Button>
                        </CardActions>
                        </Card>
                        </div>

                        {/* /Italy/ */}

                        <div>
                        
                        <Card sx={{ maxWidth: 400}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="350"
                            src={Italy}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Italy
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            view image gallery
                            </Button>
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