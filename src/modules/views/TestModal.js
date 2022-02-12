import * as React from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import workerFilePath from 'pdfjs-dist/build/pdf.worker.min.js';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

pdfjs.GlobalWorkerOptions.workerSrc = workerFilePath

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
            <Document file='/docs/miami.pdf' onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
            </Document>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}