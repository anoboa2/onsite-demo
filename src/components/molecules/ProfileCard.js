import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';

const ProductCard = ({ content, onClick }) => {
  const { name, description, influencerId, image_url } = content;

  return (
    <Card sx={{ minWidth: 275, maxWidth: 800 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar src={image_url} sx={{ height: 200, width: 200 }}/>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="subtitle1">@{influencerId}</Typography>
            <Typography variant="body1">{description}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ProductCard;