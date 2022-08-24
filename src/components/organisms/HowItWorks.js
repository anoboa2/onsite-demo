import { Box, Card, Grid, Typography } from '@mui/material';
import PlanningSteps from '../../content/PlanningSteps';
import { makeStyles } from "@mui/styles";

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyItems: 'center',
  m: '20',
  px: 3,
  minHeight: '350px',
  maxHeight: '500px',
  minWidth: '250px',
  maxWidth: '280px',
  borderRadius: "30px",
  zIndex: 2,
  transition: 'all 0.1s ease-in-out',
  boxShadow: "12px 12px 45px rgba(0,0,0,.1)",
  '&:hover': {
    transform: 'scale(1.05)'
  },
};

const useStyles = makeStyles((theme) => ({
  cards: {
      
      [theme.breakpoints.down("sm")]: {

        marginTop:"175px !important"
        
      },
  }
}))

const HowItWorks = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={6} sx={{ justifyContent: 'center', px: 15, mb: 16}}>
    <Grid item xs={12} className={classes.cards}>
      <Typography variant="h2" align='center' sx={{ px: { xs: 2, sm: "20%" }, py: 5, mb: -3, ml: -5 , mr: -5, overflow: "hidden" }}>How Onsite Works<Box component="span" sx={{ color: "primary.main", borderBottom: "3px solid #0FAACD" }}> For You</Box></Typography>
    </Grid>
      {PlanningSteps.map(item => (
        <Grid item xs={28} sm={6} md={4} key={item.order}>
          <Card sx={cardStyle}>
            <Box sx={{ display: 'flex', justItems: "center", justifyContent: 'center', alignItems: 'center', alignContent: "center", flexDirection: 'column', py: 2 }}>
              <Box component="img" src={item.icon} alt={item.alt} sx={{ height: 90, width: 90, my: 2, mx: 'auto'}}/>
              <Typography variant='body1' align="left">{item.description}</Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default HowItWorks;

