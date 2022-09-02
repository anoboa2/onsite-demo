import React from "react";
import { Box, Button, Typography , Container , Grid } from '@mui/material'
import StickyBox from "react-sticky-box";
import range from "lodash.range";
import './StickyStyles.css';



const StickySpecialist= ({ details }) => {

  return (
      <Grid container spacing={3} sx={{ justifyContent: 'right', px:30, mb: 13}}>              
          <StickyBox className="content-sidebar">
            {range(5).map(i =>
              <p key={i}>
                Sidebar Item {i}
              </p>
            )}
          </StickyBox>
  </Grid>


  );
}

export default StickySpecialist;