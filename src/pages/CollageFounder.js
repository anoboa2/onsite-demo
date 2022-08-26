import * as React from "react";
import { Grid} from '@mui/material';
import { ReactPhotoCollage } from "react-photo-collage";

const setting = {
  maxWidth: "350px",
  height: ["350px", "270px"],
  aling: "center",
  layout: [2, 3],
  photos: [
    {
      source:
        "https://images.unsplash.com/photo-1661485967298-29cc56b499f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      source:
        "https://images.unsplash.com/photo-1661486122507-f1149bff73af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      source:
        "https://images.unsplash.com/photo-1661490006874-ef2ef7c07237?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      source:
        "https://images.unsplash.com/photo-1661485967211-4cde42fcddcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      src:'/img/content/Why We travel - 1.gif' 
    },
    {
      src:'/img/content/Why We travel - 2.gif' 
    }
  ],
  showNumOfRemainingPhotos: true
};
const CollageFounder = () => {
return(
  <Grid container spacing={3} align="center" sx={{ px: {  sm: "10%" }, py: 5, mb: -9, mt: -5 , ml: { xs: -1.5} , overflow: "hidden" }}>
        
   <ReactPhotoCollage {...setting} />;
        </Grid>
  );
}

export default CollageFounder;


