import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const EmailSubscribeButton = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    fetch('https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/marketing/subscribeemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      })
      // write a promise to handle the response
    }).then(response => {
      if (response.ok) {
        setIsSubmitted(true);
        return response.json();
      }
      throw new Error('Network response was not ok.');
    });
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "row", width: 500, alignItems: "center" }}>
      {isSubmitted ? 
        <Typography>Thanks for subscribing!</Typography>
        :
        <>
          <TextField
            name="email"
            type="email"
            placeholder="Enter your email"
            margin="normal"
            variant="standard"
            fullWidth
            InputProps={{ disableUnderline: true }}
            sx={{ backgroundColor: 'white', borderRadius: '10px 0px 0px 10px', height: 50, mt: 1, pl: 2, justifyContent: "center" }}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ borderRadius: "0px 10px 10px 0px", height: 50 }}>
            Subscribe
          </Button>
        </>
      }

      </Box>
    </Box>
  );
  };

export default EmailSubscribeButton;
