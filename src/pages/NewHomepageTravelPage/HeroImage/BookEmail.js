import { Alert, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import Typography from '../../../modules/components/Typography';
import '../OtherPageContent/BookNow.css';
import './HeroImage.css';
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
    item: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down("sm")]: {
        }
    },
    typographyone: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px !important",
            whiteSpace: "break-spaces"
        }
    },
    typographytwo: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px !important",
        }
    },
}))

const FormGroup = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 53px;
  margin-top: 6.5em;
  
`;

const EmailInput = styled.input`
  outline: none;
  border: none;
  background-color: #fff;
  padding-left: 1.5em;
  padding-right: 3em;
  border-radius: 17px;
  font-family: "Kumbh Sans", sans-serif;
  font-size: 20px;
  color: #000;
  height: 100%;
  &::placeholder {
    color: #272727;
  }
`;

const SubscribeButton = styled.button`
  position: absolute;
  right: -15px;
  top: 0;
  height: 100%;
  border: none;
  outline: none;
  color: #fff;
  background-color: #00AACA;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;
  padding: 0 10px;
  &:hover {
    background-color: #0FAACD;
  }
`;


const BookEmail = () => {
    const classes = useStyles()
    const [email, setEmail] = useState("")
    const [isSubscribed, setIsSubscribed] = useState(false);

    const subscribe = async () => {
        if (!isSubscribed) {
            let url = 'https://ye5ivlf9ce.execute-api.us-east-1.amazonaws.com/prod/';
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(response => response.json())
                .then((response) => {
                    if (response.statusCode === 200) {
                        setEmail("")
                        setIsSubscribed(true)
                    }
                    else {
                        setIsSubscribed(false)
                    }
                });
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsSubscribed(false)
    };
    return (
        <Fade bottom>
            <Grid className={classes.item}>
                <div className="book-image">

                    <Box className="book-text">
                        <Typography className={classes.typographyone} marginBottom="95px" variant="h4">
                            Not Ready to Book Yet? We’ll keep you informed with all our latest travel updates
                        </Typography >
                        {/* <Typography className={classes.typographytwo} marginBottom="40px" variant="h5">
                            Your next trip to NYC or Miami is a few clicks away
                        </Typography> */}
                    </Box>

                    <Box className="book-text">
                        {isSubscribed ?
                            <FormGroup>
                                <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
                                    Subscribed successfully
                                </Alert>
                            </FormGroup>
                            :
                            <FormGroup>
                                <EmailInput onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="name@email.com" method="POST" />
                                <SubscribeButton onClick={subscribe} >{isSubscribed ? "Subscribed" : "Subscribe"}</SubscribeButton>
                            </FormGroup>
                        }
                    </Box>
                </div>
            </Grid>
        </Fade>
    );
}

export default BookEmail;
