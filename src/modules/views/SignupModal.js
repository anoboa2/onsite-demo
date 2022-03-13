import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import MuiModal from '@mui/material/Modal';
import MuiFade from '@mui/material/Fade';
import TextField from '../components/TextField';
import Button from '../components/Button';
import Typography from '../components/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { useRownd } from '@rownd/react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs: 300, sm: 500, },
  height: {xs: '80%', sm: 550, },
  bgcolor: 'background.paper',
  borderRadius: 2,
  display: 'flex',
  flexDirection: 'column',
  p: 4,
};

function SignupModal(props) {
  const { user } = useRownd();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (name, value) => {
    window.rownd.user.setValue(name, value);
  }


  return (
    <Box>
      <Button
        id="button-modal-trigger"
        variant="contained"
        color="secondary"
        onClick={handleOpen}
      >
        {'Book Now'}
      </Button>
      <MuiModal
        id="sign-up-modal"
        open={open}
        onClose={handleClose}
      >
        <Box component="form" sx={style}>
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
            <CloseIcon onClick={handleClose}/>  
          </Button>
          <Typography id="sign-up-prompt-text" variant="h6">
            {'One more thing...'}
          </Typography>
          <Typography id="sign-up-prompt-description" variant="body1">
            {'We are excited to have you book with us! We will need to gather a few more details to complete your booking request.'}
          </Typography>
          <TextField 
            id="first-name-modal-input"
            label="First Name"
            placeholder="First Name"
            variant="filled"
            onChange={(evt) => handleInputChange('first_name', evt.target.value)}
            value={user.data.first_name}
            required
            sx={{ my: 1, }}
          />
          <TextField
            id="last-name-modal-input"
            label="Last Name"
            placeholder="Last Name"
            variant="filled"
            onChange={(evt) => handleInputChange('last_name', evt.target.value)}
            value={user.data.last_name}
            required
            sx={{ my: 1, }}
          />
          <TextField
            id="email-modal-input"
            label="Email"
            placeholder="Enter your email"
            variant="filled"
            type="email"
            onChange={(evt) => handleInputChange('email', evt.target.value)}
            value={user.data.email}
            required
            sx={{ my: 1, }}
          />
          <Button
            id="button-modal-submit"
            variant="contained"
            color="secondary"
            type="submit"
            sx={{ my: 2, }}
          >
            {'Submit'}
          </Button>
        </Box>
      </MuiModal>
    </Box>
  );
}

export default SignupModal;