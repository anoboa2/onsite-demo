import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useEffect } from "react";
import "./line-indicator.css";
import { Avatar, Box, Grid, Paper, Stack, Typography } from "@mui/material";
import Reviews from '../../content/Reviews';

const Testimonies = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    console.log(sliderRef);
  }, []);

  const settings = {
    dots: true,
    draggable: true,
    infinite: false,
    color: "#0FAACD",
    dotsClass: "slick-dots line-indicator",
    ref: sliderRef,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <Grid sx={{ mt: 10, mb: 20 }}>
      <Box sx={{ display: "flex", flexDirection: "column", paddingBottom: "15px", justifyContent: "center" }}>
        <Typography textAlign="center" variant="h4">
          What our <Box component="span" sx={{ color: "primary.main", borderBottom: "3px solid #0FAACD" }}>Travelers</Box> have to say
        </Typography>
        <Typography variant="h6" align="center">
          Here are some responses for the travel services we offer for their locations
        </Typography>
      </Box>
      <div style={{ margin: 30 }}>
        <Slider
          {...settings}
          customPaging={(i) => (
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "-10px",
                opacity: 0,
              }}
            >
              {i}
            </div>
          )}
        >
          {Reviews.map((newData) => (
              <div key={newData.id} margin="20px">
                <Box sx={{display: "flex", justifyContent:"center", justifyItems: "center", alignItems: "center", alignContent: "center", maxWidth: 400}}>
                  <Box sx={{ display: "inline-block", position: "relative", alignItems: "center", justifyContent: "center" }}>
                    <Stack direction="row" spacing={4}>                                   
                      <Avatar                                      
                        alt={newData.name}
                        src={newData.img}
                        sx={{width: 95, height: 95 }}
                      />                                 
                    </Stack>
                    <Typography variant="h6" sx={{textAlign: "justify", marginTop:"10px" }}>
                      {newData.name}
                    </Typography>
                  </Box>
                </Box>
                <Paper elevation={3} sx={{marginTop:"-75px", borderRadius: "40px" , paddingTop:"55px", maxWidth: 400 }}> 
                  <Box sx={{ p: 4, height: 200, marginBottom: "50px", sm: { height: 320, marginBottom: "58px" }, borderRadius: "20px" }}> 
                    <Typography component="h3" sx={{ mt: 0, textAlign: "justify" }}>
                      {newData.details}
                    </Typography>
                  </Box>
                </Paper>
              </div>
          ))}
        </Slider>
      </div>
    </Grid>
  );
};

export default Testimonies;
