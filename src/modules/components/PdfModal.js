import * as React from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import MuiModal from '@mui/material/Modal';
import MuiFade from '@mui/material/Fade';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  p: 4,
};

function PdfModal(props) {
  // const [open, setOpen] = React.useState(false);
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
  }
  const { pdf, open, close } = props;

  return (
    <div>
      <MuiModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 30,
        }}
      >
        <Box sx={style}>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} options={{ cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps`, cMapPacked: true, }}>
                <Page pageNumber={pageNumber} />
            </Document>
            {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
        </Box>
      </MuiModal>
    </div>
  );
}

export default PdfModal;