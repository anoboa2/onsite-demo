import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"

const ProductPreview = ({ content }) => {
  const { header, description, image, cta, orientation } = content;

  return (
    <Grid container spacing={{ xs: 1, sm: 3, maxWidth: '80%' }}>
      <Grid sm={12} md={5} order={{ xs: 1, sm: orientation.imageSide }} sx={{ overflow: "hidden" }}>
        {image}
      </Grid>
      <Grid sm={12} md={7} order={{ xs: 2, sm: orientation.textSide }}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', p: { xs: "50px 30px", sm: 10 }, mt: { xs: 1, sm: 5} }}>
          <Typography variant="h2">
            {header}
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{mt: 4}} style={{ textAlign: "justify" }}>
            {description}
          </Typography>
          {cta}
        </Box>
      </Grid>
    </Grid>
  );
}

export default ProductPreview;