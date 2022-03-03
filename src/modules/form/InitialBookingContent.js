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
    {label: 'New York City, NY', value: 'nyc'},
    {label: 'Miami, FL', value: 'miami'},
]

const InitialBookingContent = ({ values, handleInputChange }) => {
    const [toggle, setToggle] = useState(false)

    const handleSwitch = (event) => {
        setToggle(event.target.checked)
        handleInputChange(event)
    };

    return (
        <Grid container columns={12} spacing={0} sx={{ ml: 'auto', mr: 'auto', pb: 5, pt: 6, pl: 4, pr: 4}} >
            <Grid item xs={6}>
                <Box sx={{ width: '100%', justifySelf: 'center' }}>
                <Typography color="black">Travel Dates</Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    {/* <DateRangePicker 
                    startText="Start Date"
                    endText="End Date"
                    name="daterange"
                    disabled={toggle}
                    value={values.daterange}
                    onChange={handleInputChange}
                    renderInput={(startDate, endDate) => (
                        <React.Fragment>
                            <TextField {...startDate} />
                            <Box color="black" sx={{ mx: 2}}> to </Box>
                            <TextField {...endDate} />
                        </React.Fragment>
                    )}
                    sx={{ background: 'white', }}
                    /> */}
                    <Stack direction="row" sx={{ background: 'white', }}>
                        <DesktopDatePicker
                        label="Start Date"
                        inputFormat="MM/dd/yyyy"
                        disabled={toggle}
                        value={values.startdate}
                        onChange={(newValue) => handleInputChange(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                        sx={{ background: 'white' }}
                        />
                        <DesktopDatePicker
                        label="End Date"
                        inputFormat="MM/dd/yyyy"
                        disabled={toggle}
                        value={values. enddate}
                        onChange={handleInputChange}
                        renderInput={(params) => <TextField {...params} />}
                        sx={{ background: 'white' }}
                        />
                    </Stack>
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
            <Grid item xs={6} sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end', 
                    maxWidth: '275px',
                }}>
                <InputLabel id="location-label" sx={{
                    width: '100%',
                    maxWidth: '275px',
                }}>
                Location
                </InputLabel>
                <Select
                labelId="location-label"
                id="location-select"
                label="loc"
                name="location"
                value={values.location}
                onChange={handleInputChange}
                sx={{
                    width: '100%',
                    maxWidth: '275px',
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