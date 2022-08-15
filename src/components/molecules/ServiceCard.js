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
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.bold">{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;