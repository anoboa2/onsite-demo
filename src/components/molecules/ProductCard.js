import { Button, Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProductCard = ({ product, onClick }) => {
  const { title, description, price } = product;

  return (
    <Card sx={{ minWidth: 275, minHeight: 400 }}>
      <CardMedia
        component='img'
        alt='Contemplative Reptile'
        height='140'
        image='https://source.unsplash.com/random'
        title='Contemplative Reptile'
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Typography variant="body1">${price/100}</Typography>
      </CardContent>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button variant="text" color="primary" sx={{ m: 2 }}>Preview Itinerary</Button>
        <Button variant="contained" color='primary' onClick={onClick} sx={{ m: 2 }}>Buy Now</Button>
      </Box>
    </Card>
  );
}

export default ProductCard;