import { Grid } from "@mui/material";
import React from "react";
import MainProfile from "./MainProfile";
import Leftbar from "./Leftbar";


const NewTravel = () => {
    return (
        <Grid container>
            <Grid item sm={3} xs={2}>
                <Leftbar />
            </Grid>
            <Grid item sm={9} xs={10}><MainProfile /></Grid>
        </Grid >

    );
}

export default NewTravel;