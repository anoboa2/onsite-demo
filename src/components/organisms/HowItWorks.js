import { Box, Card, Grid, Typography } from '@mui/material';
import PlanningSteps from '../../content/PlanningSteps';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyItems: 'center',
  m: 'auto',
  px: 3,
  minHeight: '300px',
  maxHeight: '500px',
  minWidth: '200px',
  maxWidth: '300px',
  borderRadius: "30px",
  zIndex: 2,
  transition: 'all 0.1s ease-in-out',
  boxShadow: "12px 12px 45px rgba(0,0,0,.1)",
  '&:hover': {
    transform: 'scale(1.05)'
  },
};

const HowItWorks = () => {
  return (
    <Grid container spacing={{xs: 3, sm: 6}} sx={{ justifyContent: 'center', px: { xs: 2, sm: 10 }, mb: 16 }}>
    <Grid item xs={12}>
      <Typography variant="h2" align='center'>How Onsite Works</Typography>
    </Grid>
      {PlanningSteps.map(item => (
        <Grid item xs={12} sm={6} md={4} key={item.order}>
          <Card sx={cardStyle}>
            <Box sx={{ display: 'flex', justItems: "center", justifyContent: 'center', alignItems: 'center', alignContent: "center", flexDirection: 'column', py: 2 }}>
              <Box component="img" src={item.icon} alt={item.alt} sx={{ height: 90, width: 90, my: 2, mx: 'auto'}}/>
              <Typography variant='body1' align="center">{item.description}</Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default HowItWorks;