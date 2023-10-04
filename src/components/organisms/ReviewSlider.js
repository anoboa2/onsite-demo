import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useEffect } from "react";
import "./line-indicator.css";
import { Avatar, Box, Paper, Typography } from "@mui/material";
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <Box component="div" sx={{ display: 'flex', flexDirection: 'column', mt: 10, mb: 20 }}>
      <Box sx={{ display: "flex", flexDirection: "column", paddingBottom: "15px", justifyContent: "center" }}>
        <Typography textAlign="center" variant="h2" marginBottom="10px" fontWeight="300">
          What our travelers have to say
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.primary">
        A few responses from our travelers who enjoyed using Onsite
        </Typography>
      </Box>
      <Box component="div" sx={{ display: 'block', maxWidth: '80%', mx: 'auto' }}>
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
              <Box component="div" key={newData.id} sx={{ display: 'block', my: '20px', px: '5px' }}>
                <Box component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 400, mx: 'auto' }}>
                  <Box component="div" sx={{ display: 'flex', flexDirection: 'column', zIndex: 2 }}>                                  
                    <Avatar                                      
                      alt={newData.name}
                      src={newData.img}
                      sx={{width: 95, height: 95 }}
                    />                                 
                    <Typography variant="h6" sx={{ textAlign: "justify", mt: "10px", zIndex: 2 }}>
                      {newData.name}
                    </Typography>
                  </Box>
                  <Paper elevation={3} sx={{ mt: '-75px', pt: '55px', borderRadius: '40px', maxWidth: 400 }}> 
                    <Box sx={{ p: 4, height: 200, marginBottom: "50px", sm: { height: 320, marginBottom: "58px" }, borderRadius: "20px" }}> 
                      <Typography component="h3" sx={{ mt: 0, textAlign: "justify" }}>
                        {newData.details}
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
              </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Testimonies;
