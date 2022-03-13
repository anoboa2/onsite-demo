import React, { useState } from 'react';
import { useRownd } from '@rownd/react';
import {
    Box,
    Container,
    TextField,
    InputLabel,
    MenuItem,
    Select,
    OutlinedInput,
    Chip,
    Button,
    Input,
    Textfield,
    Typography,
    Grid,
    InputAdornment,
} from '@mui/material';
import SignupModal from '../views/SignupModal';


const numpeople = [0, 1, 2, 3, 4, 5, 6]
const occasions = [
    'Anniversary',
    'Destination Wedding',
    'Bachelorette/Bachelor Trip',
    'Honeymoon',
    'Birthday',
    'Friends Trip',
    'Family Trip',
    'Business Trip',
    'Couples Getaway',
    'Post-Breakup Escape',
    'Spontaneous',
    'Spiritual Learning',
    'Other',
]

const activities = [
    'Nature Adventures',
    'Cultural Activities',
    'Events',
    'Sporty Activities',
    'Water Activities',
    'Nightlife',
    'Relaxation',
    'Shopping',
]

const SubsequentBookingContent = ({ values, handleInputChange }) => {
    const { is_authenticated } = useRownd();

    return (
        <Grid container columns={{ xs: 6, sm: 12, }} spacing={0} sx={{ mt: 0, mb: 0, ml: 'auto', mr: 'auto', pb: 6, pt: 0, pl: 4, pr: 4, alignItems: 'flex-end', }}>
            <Grid container item xs={6}>
                <Container>
                    <Typography sx={{ p: 0, color: 'black',  }}>Number of People</Typography>
                </Container>
                <Grid item xs={3}>
                    <Box sx={{ m: 2, width: '100%' }}>
                        <InputLabel id="booking-num-adults-label">Adults</InputLabel>
                        <Select
                            labelId="booking-num-adults-label"
                            id="booking-num-adults-select"
                            label="num-adults"
                            name="numberofadults"
                            value={values.numberofadults}
                            onChange={(evt) => handleInputChange('numberofadults', evt.target.value)}
                            sx={{
                                width: 80,
                                background: 'white',
                                mb: 3,
                            }}
                        >
                            {numpeople.map((number) => {
                                return <MenuItem key={number} value={number}>{number}</MenuItem>
                            })}
                        </Select>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{ m: 2 }}>
                        <InputLabel id="booking-num-kids-label">Kids</InputLabel>
                        <Select
                            labelId="booking-num-kids-label"
                            id="booking-num-kids-select"
                            label="num-kids"
                            name="numberofkids"
                            value={values.numberofkids}
                            onChange={(evt) => handleInputChange('numberofkids', evt.target.value)}
                            sx={{
                                width: 80,
                                background: 'white',
                                mb: 3, 
                            }}
                        >
                            {numpeople.map((number) => {
                                return <MenuItem key={number} value={number}>{number}</MenuItem>
                            })}
                        </Select>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={6} sx={{ mb: 5, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', }}>
            <InputLabel id="booking-budget-label" sx={{ mb: 1, width: '100%', maxWidth: '300px', }}>Budget</InputLabel>
                <TextField
                    hiddenLabel
                    labelId="booking-budget-label"
                    id="booking-budget-input"
                    variant="filled"
                    name="budget"
                    value={values.budget}
                    onChange={(evt) => handleInputChange('budget', evt.target.value)}
                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                    sx={{ background: 'white', width: '100%', maxWidth: '300px', }} />
            </Grid>
            <Grid item xs={6}  sx={{ mb: 5, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', }}>
                <InputLabel id="booking-occasion-label" sx={{ mb: 1, width: '100%', maxWidth: '300px', }}>Type of Trip</InputLabel>
                <Select
                    hiddenLabel
                    labelId="booking-occasion-label"
                    id="booking-occasion-select"
                    multiple
                    name="occasion"
                    value={values.occasion}
                    onChange={(evt) => handleInputChange('occasion', evt.target.value)}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    sx={{
                        width: '100%',
                        maxWidth: '300px',
                        background: 'white'
                    }}
                >
                    {occasions.map((occasion) => {
                        return <MenuItem key={occasion} value={occasion}>{occasion}</MenuItem>
                    })}
                </Select>
            </Grid>
            <Grid item xs={6} sx={{ mb: 5, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', }}>
            <InputLabel id="booking-activities-label" sx={{
                    mb: 1, 
                    width: '100%',
                    maxWidth: '300px',
                }}
                >
                    Activities
                </InputLabel>
                <Select
                    hiddenLabel
                    labelId="booking-activities-label"
                    id="booking-activities-select"
                    multiple
                    name="activities"
                    value={values.activities}
                    onChange={(evt) => handleInputChange('activities', evt.target.value)}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    sx={{
                        width: '100%',
                        maxWidth: '300px',
                        background: 'white'
                    }}
                >
                    {activities.map((activity) => {
                        return <MenuItem key={activity} value={activity}>{activity}</MenuItem>
                    })}
                </Select>
            </Grid>
            <Grid item xs={12} sx={{ mt: 3, alignContent: 'center', pl: { xs: 0, sm: "20%"} }}>
                <TextField
                    id="booking-notes-input"
                    multiline
                    rows={4}
                    label="Additional Notes"
                    name="notes"
                    placeholder="Anything else to add?"
                    variant="filled"
                    value={values.notes}
                    onChange={(evt) => handleInputChange('notes', evt.target.value)}
                    sx={{
                        width: '100%',
                        maxWidth: '600px',
                        background: 'white',
                    }}
                />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center', mt: 4, }}>
                {is_authenticated ? (
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                    >
                        {'Book Now'}
                    </Button>
                ) : (
                    <SignupModal />
                )}
            </Grid>
        </Grid>
    );
};

export default SubsequentBookingContent;