import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Grid, Typography , Button , TextField, Modal} from '@mui/material';
import { useParams } from 'react-router-dom';
import StickyBox from "react-sticky-box";
import CloseIcon from '@mui/icons-material/Close';
import theme from '../theme';
import './StickyMobile.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  backgroundColor: theme.palette.neutral.main,
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 100,
  boxShadow: 24,
  p: 4,
  visibility:{sm: "hidden"}
};

const StickySpecialistMobile= () => {
  const { id } = useParams();
  const [ values, setValues ] = useState({ destination: '' });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/marketing/requestdestination', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...values, id})
    })
      .then(res => console.log(res))
      .then(data => {
        console.log(data);
      })
  }

  return (
    <StickyBox className="stickyContentBottom" >
    <Grid container spacing={{ xs: 1, sm: 3 }}>
      <Grid item xs={12}>
        <Typography variant='h6' align='center'> Don't see a destination that you're looking for? Enter it below and one of our specialists will get back to you </Typography>
      </Grid>
      <Grid item xs={12} align="center">
      <Button
      variant="contained"
      color="primary"
      onClick={handleOpen}
    >
      Contac Us
    </Button>,
      </Grid>
    </Grid>
      <Modal
      sx={style}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form onSubmit={handleSubmit}>
        <TextField
        id="modal-modal-title"
        name="destination"
        type="text"
        placeholder="Enter your destination"
        margin="normal"
        variant="standard"
        value={values.destination}
        onChange={handleInputChange}
        fullWidth
        InputProps={{ disableUnderline: true }}
        sx={{ backgroundColor: 'white', borderRadius: { xs: '12px', sm: '10px 0px' }, height: 40, mt: 3, pl: 2, justifyContent: "center" }}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ borderRadius: { xs: '12px', sm: "0px 10px 10px 0px" }, height: 40 }}>
      Submit
      </Button>  
      <Button onClick={() => setOpen(false)}
          sx={{
            width: 50,
            height: 50,
            color: '#fff',
            position: 'absolute',
            right: '5px',
            top: '5px',
        }}
          >
            <CloseIcon />
          </Button>
    </form>
  
    </Modal>
  </StickyBox>
  );
}

export default StickySpecialistMobile;