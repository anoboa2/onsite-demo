import { Avatar, Box, Paper, Typography } from '@mui/material';

const TestimonyCard = ({ content }) => {
  const { img, details, name } = content;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center" }}>                            
      <Avatar                                      
        alt={name}
        src={img}
        sx={{width: 95, height: 95 }}
      />                                 
    <Paper elevation={3} sx={{marginTop:"-75px", borderRadius: "40px" , paddingTop:"55px"}}> 
      <Box sx={{ p: 4, height: 250, width: 400, marginBottom: "50px", sm: { height: 320, marginBottom: "58px" }, borderRadius: "20px" }}> 
        <Typography variant="h6" sx={{textAlign: "justify", marginTop:"10px" }}>
          {name}
        </Typography>
        <Typography component="h3" sx={{ mt: 0, textAlign: "justify" }}>
          {details}
        </Typography>
      </Box>
    </Paper>
  </Box>

  );
}

export default TestimonyCard;