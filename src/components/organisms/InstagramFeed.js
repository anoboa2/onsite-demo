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
                textAlign="left"
                variant="h4"
              >
                On The Gram 📷
              </Typography>
              <Link variant="h4" color = "primary.main" href="https://instagram.com/Onsitetravelapp" underline="none" sx={{ borderBottom: "3px solid #0FAACD" }}> @onsitetravelapp</Link>
              <Typography
                textAlign="center"
                variant="h6"
              >
              Follow us for more
              </Typography>
            </Box>
          </Box>
        </Grid>
      <InstagramEmbed token="IGQVJXdURaVzVlUFNUOUhwRXdLaUtkdXNmY1NoZADN5M0puZA3htVHp6VzNLX1VrNHd3SXNLTnNNVXZAnQmlLdTByM1R5NDlDSzlZAWlVyNTN1WVRvU1cwakNhWk5uS2ZAYUlc3VFUtQkxDc1dOaVNqNWNpQgZDZD" counter="4" />
    </Grid>
  );
}

export default InstagramFeed;