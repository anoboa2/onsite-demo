import { Box, Container, Typography } from '@mui/material';

const DestinationHero = () => {
    return (
      <div>
      <Container sx={{ width: { xs: "80%", sm: "50%" }, my: { xs: 0, sm: 10 } , mt: { xs: 12, sm: 14 } , mb: { xs: -8, sm: -8 }}}>
         
         <Container sx={{ mt: { xs: 8, sm: 10 } , mb: { xs: 8, sm: 10 }  , justifyContent:'center', ml: { xs: -18, sm: -33 } }}>
          <img 
          src='/img/destinations/italy-cover2.jpg' 
          style={{
            height:"auto" ,
            maxWidth:"199%",
            align: "center",
            position: "relative",
            zIndex: -1
          }}
          />
          
       </Container>

       <Container sx={{ mt: { xs: -30, sm: -59 } , mb: { xs: 60, sm: -123 }  , px: {xs: -1}, justifyContent:'center'  }}>
          <Box
          sx={{
            mt: { xs: 10, sm: -15 },
            mb: {xs:-48},
            ml: {xs:-4.5},
            minWidth: {xs: "135%" , sm: "108%" },
            height: 300,
            zIndex: 999999,
            textAlign:'center !important',
            backgroundColor: '#fff',
          }}
        >
          <Typography variant="h1"  fontWeight="700" align="center" sx={{ py: 7}} color="primary.contrastText">Italy</Typography>
         <Typography variant="subtitle2" fontWeight="300"  align="center" sx={{ mt:{xs: -2 , sm: -3} , px: {xs: 2 , sm: 7}}}>
          
         The beautiful country of fine food and wine, sun-bathed landscapes, Venetian canals, smoldering volcanoes, and sleepy lagoons. Let our travel specialists help you enjoy a trip of a lifetime. 
         From Milan to Rome to Positano, use our travel guides to explore all the hidden gems in this beautiful country.
          
          </Typography>
        </Box>
      </Container>

      </Container>

      </div> 
      
    
    );
}

export default DestinationHero;