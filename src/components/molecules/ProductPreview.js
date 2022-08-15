import { Box, Grid, Typography } from "@mui/material";

const ProductPreview = ({ content }) => {
  const { header, description, image, cta, orientation } = content;

  return (
    <Grid container spacing={3} columns={12}>
      <Grid item xs={12} sm={5} order={orientation.imageSide} sx={{ overflow: "hidden" }}>
        {image}
      </Grid>
      <Grid item xs={12} sm={7} order={orientation.textSide}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start", p: 10, mt: 5 }}>
          <Typography variant="h3">
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