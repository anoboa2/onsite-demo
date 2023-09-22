import { Box, Card, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import PlanningSteps from '../../content/PlanningSteps';

const HowItWorks = () => {
  return (
    <Box sx={{ display: 'block', maxWidth: '1440px', margin: 'auto'}} >
      <Typography variant="h2" align="center" sx={{ px: { xs: 2, sm: "20%" }, py: 5, mb: -1, ml: -5 , mr: -5, overflow: "hidden" , color:"primary.main" }}>
        How Onsite works <Box component="span" sx={{ color:"#0FAACD"}}>for you</Box>
      </Typography>
      <Grid container spacing={3} sx={{ justifyContent: 'space-evenly', mb: 13 }}>
        {PlanningSteps.map(item => (
          <Grid xs={12} sm={6} md={3} key={item.order} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ px: 3, height: '350px', width: '280px', borderRadius: '30px', transition: 'all 0.15s ease-in-out', boxShadow: "12px 12px 45px rgba(0,0,0,.1)", '&:hover': {transform: 'scale(1.05)'}}}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: "center", py: 2 }}>
                <Box component="img" src={item.icon} alt={item.alt} sx={{ height: 90, width: 90, my: 2, mx: 'auto', mb: 4}}/>
                <Typography variant='body1' align="center" color="text.primary">{item.description}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HowItWorks;



