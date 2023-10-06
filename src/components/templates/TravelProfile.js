import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Alert, Button, Box, Checkbox, CircularProgress, FormControlLabel, FormGroup, IconButton, Input, InputLabel, MenuItem, Rating, Select, Snackbar, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useRownd } from '@rownd/react';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import ProfileOptions from '../../content/ProfileOptions';

const TravelProfile = () => {
  const [isBooking, setIsBooking] = useState(false)
  const { is_initializing, user } = useRownd();
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    domestic_flight: [],
    int_flight: [],
    primary_airport: "",
    seating: [],
    lodging_rating: 0,
    bed: [],
    room_amenities: [],
    dietary: [],
  }
  const [state = { notLoaded: true }, setState] = useState(null);
  const [values, setValues] = useState(initialValues)
  const [openAlert, setOpenAlert] = useState(false)
  const [openFailureAlert, setOpenFailureAlert] = useState(false)
  const [hasLoadedUserData, setHasLoadedUserData] = useState(false);
  const [value, setValue] = React.useState(new Date());
  const [loading, setLoading] = React.useState(false);
  const search = useLocation().search;


  useEffect(() => {
    const source = new URLSearchParams(search).get("source");
    if (source === 'booking') {
      setIsBooking(true)
    }
  }, [])

  useEffect(() => {
    setState(useRownd.is_authenticated)
    if (!is_initializing && !hasLoadedUserData) {
      setValues({
        ...values,
        ...user.data,
        ...useRownd.is_authenticated,
        ...useRownd.is_initializing,
      })
      setHasLoadedUserData(true);
      if (!state) {
        return <ErrorComponent />
      }
    }
  }, [hasLoadedUserData, is_initializing, user.data, values])


  const ErrorComponent = () => <div> Please contact admin </div>

  function handleChange(name, value, list = false, checked = false) {
    if (list) {
      if (checked) {
        const copyOflist = values[name];
        copyOflist.push(value);
        setValues({
          ...values,
          [name]: copyOflist,
        })
      } else {
        const copyOflist = values[name];
        const index = copyOflist.indexOf(value);
        copyOflist.splice(index, 1);
        setValues({
          ...values,
          [name]: copyOflist,
        })
      }
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
    setOpenFailureAlert(false);
    setIsBooking(false);
  };

  const handleFileUpload = async (event) => {
    await window.rownd.user.uploadFile('photo', event.target.files[0]);
    // handleChange('photo', event.target.value)
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (is_initializing) return;
    setLoading(true)
    try {
      setValues({
        ...values,
        ...user.data,
      })
      await window.rownd.user.set(values)

      setOpenAlert(true);

      let url = 'https://5gftr5ytwb.execute-api.us-east-1.amazonaws.com/prod'
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(response => response.json())

      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (error) {
      setOpenFailureAlert(true);
      window.scrollTo({ top: 0, behavior: "smooth" })
    } finally {
      setLoading(false)
    }
  };

  return (
    <div>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '90%', mt: '7%', mx: 'auto', }}>
        <Grid container spacing={2} sx={{ mb: 4, justifyContent: 'center' }}>
          <Grid xs={12} sm={6} sx={{ opacity: 0.8, width: '100%', height: '30%', position: 'relative', borderRadius: 2, boxShadow: 2, mb: 'theme.spacing(5)' }}>
            {/* NEED TO TERNARY OPERATOR FOR IF NAMES ARE BLANK */}
            {/* <Avatar name={values.first_name} /> */}
            <Box component="div" sx={{ display: 'flex', flexDirection: 'column', px: 2, py: 5, maxWidth: '100vw', justifyItems: 'center', alignItems: 'center', justifyContent: 'left' }}>
              <Typography variant="h2" marked="center" align="center" sx={{ mb: 5 }}>
                Personal Information
              </Typography>
              <Box component="div" sx={{ maxWidth: "70%" }}>
                <Box component="div" sx={{ display: 'flex', width: '100%' }}>
                  <InputLabel htmlFor="contained-button-file">
                    <IconButton sx={{ m: 0, spacing: 3, width: "86px", height: "86px", border: 1}}>
                      <Box component="img" width="86px" height="86px" data-rownd-field-mapping="photo" alt="pic" />
                    </IconButton>
                  </InputLabel>
                  <Input accept="image/*" id="contained-button-file" onChange={(e) => handleFileUpload(e)} multiple type="file" />
                </Box>
                <InputLabel id="profile-first-name-label">
                  First Name
                </InputLabel>
                <TextField id="profile-first-name-input" variant="filled" value={values.first_name} onChange={(e) => handleChange('first_name', e.target.value)} sx={{ minWidth: '90%', marginBottom: "15px" }} />
                <InputLabel id="profile-last-name-label">
                  Last Name
                </InputLabel>
                <TextField id="profile-last-name-input" variant="filled" value={values.last_name} onChange={(e) => handleChange('last_name', e.target.value)} sx={{ minWidth: '90%', marginBottom: "15px" }} />
                <InputLabel id="profile-email-label">
                  Email
                </InputLabel>
                <TextField id="profile-email-input" variant="filled" value={values.email} onChange={(e) => handleChange('email', e.target.value)} sx={{ minWidth: '90%', marginBottom: "15px" }} />
                <InputLabel id="profile-email-label">
                  Phone Number
                </InputLabel>
                <TextField id="profile-phone-number-input" variant="filled" value={values.phone_number} onChange={(e) => handleChange('phone_number', e.target.value)} sx={{ minWidth: '90%', marginBottom: "15px" }} />
                <InputLabel id="profile-email-label">
                  Date of Birth
                </InputLabel>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker inputLabel="Date of Birth" value={moment(value)} onChange={ (newValue) => {setValue(newValue);} } renderInput={(params) => <TextField {...params} />} />
                </LocalizationProvider>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} sm={6} sx={{ opacity: 0.8, width: '100%', height: '30%', position: 'relative', borderRadius: 2, boxShadow: 2, mb: 'theme.spacing(5)' }}>
            <Box component="div" sx={{ display: 'flex', flexDirection: 'column', px: 2, py: 5, maxWidth: '100vw', justifyItems: 'center', alignItems: 'center', justifyContent: 'left' }}>
              <Typography variant="h2" marked="center" align="center" sx={{ mb: 5 }}>
                Transportation
              </Typography>
              <Box component="div" sx={{ maxWidth: "70%" }}>
                <InputLabel id="profile-domestic-flight-label">
                  How do you typically like to fly domestically?
                </InputLabel>
                <Select id="profile-domestic-flight-input" value={values.domestic_flight} onChange={(e) => handleChange("domestic_flight", e.target.value)} sx={{ minWidth: '90%', mb: "15px" }}>
                {ProfileOptions.Flight.map((option) => {
                  return (
                    <MenuItem key={option} value={option} onChange={(e) => handleChange('domestic_flight', e.target.value)}>
                      {option}
                    </MenuItem>
                  )
                })}
                </Select>
                <InputLabel id="profile-int-flight-label">
                  How do you typically like to fly internationally?
                </InputLabel>
                <Select id="profile-int-flight-input" value={values.int_flight} onChange={(e) => handleChange('int_flight', e.target.value)} sx={{ minWidth: '90%', mb: "15px" }}>
                {ProfileOptions.Flight.map((option) => {
                  return (
                    <MenuItem key={option} value={option} onChange={(e) => handleChange('domestic_flight', e.target.value)}>
                      {option}
                    </MenuItem>
                  )
                })}
                </Select>
                <InputLabel id="profile-primary-airport-label">
                  Please enter your preferred Airport for Departure
                </InputLabel>
                <TextField id="profile-primary-airport-input" value={values.primary_airport} onChange={(e) => handleChange('primary_airport', e.target.value)} sx={{ minWidth: '90%', mb: "15px" }} />
                <InputLabel id="profile-seating-label">
                  Please select your preferred flight seating
                </InputLabel>
                <FormGroup id="profile-seating-select" value={values.seating}>
                {ProfileOptions.Seating.map((option) => {
                  return (
                    <FormControlLabel key={option} onChange={(e) => handleChange('seating', option, true, e.target.checked)} control={<Checkbox value={option.value} checked={values.seating.includes(option)} />} label={option}>
                      {option}
                    </FormControlLabel>
                  )
                })}
                </FormGroup>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} sm={6} sx={{ opacity: 0.8, width: '100%', height: '30%', position: 'relative', borderRadius: 2, boxShadow: 2, mb: 'theme.spacing(5)' }}>
            <Box component="div" sx={{ display: 'flex', flexDirection: 'column', px: 2, py: 5, maxWidth: '100vw', justifyItems: 'center', alignItems: 'center', justifyContent: 'left' }}>
              <Typography variant="h2" marked="center" align="center" sx={{ mb: 10, }}>
                Lodging
              </Typography>
              <Box component="div" sx={{ maxWidth: "70%" }}>
                <Box>
                  <InputLabel id="profile-lodging-label">
                    Select your lodging rating preference
                  </InputLabel>
                  <Box component="div" sx={{ display: 'flex', alignItems: 'center', mb: "15px" }}>
                    <Rating id="profile-lodging-rating" value={values.lodging_rating} onChange={(e) => handleChange('lodging_rating', Number(e.target.value))} />
                    <Box sx={{ ml: 2 }}>
                      (1-5 Stars)
                    </Box>
                  </Box>
                  <InputLabel id="profile-bed-label">
                    Select your bed preference
                  </InputLabel>
                  <FormGroup id="profile-bed-select" value={values.bed} sx={{ mb: "15px" }}>
                  {ProfileOptions.Bed.map((option) => {
                    return (
                      <FormControlLabel key={option} onChange={(e) => handleChange('bed', e.target.value, true, e.target.checked)} control={<Checkbox value={option} checked={values.bed.includes(option)} />} label={option}>
                        {option}
                      </FormControlLabel>
                    )
                  })}
                  </FormGroup>
                  <InputLabel id="profile-room-amenities-label">
                    Select your preferred room features
                  </InputLabel>
                  <FormGroup id="profile-room-amenities-select" value={values.room_amenities} sx={{ mb: "15px" }}>
                  {ProfileOptions.Room.map((option) => {
                    return (
                      <FormControlLabel key={option} onChange={(e) => handleChange('room_amenities', e.target.value, true, e.target.checked)} control={<Checkbox value={option} checked={values.room_amenities.includes(option)} />} label={option}>
                        {option}
                      </FormControlLabel>
                    )
                  })}
                  </FormGroup>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} sm={6} sx={{ opacity: 0.8, width: '100%', height: '30%', position: 'relative', borderRadius: 2, boxShadow: 2, mb: 'theme.spacing(5)' }}>
            <Box component="div" sx={{ display: 'flex', flexDirection: 'column', px: 2, py: 5, maxWidth: '100vw', justifyItems: 'center', alignItems: 'center', justifyContent: 'left' }}>
              <Typography variant="h2" marked="center" align="center" sx={{ mb: 10 }}>
                Dining
              </Typography>
              <Box sx={{ maxWidth: "70%" }}>
                <InputLabel id="profile-dietary-label">
                  Select food preference or dietary restrictions
                </InputLabel>
                <FormGroup id="profile-dietary-select" value={values.dietary} onChange={(e) => handleChange('dietary', e.target.value, true, e.target.checked)} sx={{ mb: "15px" }}>
                {ProfileOptions.Dietary.map((option) => {
                  return (
                    <FormControlLabel key={option} control={<Checkbox value={option} checked={values.dietary.includes(option)} />} label={option}>
                      {option}
                    </FormControlLabel>
                  )
                })}
                </FormGroup>
              </Box>
            </Box>
          </Grid>
        </Grid>
          <Box margin="auto" sx={{ maxWidth: 200 }} >
            <Button disabled={loading} margin="auto" id="profile-save-button" variant="contained" color="secondary" type="submit" sx={{ width: 200, mb: 10 }}>
              {loading && <CircularProgress style={{ color: "#fff" }} size={10} />}
              Save
            </Button>
          </Box>
          <Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={openAlert} onClose={handleClose}>
            <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
              Profile Updated Successfully!
            </Alert>
          </Snackbar>
          <Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={openFailureAlert} onClose={handleClose}>
            <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
              Error when updating Profile!
            </Alert>
          </Snackbar>
          <Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={isBooking} onClose={handleClose}>
            <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
              Booking Request was successfully submitted to Onsite. Your travel specialist will reach out to you within 1 business day. Please complete setting up your travel profile below.
            </Alert>
          </Snackbar>
        </Box>
    </div>
    );
}

export default TravelProfile;
