
import { Box, Button, CardMedia, Grid, makeStyles } from "@material-ui/core";
import { Divider, Typography } from "@mui/material";
import React from "react";
import { useState } from 'react';
import { Fade } from "react-reveal";
import PopularLocationCategories from "./PopularLocationsCategories";



const itemData = [
    {
        img: "./new-york-city.webp",
        title: 'New York City',
    },
    {
        img: "./miami.webp",
        title: 'Miami',
    },
]



const item = {
    display: 'flex',
    flexDirection: 'row',

};





const PopularLocations = () => {


    return (<div>

        <Grid container >
            <Box mb={5} pl={4} pr={4} pt={5}>
                <PopularLocationCategories />
            </Box>
        </Grid>

    </div >
    );
}

export default PopularLocations;

