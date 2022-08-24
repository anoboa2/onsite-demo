import { Button, Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

const ItineraryCard = ({ content }) => {
   const { title, price, description, prod_id, image_url } = content

  const handleCheckout = prod_id => {
    let url = "https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/product/createcheckoutsession"
    let body = {
      "product_id": prod_id
    }
    fetch(url, {
      "method": "POST",
      "body": JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
      window.location.href = data.redirect_url
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <Card sx={{ minWidth: 275, minHeight: 400 }}>
      <CardMedia
        component='img'
        alt='itinerary image'
        height='140'
        image={image_url}
        title={title}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Typography variant="body1">${price/100}</Typography>
      </CardContent>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button variant="text" color="primary" sx={{ m: 2 }}>Preview Itinerary</Button>
        <Button variant="contained" color='primary' onClick={handleCheckout(prod_id)} sx={{ m: 2 }}>Buy Now</Button>
      </Box>
    </Card>
  );
}

export default ItineraryCard;