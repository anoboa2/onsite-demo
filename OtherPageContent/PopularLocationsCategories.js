import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Typography from '../../../modules/components/Typography';
import { Grid } from '@mui/material';
import { Fade } from 'react-reveal';
import { makeStyles } from '@mui/styles';

const style = {
    position: 'absolute',
    top: '2%',
    left: '25%',
    width: "50%",
    overflow: 'scroll',
};


const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 50,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    marginLeft: 70,
    height: '40vh',
    [theme.breakpoints.down('md')]: {
        width: '100% !important',
        height: 100,
        marginTop: "20px !important",
    },
    '&:hover': {
        zIndex: 1,
    },
    '&:hover .imageBackdrop': {
        opacity: 0.15,
    },
    '&:hover .imageMarked': {
        opacity: 0,
    },
    '&:hover .imageTitle': {
        border: '4px solid currentColor',
        borderRadius: 10,
    },
    '& .imageTitle': {
        position: 'relative',
        padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    '& .imageMarked': {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

const images = [
    {
        url: '/img/miami.webp',
        title: 'Miami',
        width: '100%',
        pdf: '/img/miami-01.png',
    },
    {
        url: '/img/new-york-city.webp',
        title: 'New York City',
        width: '100%',
        pdf: '/img/nyc-01.png',
    },
    // {
    //   url: '/img/iceland.jpg',
    //   title: 'Iceland',
    //   width: '40%',
    //   pdf: '/docs/iceland-2021-7-day-itinerary.pdf',
    // },
    // {
    //   url: '/img/orlando.jpg',
    //   title: 'Orlando',
    //   width: '60%',
    //   pdf: '/docs/universal-studios-florida-itinerary-lauren.pdf',
    // },
];
const useStyles = makeStyles((theme) => ({
    item: {
        marginLeft: "3% !important",
        [theme.breakpoints.down("md")]: {
            display: 'flex',
            flexDirection: 'column !important',
            width: "70% !important",
            marginLeft: "10% !important"
        },
        [theme.breakpoints.down("sm")]: {
            display: 'flex',
            flexDirection: 'column !important',
            width: "70% !important",
            marginLeft: "-5% !important",
        },
    },
    typography: {
        marginLeft: "20px !important",
        borderBottom: "3px solid #0FAACD",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "10px !important",
            borderBottom: "none !important",
            fontSize: "20px !important",
            marginLeft: "5% !important",
        }
    },
    typography1: {
        borderBottom: "3px solid #0FAACD",
        [theme.breakpoints.down("sm")]: {

            borderBottom: "none !important",
            fontSize: "15px !important",
            fontWeight: "lighter !important",
        }
    },
    maintypography: {
        [theme.breakpoints.down("sm")]: {

            borderBottom: "none !important",
            fontSize: "20px !important",
        }
    },
    maintypography1: {
        [theme.breakpoints.down("md")]: {
            marginLeft: "-8% !important",
            borderBottom: "none !important",
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: " 3% !important",
            borderBottom: "none !important",
            fontSize: "15px !important",
            fontWeight: "lighter !important",
        }
    },
    boxone: {
        display: "flex",
        flexDirection: "row !important",
        marginLeft: " 35% !important",
        [theme.breakpoints.down("md")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
            marginLeft: "25% !important",
        },
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
            marginLeft: "20% !important",
        },
    },
    boxtwo: {
        display: "flex",
        flexDirection: "row !important",
        marginLeft: " 35% !important",
        [theme.breakpoints.down("md")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
            marginLeft: " 30% !important",
        },
        [theme.breakpoints.down("sm")]: {
            borderBottom: "none !important",
            fontSize: "20px !important",
            marginLeft: " 5% !important",
        }
    },

}))

export default function PopularLocationCategories() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const [pdf, setPdf] = React.useState(null)

    const handleOpen = (image) => {
        setOpen(true);
        setPdf(image.pdf)
    }
    const handleClose = () => {
        setOpen(!open);
    }

    return (
        <Grid mb={5} pl={4} pr={4} pt={5}>
            <Fade bottom>
                <Grid >
                    <Grid item xs={12}>
                        <Box className={classes.boxone}>
                            <Typography className={classes.maintypography} variant="h4" align="center" component="h2" >
                                We arrange the
                            </Typography>
                            <Typography variant='h4' display="inline-block" color="primary.main" className={classes.typography} >  best</Typography>
                        </Box>
                        <Box className={classes.boxtwo}>
                            <Typography className={classes.maintypography1} variant="h6" align="center" component="h2" >
                                Check out some of our popular trips below
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid >
                        <Box className={classes.item} width={1200} sx={{ mt: 6, display: 'flex', borderRadius: 50, }}>
                            {images.map((image) => (
                                <ImageIconButton
                                    key={image.title}
                                    onClick={() => handleOpen(image)}
                                    style={{
                                        width: image.width,

                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            left: 0,
                                            right: 0,
                                            top: 0,
                                            bottom: 0,
                                            borderRadius: 12,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center 40%',
                                            backgroundImage: `url(${image.url})`,
                                        }}
                                    />
                                    <ImageBackdrop className="imageBackdrop" />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            left: 0,
                                            right: 0,
                                            top: 0,
                                            bottom: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'common.white',
                                        }}
                                    >
                                        <Typography
                                            component="h3"
                                            variant="h6"
                                            color="inherit"
                                            className="imageTitle"
                                        >
                                            {image.title}
                                            <div className="imageMarked" />
                                        </Typography>
                                    </Box>
                                </ImageIconButton>
                            ))}
                            <Modal sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, overflow: 'scroll' }} open={open} onClick={handleClose}>
                                <Box
                                    component="img"
                                    src={pdf}
                                    sx={style}
                                    onClick="null"
                                >
                                </Box>
                            </Modal>
                        </Box>
                    </Grid>
                </Grid>
            </Fade>
        </Grid >
    );
}
