import InstagramEmbed from "react-ig-feed";
import './Instagram.css';
import { Box, Grid, Link, Typography } from "@mui/material";

const InstagramFeed = () => {
  return (
    <Grid>
        <Grid>
          <Box sx={{ mt: "50px", mb: "50px", display: "flex", py: "10px", alignContent: "center", justifyContent: "center", overflow: "hidden"}}>
            <Box sx={{ display: "flex", flexDirection: "column", pb: "15px",  }}>
              <Typography
                textAlign="center"
                variant="h2"
                fontWeight="300"
              >
                On The Gram | <Link variant="h2" color = "primary.main" href="https://instagram.com/Onsitetravelapp" underline="none"> @onsitetravelapp</Link> 📷
              </Typography>
              <Typography
                textAlign="center"
                variant="subtitle1"
                color="text.primary"
                sx={{mt: {xs: 2 , sm: 2} , mb:{xs: -2 , sm: -2}}}
              >
              Follow us for more
              </Typography>
            </Box>
          </Box>
        </Grid>
      <InstagramEmbed token="IGQVJVVDJNMzZAudHZAsZAXRHUktNWTdmbkxidEx0WjYwOXFjTVU3OGJHZAHRaRllCRXZANcFVvWUJ1aHd4TUE1SUZAiYlpraDdQQjRfZA0VQaHByWnViclREeWo2SUdMZAW1XZA3JReUFUeFNxOWtmQjh6NGRaZAwZDZD" counter="4" />
    </Grid>
  );
}

export default InstagramFeed;