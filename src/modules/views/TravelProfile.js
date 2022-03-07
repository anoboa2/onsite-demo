import React, { useState } from 'react';
import Section from '../components/Section';
import { Container, Box, InputLabel, Select, MenuItem, FormControlLabel, FormGroup, Checkbox, FormControl, Rating } from '@mui/material';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Avatar from '../components/Avatar';

const flightOptions = [
    'Economy',
    'Premium Economy',
    'Business',
    'First',
]

const seatingOptions = [
    'Window',
    'Middle',
    'Aisle',
]

const bedOptions = [
    'King Bed',
    'Queen Bed',
    'Double Bed',
    'Suite',
]

const roomOptions = [
    'Balcony with a view',
    'Balcony, but view is not a priority',
    'No balcony, but view is a priority',
]

const dietaryOptions = [
    'Vegetarian',
    'Vegan',
    'Kosher',
    'Halal',
    'Gluten-Free',
    'None',
    'Open to all cuisines',
    'Other',
]

function TravelProfile() {
    const initialValues = {
        full_name: "Alex Noboa",
        email: "",
        domestic_flight: "",
        int_flight: "",
        primary_airport: "",
        seating: [],
        lodging_rating: 5,
        bed: [],
        room_amenities: [],
        dietary: [],
    }

    const [values, setValues] = useState(initialValues)

    function handleChange(name, event) {
        console.log(event);
        setValues({...values, [name]: event})
    }

    function handleSubmit() {
        // ROWND
    }

    return(
        <Section>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ width: '80%', mx: 'auto', }}
            >
                <Container component="section" sx={{ mt: 15, mb: 4, justifyContent: 'center' }}>
                    {/* <Box
                        id="avatar-img"
                        component="img"
                        src="/icon/camera.png"
                        alt="camera icon"
                        sx={{ height: 50 }}
                    /> */}
                    <Box sx={{ my: 15, width: '100%', }}>
                        <Avatar name={values.full_name} />
                        <InputLabel id="full-name-label">Name</InputLabel>
                        <TextField
                            id="full-name-input"
                            variant="filled"
                            placeholder="Alex Noboa"
                            onChange={(e) => handleChange('full_name', e)}
                            sx={{ minWidth: '300px' }}
                        />
                        <InputLabel id="email-label">Email</InputLabel>
                        <TextField
                            id="email-input"
                            variant="filled"
                            placeholder="email@example.com"
                            onChange={(e) => handleChange('email', e)}
                        />
                    </Box>
                    <Container>
                        <Typography
                            variant="h4"
                            marked="center"
                            align="center"
                            component="h2"
                            sx={{ mb: 10, }}
                        >
                            Transportation
                        </Typography>
                        <InputLabel id="domestic-flight-label">How do you typically like to fly domestically?</InputLabel>
                        <Select
                            id="domestic-flight-input"
                            placeholder=""
                            onChange={(e) => handleChange("domestic_flight", e)}
                        >
                            {flightOptions.map((option) => {
                                return <MenuItem key={option} value={option}>{option}</MenuItem>
                            })}
                        </Select>
                        <InputLabel id="int-flight-label">How do you typically like to fly internationally?</InputLabel>
                        <Select
                            id="intflight-input"
                            placeholder=""
                            onChange={(e) => handleChange('', e)}
                        >
                            {flightOptions.map((option) => {
                                return <MenuItem key={option} value={option}>{option}</MenuItem>
                            })}
                        </Select>
                        <InputLabel id="primary-airport-label">Please enter your preferred Airport for Departure</InputLabel>
                        <TextField id="primary-airport-input"/>
                        {/* Add code for Airport Selector */}
                        <InputLabel id="seating-label">Please select your preferred flight seating</InputLabel>
                        <FormGroup id="seating-select">
                            {seatingOptions.map((option) => {
                                return <FormControlLabel control={<Checkbox value={option}/>} label={option}>{option}</FormControlLabel>
                            })}
                        </FormGroup>
                    </Container>
                    <Container>
                        <Typography
                            variant="h4"
                            marked="center"
                            align="center"
                            component="h2"
                            sx={{ mb: 10, }}
                        >
                            Lodging
                        </Typography>
                        <InputLabel id="lodging-label">Please select your lodging rating preference</InputLabel>
                        <Rating
                            id="lodging-rating"
                            value={values.lodgingrating}
                            onChange={(e) => handleChange('', e)}
                        />
                        <InputLabel id="bed-label">Select your bed preference</InputLabel>
                        <FormGroup id="bed-select">
                            {bedOptions.map((option) => {
                                    return <FormControlLabel control={<Checkbox value={option}/>} label={option}>{option}</FormControlLabel>
                                })}
                        </FormGroup>
                        <InputLabel id="room-amenities-label">Select your preferred room features</InputLabel>
                        <FormGroup id="room-amenities-select">
                            {roomOptions.map((option) => {
                                    return <FormControlLabel control={<Checkbox value={option}/>} label={option}>{option}</FormControlLabel>
                                })}
                        </FormGroup>
                    </Container>
                    <Container>
                        <Typography
                            variant="h4"
                            marked="center"
                            align="center"
                            component="h2"
                            sx={{ mb: 10, }}
                        >
                            Dining
                        </Typography>
                        <InputLabel id="dietary-label">Do you have any food preference or dietary restrictions?</InputLabel>
                        <FormGroup id="dietary-select">
                            {dietaryOptions.map((option) => {
                                    return <FormControlLabel control={<Checkbox value={option}/>} label={option}>{option}</FormControlLabel>
                                })}
                        </FormGroup>
                    </Container>
                </Container>
            </Box>
        </Section>
    )
}

 export default TravelProfile;