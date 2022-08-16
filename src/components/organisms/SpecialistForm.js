import { useState } from 'react';
import { Box, Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Grid, Input, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';
import SpecialistResult from './SpecialistResult';

const formTheme = createTheme({
  palette: {
    primary: {
      light: '#16B3B2',
      main: '#0FAACD',
      dark: '#1e1e1f',
      contrastText: 'rgba(0,0,0,0.8)',
    },
    secondary: {
      light: '#21c37e',
      main: '#27cc62',
      dark: '#16b3b2',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
    text: {
      primary: 'rgba(0,0,0,0.92)',
      secondary: 'rgba(0,0,0,0.69)',
      disabled: 'rgba(0,0,0,0.48)',
      hint: 'rgba(0,0,0,0.48)',
    },
    neutral: {
      light: '#fbfbfb',
      main: '#fafafa',
      dark: '#e6edf0',
      disabled: '#afafaf',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
          backgroundColor: '#0FAACD',
          '&:hover': {
            backgroundColor: '#16B3B2',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        margin: 'normal',
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
        }
      }
    },
    MuiFormControl: {
      defaultProps: {
        variant: 'outlined',
        margin: 'normal',
        fullWidth: true,
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: { backgroundColor: '#FFFFFF', boxShadow: 'inset 0px 2px 3px #dddddd' },
        }
      ]
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '13px',
          fontFamily: "sans-serif",
          color: 'rgba(0,0,0,0.78)',
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins",
          fontWeight: 900,
          fontSize: '14px',
        }
      }
    },
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          paddingLeft: '20px',
        }
      }
    },
    MuiInputLabel: {
      defaultProps: {
        disableAnimation: true,
        shrink: true,
      },
      styleOverrides: {
        root: {
          marginTop: '-12px',
          fontFamily: "Poppins",
          fontWeight: 900,
          fontSize: '18px',
        }
      }
    },
  }
});

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  destination: '',
  dates: '',
  planningState: '',
  age: ''
}

const formStyle = {
  backgroundColor: 'rgba(33, 195, 126, 0.13)',
  borderRadius: '10px',
  width: '80%',
  minWidth: '500px',
  mx: 'auto',
  my: 0,
  p: 7,
  boxShadow: "12px 12px 45px rgba(0,0,0,.1)"
}

const TravelSpecialistForm = () => {
  const [values, setValues] = useState(defaultValues);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    // make fetch request to backend
    setIsLoading(true);
    console.log(values);
    fetch('https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/booking/submitrequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(res => console.log(res))
      .then(data => {
        setTimeout(setIsLoading(false), 5000);
        setIsSubmitted(true);
      })
  }

  return (
    <ThemeProvider theme={formTheme}>
      {isSubmitted ? (
        <SpecialistResult />
      ) : (
        <Box id="specialist-form" component="form" onSubmit={handleSubmit} sx={{ mt: 10 }}>
          <Grid container spacing={3} sx={formStyle}>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" required>
                <InputLabel htmlFor="first-name-input">First Name</InputLabel>
                <Input id="first-name-input" name="firstName" value={values.firstName} onChange={handleInputChange} />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" required>
                <InputLabel htmlFor="last-name-input">Last Name</InputLabel>
                <Input id="last-name-input" name="lastName" value={values.lastName} onChange={handleInputChange} />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" required>
                <InputLabel htmlFor="email-input">Email</InputLabel>
                <Input id="email-input" name="email" type='email' value={values.email} onChange={handleInputChange} />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" required>
                <InputLabel htmlFor="phone-number-input">Phone Number</InputLabel>
                <Input id="phone-number-input" name="phoneNumber" type='tel' pattern="^(\+?1[ -]?)?\(?[2-9]\d\d\)?[ -]?[2-9]\d\d[ -]?\d{4}$" value={values.phoneNumber} onChange={handleInputChange} />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" required>
                <InputLabel htmlFor="destination-input">Where would you like to go?</InputLabel>
                <Input id="destination-input" name="destination" value={values.destination} onChange={handleInputChange} />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" required>
                <InputLabel htmlFor="dates-input">When are you planning to travel?</InputLabel>
                <Input id="dates-input" name="dates" value={values.dates} onChange={handleInputChange} />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" required>
                <InputLabel htmlFor="age">What is your age?</InputLabel>
                <Select id="age" name="age" variant="standard" align="left" value={values.age} onChange={handleInputChange}>
                  <MenuItem value={'18-25'}>18-25</MenuItem>
                  <MenuItem value={'26-35'}>26-35</MenuItem>
                  <MenuItem value={'36-45'}>36-45</MenuItem>
                  <MenuItem value={'46-55'}>46-55</MenuItem>
                  <MenuItem value={'56-65'}>56-65</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={8}>
              <FormControl component="fieldset" variant="standard" required>
                <FormLabel id="planning-state-selector" align="left" sx={{ pl: 2 }}>How much have you already planned?</FormLabel>
                <RadioGroup aria-label="planning-state-selector" name="planningState" value={values.planningState} onChange={handleInputChange} align="left">
                  <FormControlLabel key="not-started" value="not-started" control={<Radio />} label="I haven't even started" />
                  <FormControlLabel key="partially-started" value="partially-started" control={<Radio />} label="I have a few things planned but still have a lot to go" />
                  <FormControlLabel key="almost-done" value="almost-done" control={<Radio />} label="The important stuff is booked but I need to plan the itinarary" />
                </RadioGroup>
              </FormControl>
            </Grid> 
            <Grid item xs={12}>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <Button
                type='submit'
                variant='contained'
                color='primary'
                sx={{ borderRadius: '12px' }}
              >
                Match With Your Travel Specialist
              </Button>
            )}
            </Grid>
          </Grid>
        </Box>
      )}
    </ThemeProvider>
  );
}

export default TravelSpecialistForm;