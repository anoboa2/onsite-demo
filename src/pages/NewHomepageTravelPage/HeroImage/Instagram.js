// import InstagramEmbed from 'react-instagram-embed';
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";
import Typography from "../../../modules/components/Typography";
import { Box, Grid } from "@mui/material";
import { Fade } from "react-reveal";
import { makeStyles } from "@mui/styles";

const test = () => {
  fetch("https://graphinstagram.com/{}");
};

const useStyles = makeStyles((theme) => ({
  mainbox: {
    height: 250,
    marginBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      height: 320,
      marginBottom: "58px",
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
      fontSize: "35px !important",
      marginLeft: "40px !important",
    },
  },
  typographythree: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "40px !important",
      fontSize: "35px !important",
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
    paddingBottom: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px !important",
      flexDirection: "column !important",
    },
  },
}));

const Instagram = () => {
  const classes = useStyles();
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
                    On The Gram |
                  </Typography>
                  <Typography
                    variant="h4"
                    color="primary.main"
                    className={classes.typographyone}
                  >
                    @onsitetravelapp
                  </Typography>
                  <Typography className={classes.typographyfour} variant="h4">
                  ✅
                  </Typography>
                </Box>
                <Box>
                  {" "}
                  <Typography
                    className={classes.typographytwo}
                    textAlign="center"
                    variant="h6"
                  >
                  Follow us for more
                  </Typography>
                </Box>
              </Box>
            
              </div>
          </div>
          </Grid>
      </Fade>

      <>
      <InstagramFeed justifyContent="center" token="IGQVJYSU5pV3FhLTAwaWFSV2lFLVZAGUWFkcGk5ZAVpUOWg1ejdGZA1F4Q3hEV1R4MzBoemV1V21WWUQxcWlJNWZAIeXJTOTVDaGZA5STlyM0k3X3g0TDA1ZAjcwQS15N3RPb1BJMzNCVzJVMkN2R0NzOVE2dQZDZD" counter="4" />
      </>

    </Grid>
    

  );
};

export default Instagram;
