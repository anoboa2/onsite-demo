import React, { useState } from 'react';
import Section from '../components/Section';
import { Container, Box, InputLabel, Select, MenuItem, FormControlLabel, FormGroup, Checkbox } from '@mui/material';
import StarRatingComponent from 'react-star-rating-component';
import Typography from '../components/Typography';
import TextField from '../components/TextField';

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
    const initValues = {
        // full_name: Rownd.user.get('full_name'),
        // email: Rownd.user.get('email'),
        // domesticflight: Rownd.user.get(''),
        // intflight: Rownd.user.get(''),
        // primaryairport: Rownd.user.get(''),
        // seating: Rownd.user.get(''),
        // lodgingrating: Rownd.user.get(''),
        // bed: Rownd.user.get(''),
        // room: Rownd.user.get(''),
        // dining: Rownd.user.get(''),
    }

    const [values, setValues] = useState(initValues)

    function handleChange(name, event) {
        console.log(event);
        // Rownd.user.set("**METHOD FOR SETTING DATA**");
    }

    function handleStarClick(nextValue, prevValue, name) {
        setValues({...values, [name]: nextValue})
    }

    return(
        <Section>
            <Container component="section" sx={{ mt: 15, mb: 4 }}>
                <Box component="img" src="/icon/camera.png" alt="camera icon" sx={{ height: 50 }}/>
                <InputLabel>Name</InputLabel>
                <TextField id="fullname-input" variant="filled" placeholder="Alex Noboa" onChange={(e) => handleChange('full_name', e)} />
                <InputLabel>Email</InputLabel>
                <TextField id="email-input" variant="filled" placeholder="email@example.com" onChange={(e) => handleChange('email', e)} />
                <InputLabel>How do you typically like to fly domestically?</InputLabel>
                <Select id="domesticflight-input" placeholder="" onChange={(e) => handleChange('', e)}>
                    {flightOptions.map((option) => {
                        return <MenuItem key={option} value={option}>{option}</MenuItem>
                    })}
                </Select>
                <InputLabel>How do you typically like to fly internationally?</InputLabel>
                <Select id="intflight-input" placeholder="" onChange={(e) => handleChange('', e)}>
                    {flightOptions.map((option) => {
                        return <MenuItem key={option} value={option}>{option}</MenuItem>
                    })}
                </Select>
                <InputLabel>Please enter your preferred Airport for Departure</InputLabel>
                <TextField />
                {/* Add code for Airport Selector */}
                <InputLabel>Please select your preferred flight seating</InputLabel>
                <FormGroup>
                    {seatingOptions.map((option) => {
                        return <FormControlLabel control={<Checkbox value={option}/>} label={option}>{option}</FormControlLabel>
                    })}
                </FormGroup>
                <InputLabel>Please rate your lodging preference</InputLabel>
                <StarRatingComponent name="hotelpreference" starcount={5} value={values.rating} onStarClick={handleStarClick}/>
                <InputLabel>Select your bed preference</InputLabel>
                <FormGroup>
                    {bedOptions.map((option) => {
                            return <FormControlLabel control={<Checkbox value={option}/>} label={option}>{option}</FormControlLabel>
                        })}
                </FormGroup>
                <InputLabel>Select your preferred room features</InputLabel>
                <FormGroup>
                    {roomOptions.map((option) => {
                            return <FormControlLabel control={<Checkbox value={option}/>} label={option}>{option}</FormControlLabel>
                        })}
                </FormGroup>
                <InputLabel>Do you have any food preference or dietary restrictions?</InputLabel>
                <FormGroup>
                    {dietaryOptions.map((option) => {
                            return <FormControlLabel control={<Checkbox value={option}/>} label={option}>{option}</FormControlLabel>
                        })}
                </FormGroup>

            </Container>
        </Section>
    )
}

 export default TravelProfile;