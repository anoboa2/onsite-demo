import React, { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterLuxon';
import {
    DateRangePicker,
    DatePicker,
    DesktopDatePicker,
    LocalizationProvider,
} from '@mui/lab';
import {
    Box,
    TextField,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    Grid,
    Switch,
    Fade,
    Container,
    Stack,
} from '@mui/material';


const locations = [
    { label: 'New York City, NY', value: 'nyc' },
    { label: 'Miami, FL', value: 'miami' },
]


const InitialBookingContent = ({ values, handleInputChange }) => {
    const [toggle, setToggle] = useState(false)

    const handleSwitch = (event) => {
        setToggle(event.target.checked)
        handleInputChange(event)
    };

    return (
        <Grid container columns={{ xs: 6, sm: 12, }} spacing={0} sx={{ ml: 'auto', mr: 'auto', pb: 5, pt: 6, pl: 4, pr: 4}} >
            <Grid item xs={6}>
                <Box sx={{ width: '100%', justifySelf: 'center' }}>
                    <Typography color="black" sx={{ mb: 2, }}>Travel Dates</Typography>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Fade in={toggle}>
                            <DateRangePicker
                                startText="Start Date"
                                endText="End Date"
                                name="daterange"
                                disabled={toggle}
                                value={values.daterange}
                                onChange={(evt) => handleInputChange('daterange', evt)}
                                renderInput={(startDate, endDate) => (
                                    <React.Fragment>
                                        <TextField sx={{ background: 'white' }} {...startDate} />
                                        <Box color="black" sx={{ mx: 2 }}> to </Box>
                                        <TextField sx={{ background: 'white' }} {...endDate} />
                                    </React.Fragment>
                                )}
                                sx={{ backgroundColor: 'white', }}
                            />
                        </Fade>
                    </LocalizationProvider>
                    <Box display="flex" alignItems="baseline" justifyContent="flex-start">
                        <Switch
                            name="datesunsure"
                            value={toggle}
                            checked={toggle}
                            onChange={handleSwitch}
                        />
                        <Typography color="black">I'm not sure of my dates</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', maxWidth: '275px', }}>
                <InputLabel id="location-label" sx={{ width: '100%', maxWidth: '300px', mb: 2, mt: { xs: 4, sm: 0, } }}>Location</InputLabel>
                <Select
                    hiddenLabel
                    labelId="location-label"
                    id="location-select"
                    name="location"
                    value={values.location}
                    onChange={(evt) => handleInputChange('location', evt.target.value)}
                    sx={{
                        width: '100%',
                        maxWidth: '300px',
                        background: 'white',
                    }}
                >
                    {locations.map((location) => {
                        return <MenuItem key={location.value} value={location.value}>{location.label}</MenuItem>
                    })}
                </Select>
            </Grid>
        </Grid>
    );
};



export default InitialBookingContent;