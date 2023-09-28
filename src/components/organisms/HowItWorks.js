import { Box, Card, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import PlanningSteps from '../../content/PlanningSteps';

const HowItWorks = () => {
  return (
    <Box component="div" sx={{ display: 'block', minHeight: '50vh', maxWidth: '1440px', mx: 'auto', justifyItems: 'center', my: 'auto' }} >
      <Typography variant="h2" align="center" sx={{ display: 'block', py: 5, color: "primary.main" }}>
        How Onsite works for you
      </Typography>
      <Grid container spacing={3} sx={{ justifyContent: 'space-evenly', pb: 5, maxWidth: '100%', overflow: 'hidden' }}>
        {PlanningSteps.map(item => (
          <Grid xs={12} sm={6} md={3} key={item.order} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ px: 3, height: '350px', width: '280px', borderRadius: '30px', transition: 'all 0.15s ease-in-out', boxShadow: "12px 12px 45px rgba(0,0,0,.1)", '&:hover': {transform: 'scale(1.05)'}}}>
              <Box component="div" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: "center", py: 2 }}>
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



