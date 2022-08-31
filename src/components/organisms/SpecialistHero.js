
import { Box, Grid, Typography } from '@mui/material';


const SpecialistHero = ({ content }) => {
  const { first_name, id } = content;
  
  return (
    
    <Box key={id} sx={{ width: {sm: '80%'} }}>
      <Grid container  sx={{ display: 'flex', justifyContent: 'center' , mt:{xs: -7 , sm: -3} }}>
       <Grid item sm={12} md={6} sx={{ px: 5, display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
          <Box sx={{ py: 1 }}>
          <Typography variant="h1" fontWeight="300" align='center' sx={{ px: { xs: 2, sm: "20%" }, py: 5, mb:{xs: 3 , sm: 3}, ml: -5 , mr: -5, overflow: "hidden" }}>
            Meet <Box component="span" sx={{ color:"primary.main"}} ><b>{first_name}</b></Box></Typography>
          </Box>
      
          </Grid>
      </Grid>
    </Box>
  );
}

export default SpecialistHero;