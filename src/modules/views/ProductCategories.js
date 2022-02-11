import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Document, Page } from 'react-pdf';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import PdfModal from '../components/PdfModal';
import Typography from '../components/Typography';

const style = {
  position: 'absolute',
  top: '10%',
  left: '20%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
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
    url: '/img/los-cabos.jpg',
    title: 'Los Cabos',
    width: '60%',
    pdf: '/docs/miami.pdf',
  },
  {
    url: '/img/key-west.jpg',
    title: 'Florida Keys',
    width: '40%',
    pdf: '/docs/nyc.pdf',
  },
  {
    url: '/img/iceland.jpg',
    title: 'Iceland',
    width: '40%',
    pdf: '/docs/nyc.pdf',
  },
  {
    url: '/img/orlando.jpg',
    title: 'Orlando',
    width: '60%',
    pdf: '/docs/miami.pdf',
  },
];

export default function ProductCategories() {
  const [open, setOpen] = React.useState(false);
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
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
            onClick={handleOpen}
            style={{
              width: image.width,
            }}
          >
          <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Document file={image.pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
              </Box>
            </Fade>
          </Modal>
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
      </Box>
    </Container>
  );
}
