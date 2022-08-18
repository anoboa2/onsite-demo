import { Box, Grid, Typography } from "@mui/material";

const ProductPreview = ({ content }) => {
  const { header, description, image, cta, orientation } = content;

  return (
    <Grid container spacing={{ xs: 1, sm: 3 }} columns={12}>
      <Grid item xs={12} sm={5} order={{ xs: 1, sm: orientation.imageSide }} sx={{ overflow: "hidden" }}>
        {image}
      </Grid>
      <Grid item xs={12} sm={7} order={{ xs: 2, sm: orientation.textSide }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", p: { xs: "50px 30px", sm: 10 }, mt: { xs: 1, sm: 5} }}>
          <Typography variant="h2">
            {header}
          </Typography>
          <Typography variant="body1" sx={{mt: 4}} style={{ textAlign: "justify" }}>
            {description}
          </Typography>
          {cta}
        </Box>
      </Grid>
    </Grid>
  );
}

export default ProductPreview;