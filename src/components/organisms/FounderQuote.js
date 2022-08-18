import { Avatar, Box, Grid, Typography } from "@mui/material";

const FounderQuote = () => {
  return(
    <Box container spacing={3} sx={{ px: "15%", py: 5, mb: 10, overflow: "hidden" , marginTop: "65px" }}>
      <Grid container spacing={3} columns={12}>
        <Grid item xs={12} sm={3} sx={{ alignContent: "center" }}>
          <Avatar src="/img/team/Izanna-Levintova.webp" alt="headshot of founder Izanna" sx={{ width: 222, height: 222, marginLeft: "13px !important" }}/>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box sx={{ display: "flex", flexDirection: "column" , marginTop: "13px !important" }} >
            <Typography variant="h5" align="justify" sx={{ my: 2 }}>
              “I want to inspire people from all over the world to step outside their comfort zones and experience something new through travel”
            </Typography>
            <Typography variant="subtitle1" align="left" color="secondary.main" sx={{ fontWeight: 900 }}>
              Izanna Levintova
            </Typography>
            <Typography variant="body2" align="left" color="text.secondary" sx={{ fontWeight: 900 }}>
              CEO & Founder
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FounderQuote;

