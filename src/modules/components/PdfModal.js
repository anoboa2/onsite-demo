import * as React from 'react';
// import { styled } from '@mui/material/styles';
import { Document, Page } from 'react-pdf';
import MuiModal from '@mui/material/Modal';
import MuiFade from '@mui/material/Fade';

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

function PdfModal(pdfFile) {
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
      <MuiModal
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
        <MuiFade in={open}>
          <Box sx={style}>
              <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} />
              </Document>
              <p>Page {pageNumber} of {numPages} </p>
          </Box>
        </MuiFade>
      </MuiModal>
    </div>
  );
}

export default PdfModal;