import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ServiceCard = (content) => {
  const { image, alt, title, description } = content;

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component='img'
        alt={alt}
        height='250'
        image={image}
      />
      <CardContent>
        <Typography variant="h5" sx={{mt: {xs: 2 , sm: 2} , mb: {xs: 2 , sm: 2}}}>{title}</Typography>
        <Typography variant="body1"  sx={{mt: {xs: 2 , sm: 2} , mb: {xs: 2 , sm: 2}}}>{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;