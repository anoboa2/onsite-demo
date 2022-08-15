
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Alert, Avatar, Button, Box, Checkbox, CircularProgress, Container, FormControlLabel, FormGroup, Grid, IconButton, InputLabel, MenuItem, Rating, Select, Snackbar, TextField, Typography } from '@mui/material';
import DateTextField from '../atoms/DateTextField';
import { useRownd } from '@rownd/react';
import AdapterDateFns from '@mui/lab/AdapterLuxon';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
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
    const navigate = useNavigate();
    const [state = { notLoaded: true }, setState] = useState(null);
    const [values, setValues] = useState(initialValues)
    const [openAlert, setOpenAlert] = useState(false)
    const [openFailureAlert, setOpenFailureAlert] = useState(false)
    const [hasLoadedUserData, setHasLoadedUserData] = useState(false);
    const [value, setValue] = React.useState(new Date());
    const [datevalue, setdateValue] = React.useState(new Date());
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

    const LoadingComponent = () => <div> Loading... </div>
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
    return (<div>

        <Box
            marginTop="7%"
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: '100%', mx: 'auto', }}
        >

            <Container sx={{ mb: 4, justifyContent: 'center' }}>

                <Box sx={{ opacity: 0.8, width: '100%', height: '30%', position: 'relative', borderRadius: 2, boxShadow: 2, mb: 'theme.spacing(5)' }}>
                    {/* NEED TO TERNARY OPERATOR FOR IF NAMES ARE BLANK */}
                    {/* <Avatar name={values.first_name} /> */}

                    <Grid item container px={2} py={5} direction="column" alignItems="center" justify="center" maxWidth="100vw" sx={{ justifyContent: 'left' }}>
                        <Typography
                            variant="h4"
                            marked="center"
                            align="center"
                            component="h2"
                            sx={{ mb: 5, }}
                        >
                            Personal Information
                        </Typography>
                        <Box whiteSpace={5} sx={{ maxWidth: "50%" }}>
                            <Box sx={{ width: '100%' }} >
                                <label htmlFor="contained-button-file">
                                    <IconButton style={{
                                        margin: '0 0 0 0',
                                        spacing: 3,
                                        width: "86px", height: "86px",
                                        border: 1
                                    }}>
                                        {/*<Avatar src={value.profile_photo}
                                            style={{
                                                margin: '0 0 0 0',
                                                spacing: 3,
                                                width: "86px", height: "86px"
                                            }} />*/}
                                        <img width="86px" height="86px" data-rownd-field-mapping="photo" alt="pic" />
                                    </IconButton>
                                </label>

                                <input accept="image/*"
                                    id="contained-button-file"
                                    onChange={(e) => handleFileUpload(e)}
                                    multiple
                                    type="file"
                                />
                            </Box>
                            <Box>
                                {/*The span here will ensure that the field is of same width as other fields */}
                                <InputLabel id="profile-first-name-label" sx={{ whiteSpace: "normal !important", }} >
                                    First Name<span style={{ visibility: "hidden" }}>- adding additional text here to display</span>
                                </InputLabel>
                                <TextField
                                    id="profile-first-name-input"
                                    variant="filled"
                                    value={values.first_name}
                                    onChange={(e) => handleChange('first_name', e.target.value)}
                                    sx={{ minWidth: '90%', marginBottom: "15px" }}
                                />
                            </Box>
                            <InputLabel id="profile-last-name-label" sx={{ whiteSpace: "normal !important", }} >Last Name</InputLabel>
                            <TextField
                                id="profile-last-name-input"
                                variant="filled"
                                value={values.last_name}
                                onChange={(e) => handleChange('last_name', e.target.value)}
                                sx={{ minWidth: '90%', marginBottom: "15px" }}
                            />
                            <InputLabel id="profile-email-label" sx={{ whiteSpace: "normal !important", }} >Email</InputLabel>
                            <TextField
                                id="profile-email-input"
                                variant="filled"
                                value={values.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                sx={{ minWidth: '90%', marginBottom: "15px" }}
                            />
                            <InputLabel id="profile-email-label" sx={{ whiteSpace: "normal !important", }} >Phone Number</InputLabel>
                            <TextField
                                id="profile-phone-number-input"
                                variant="filled"
                                value={values.phone_number}
                                onChange={(e) => handleChange('phone_number', e.target.value)}
                                sx={{ minWidth: '90%', marginBottom: "15px" }}
                            />
                            <InputLabel id="profile-email-label" sx={{ whiteSpace: "normal !important", }} >Date of Birth</InputLabel>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    inputLabel="Date of Birth"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    // onChange={(evt) => handleChange('date_of_birth', evt)}
                                    renderInput={(params) => <DateTextField {...params} />}
                                />

                            </LocalizationProvider>
                        </Box>
                    </Grid>
                </Box>
            </Container>
            <Container sx={{ mb: 4, justifyContent: 'center' }}>
                <Box sx={{ opacity: 0.8, width: '100%', height: '30%', position: 'relative', borderRadius: 2, boxShadow: 2, mb: 'theme.spacing(5)' }}>

                    <Grid item container px={2} py={5} direction="column" alignItems="center" justify="center" maxWidth="100vw" sx={{ justifyContent: 'left' }}>
                        <Typography
                            variant="h4"
                            marked="center"
                            align="center"
                            component="h2"
                            sx={{ mb: 5, }}
                        >
                            Transportation
                        </Typography>
                        <Box whiteSpace={5} sx={{ maxWidth: "50%" }}>
                            <Box>
                                <InputLabel id="profile-domestic-flight-label" sx={{ whiteSpace: "normal !important" }}  >How do you typically like to fly domestically?</InputLabel>
                                <Select
                                    id="profile-domestic-flight-input"
                                    value={values.domestic_flight}
                                    onChange={(e) => handleChange("domestic_flight", e.target.value)}
                                    sx={{ minWidth: '90%', marginBottom: "15px" }}
                                >
                                    {ProfileOptions.Flight.map((option) => {
                                        return (
                                            <MenuItem
                                                key={option}
                                                value={option}
                                                onChange={(e) => handleChange('domestic_flight', e.target.value)}
                                            >
                                                {option}
                                            </MenuItem>
                                        )
                                    })}
                                </Select>
                            </Box>
                            <InputLabel id="profile-int-flight-label" sx={{ whiteSpace: "normal !important" }} >How do you typically like to fly internationally?</InputLabel>
                            <Select
                                id="profile-int-flight-input"
                                value={values.int_flight}
                                onChange={(e) => handleChange('int_flight', e.target.value)}
                                sx={{ minWidth: '90%', marginBottom: "15px" }}
                            >
                                {ProfileOptions.Flight.map((option) => {
                                    return (
                                        <MenuItem
                                            key={option}
                                            value={option}
                                            onChange={(e) => handleChange('domestic_flight', e.target.value)}
                                        >
                                            {option}
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                            <InputLabel id="profile-primary-airport-label" sx={{ whiteSpace: "normal !important" }} >Please enter your preferred Airport for Departure</InputLabel>
                            <TextField
                                id="profile-primary-airport-input"
                                value={values.primary_airport}
                                onChange={(e) => handleChange('primary_airport', e.target.value)}
                                sx={{ minWidth: '90%', marginBottom: "15px" }}
                            />
                            {/* Add code for Airport Selector */}
                            <InputLabel id="profile-seating-label" sx={{ whiteSpace: "normal !important" }} >Please select your preferred flight seating</InputLabel>
                            <FormGroup
                                id="profile-seating-select"
                                value={values.seating}
                            >
                                {ProfileOptions.Seating.map((option) => {
                                    return (<>
                                        <FormControlLabel
                                            key={option}
                                            onChange={(e) => handleChange('seating', option, true, e.target.checked)}
                                            control={
                                                <Checkbox
                                                    value={option.value}
                                                    checked={values.seating.includes(option)}
                                                />
                                            }
                                            label={option}>{option}
                                        </FormControlLabel>
                                    </>
                                    )
                                })}
                            </FormGroup>
                        </Box>
                    </Grid>
                </Box>
            </Container>
            <Container sx={{ mb: 4, justifyContent: 'center' }}>
                <Box sx={{ opacity: 0.8, width: '100%', height: '30%', position: 'relative', borderRadius: 2, boxShadow: 2, mb: 'theme.spacing(5)' }}>

                    <Grid item container px={2} py={5} direction="column" alignItems="center" justify="center" maxWidth="100vw" sx={{ justifyContent: 'left' }}>
                        <Typography
                            variant="h4"
                            marked="center"
                            align="center"
                            component="h2"
                            sx={{ mb: 10, }}
                        >
                            Lodging
                        </Typography>
                        <Box whiteSpace={5} sx={{ maxWidth: "50%" }}>
                            <Box>
                                <InputLabel id="profile-lodging-label" sx={{ whiteSpace: "normal !important" }}   >
                                    Select your lodging rating preference</InputLabel>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: "15px" }} >
                                    <Rating
                                        id="profile-lodging-rating"
                                        value={values.lodging_rating}
                                        onChange={(e) => handleChange('lodging_rating', Number(e.target.value))}
                                    />
                                    <Box sx={{ ml: 2 }}>(1-5 Stars)</Box>
                                </Box>
                                <InputLabel id="profile-bed-label" sx={{ whiteSpace: "normal !important" }} >Select your bed preference</InputLabel>
                                <FormGroup
                                    id="profile-bed-select"
                                    value={values.bed}
                                    sx={{ marginBottom: "15px" }}
                                >
                                    {ProfileOptions.Bed.map((option) => {
                                        return (

                                            <FormControlLabel
                                                key={option}
                                                onChange={(e) => handleChange('bed', e.target.value, true, e.target.checked)}
                                                control={
                                                    <Checkbox
                                                        value={option}
                                                        checked={values.bed.includes(option)}
                                                    />
                                                }
                                                label={option}>{option}
                                            </FormControlLabel>

                                        )
                                    })}
                                </FormGroup>
                                <InputLabel id="profile-room-amenities-label" sx={{ whiteSpace: "normal !important" }} >Select your preferred room features</InputLabel>
                                <FormGroup
                                    id="profile-room-amenities-select"
                                    value={values.room_amenities}
                                    sx={{ marginBottom: "15px" }}
                                >
                                    {ProfileOptions.Room.map((option) => {
                                        return (
                                            <FormControlLabel
                                                key={option}
                                                onChange={(e) => handleChange('room_amenities', e.target.value, true, e.target.checked)}
                                                control={
                                                    <Checkbox
                                                        value={option}
                                                        checked={values.room_amenities.includes(option)}
                                                    />
                                                }
                                                label={option}>{option}
                                            </FormControlLabel>
                                        )
                                    })}
                                </FormGroup>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Container>
            <Container sx={{ mb: 4, justifyContent: 'center' }}>
                <Box sx={{ opacity: 0.8, width: '100%', height: '30%', position: 'relative', borderRadius: 2, boxShadow: 2, mb: 'theme.spacing(5)' }}>

                    <Grid item container px={2} py={5} direction="column" alignItems="center" justify="center" sx={{ justifyContent: 'left' }}>
                        <Typography
                            variant="h4"
                            marked="center"
                            align="center"
                            component="h2"
                            sx={{ mb: 10, }}
                        >
                            Dining
                        </Typography>
                        <Box whiteSpace={5} sx={{ maxWidth: "50%" }}>
                            <InputLabel id="profile-dietary-label" sx={{ whiteSpace: "normal !important" }} >Select food preference or dietary restrictions</InputLabel>
                            <FormGroup id="profile-dietary-select"
                                value={values.dietary}
                                onChange={(e) => handleChange('dietary', e.target.value, true, e.target.checked)}
                                sx={{ marginBottom: "15px" }}
                            >
                                {ProfileOptions.Dietary.map((option) => {
                                    return (
                                        <FormControlLabel
                                            key={option}
                                            control={
                                                <Checkbox
                                                    value={option}
                                                    checked={values.dietary.includes(option)}

                                                />
                                            }
                                            label={option}>{option}
                                        </FormControlLabel>
                                    )
                                })}
                            </FormGroup>
                        </Box>
                    </Grid>

                </Box>
            </Container>
            <Box margin="auto" sx={{ maxWidth: 200 }} >
                <Button disabled={loading} margin="auto" id="profile-save-button" variant="contained" color="secondary" type="submit" sx={{ width: 200, mb: 10 }}>
                    {loading && <CircularProgress style={{ color: "#fff" }} size={10} />}
                    Save
                </Button>
            </Box>
            <Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={openAlert}
                onClose={handleClose}>
                <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
                    Profile Updated Successfully!
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={openFailureAlert}
                onClose={handleClose}>
                <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
                    Error when updating Profile!
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={isBooking}
                onClose={handleClose}>
                <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
                    Booking Request was successfully submitted to Onsite. Your travel specialist will reach out to you within 1 business day. Please complete setting up your travel profile below.
                </Alert>
            </Snackbar>
        </Box>
    </div>
    );
}

export default TravelProfile;
