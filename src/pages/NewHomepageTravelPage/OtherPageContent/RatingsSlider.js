import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useRef } from "react";
import { useEffect } from "react";
import "./RatingsSlider.css";
import { ButtonBase } from "@material-ui/core";
import "./images/nyc-skyline.webp";
import "./images/miami.webp";
import { Box, Grid, Paper, Rating } from "@mui/material";
import Typography from "../../../modules/components/Typography";
import { Fade } from "react-reveal";
import { makeStyles } from "@mui/styles";

const itemData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Breakfast",
    details:
      "The itinerary you have given me is AMAZING. Just what my boyfriend and I were looking for in Miami! The dinner spots are the perfect, posh vibes we want and it has the perfect amount of relaxation with that side of fun too! Can’t wait to go on our trip. Will definitely be using this service again! ",
    name: "-Christina G.",
    rating: 5,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    details:
      "Excellent service! Very quick and easy questionnaire to get a personalized itinerary. I love all the individual places included in the itinerary, definitely the best New York experience to feel like a local. Perfect mix of relaxing and sightseeing. The itinerary layout also made it very easy to follow along the whole trip. ",
    name: "-Alexa D.",
    rating: 5,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Breakfast",
    details:
      "The book was quick, easy and pleasant. I love the options provided to me. Literally it felt like I was served breakfast to bed! ",
    name: "– Julia L.",
    rating: 5,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    details:
      "“She is absolutely great, on top of everything, and has the best recommendations. I would highly recommend her and I will definitely use her help for my next trip! ",
    name: "-Mana A.",
    rating: 5,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    details:
      "I really liked that everything was planned and reservations were made for me. This was exactly what I was looking for. Looking forward to doing these activities! .",
    name: "-Emma T",
    rating: 5,
  },
];

const item = {
  display: "flex",
  flexDirection: "column",
};

const useStyles = makeStyles((theme) => ({
  mainbox: {
    height: 410,
    [theme.breakpoints.down("sm")]: {
      height: 550,
    },
  },
  typographytwo: {
    marginLeft: "10px !important",
    borderBottom: "none !important",
    [theme.breakpoints.down("sm")]: {
      borderBottom: "none !important",
      fontSize: "20px !important",
      marginLeft: "40px !important",
    },
  },
  typographyone: {
    marginRight: "10px !important",
    marginLeft: "10px !important",
    borderBottom: "3px solid #0FAACD",
    [theme.breakpoints.down("sm")]: {
      borderBottom: "none !important",
      fontSize: "25px !important",
      marginLeft: "40px !important",
    },
  },
  typographythree: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "40px !important",
      fontSize: "25px !important",
    },
  },
  typographyfour: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "40px !important",
      fontSize: "25px !important",
    },
  },
  boxone: {
    
    flexDirection: "column !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px !important",
    },
  },
  boxtwo: {
    display: "flex",
    flexDirection: "row !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px !important",
      flexDirection: "column !important",
    },
  },
}));

const RatingsSlider = () => {
  const classes = useStyles();
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);
  const settings = {
    dots: true,
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
    <Grid>
      <Fade bottom>
        <Grid>
          <div style={{ marginTop: "50px", marginBottom: "100px" }}>
            <div
              style={{
                display: "flex", 
                padding: "0 10px",
                align: "center",
                width: "100%",
                justifyContent: "center"
              }}
            >
              <Box className={classes.boxone}>
                <Box className={classes.boxtwo}>
                  <Typography
                    className={classes.typographythree}
                    textAlign="left"
                    variant="h4"
                  >
                    What our happy
                  </Typography>
                  <Typography
                    variant="h4"
                    color="primary.main"
                    className={classes.typographyone}
                  >
                    Travelers
                  </Typography>
                  <Typography className={classes.typographyfour} variant="h4">
                    have to say
                  </Typography>
                </Box>
                <Box>
                  {" "}
                  <Typography
                    className={classes.typographytwo}
                    textAlign="left"
                    variant="h6"
                  >
                    Here are some responses for the travel services we offer for
                    their locations
                  </Typography>
                </Box>
              </Box>

              {/* <h1 style={{ fontStyle: "italic" }}>View Our Gallery</h1> */}
              {/* <div style={{ display: "flex" }}>
                                <ButtonBase
                                    style={{
                                        width: 35,
                                        height: 35,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginRight: 10,
                                        borderRadius: 7,
                                        boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                                        cursor: "pointer",
                                        color: "#0FAACD",
                                    }}
                                    className="buttons"
                                    onClick={() => sliderRef.current.slickPrev()}
                                >
                                    <ArrowCircleLeftOutlinedIcon />
                                </ButtonBase>
                                <ButtonBase
                                    style={{
                                        width: 35,
                                        height: 35,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 7,
                                        boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                                        cursor: "pointer",
                                    }}
                                    className="buttons"
                                    onClick={() => sliderRef.current.slickNext()}
                                >
                                    <ArrowCircleRightIcon />
                                </ButtonBase>
                            </div> */}
            </div>
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
                {itemData.map((newData) => (
                  <>
                    <div style={{ margin: 20 }}>
                      <Paper elevation={3} sx={{ borderRadius: "40px" }}>
                        {/* Wrap typography inside a box component to be able to give padding and other properties */}
                        {/* paddingX means X axis */}

                        <Box
                          paddingX={1}
                          className={classes.mainbox}
                          padding={4}
                          sx={{ borderRadius: "20px" }}
                        >
                          {/* you can adjust custom styles in a box which is just like a div by giving it a prop of sx */}
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "10px",
                              }}
                            >
                              {" "}
                              {/* <Rating
                                name="read-only"
                                value={newData.rating}
                                readOnly
                                precision={0.5}
                                size="medium"
                              /> */}
                            </Box>
                          </Box>
                          <Box>
                            <Typography
                              variant="h6"
                              component="h3"
                              marginTop={0}
                            >
                              {newData.details}
                            </Typography>
                          </Box>
                          <Typography variant="h5" component="h5">
                            {newData.name}
                          </Typography>
                        </Box>
                      </Paper>

                      {/* <img
                                style={{ width: 310, objectFit: "contain", borderRadius: 10 }}
                                src={newData.img}
                                alt=""
                            />
                        </div> */}
                    </div>
                  </>
                ))}
              </Slider>
            </div>
          </div>
        </Grid>
      </Fade>
    </Grid>
  );
};

export default RatingsSlider;
