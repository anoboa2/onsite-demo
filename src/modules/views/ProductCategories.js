import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Typography from '../components/Typography';

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
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
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
    url: '/img/miami.jpg',
    title: 'Miami',
    width: '50%',
    pdf: '/img/miami-01.png',
  },
  {
    url: '/img/new-york-city.jpg',
    title: 'New York City',
    width: '50%',
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

export default function ProductCategories() {
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
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        We arrange the best
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap',}}>
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
    </Container>
  );
}
