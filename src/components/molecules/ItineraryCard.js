import { useEffect, useState } from 'react';
import { Button, Box, Typography , Card, CardContent, CardMedia, CardActions } from '@mui/material';

const ItineraryCard = ({ content }) => {
  const { title, price, description, prod_id, image_url, static_image, hover_image, author } = content
  const [ image, setImage ] = useState(static_image);

  useEffect(() => {
    setImage(static_image);
  }, []);

  const handleCheckout = prod_id => event => {
    event.preventDefault();
    let url = "https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/product/createcheckoutsession"
    let body = {
      "product_id": prod_id,
      "profile_id": author
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

  const handleMouseEnter = () => {
    setImage(hover_image);
  }

  const handleMouseLeave = () => {  
    setImage(static_image);
  }

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component='img'
        alt='itinerary image'
        src={image_url}
        title={title}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          
          height: 400,
          objectFit: 'cover', 
        }}
      />
      <CardContent >
        <Typography variant="h6">{title}.</Typography><br/> 
        <Typography fontWeight={300} variant="body1">{description}.</Typography><br/> 
        <Typography variant="body1">Price: ${price/100}</Typography>
      </CardContent>
        <CardActions >
          <Button variant="text" color="primary" >Preview Itinerary</Button>
          <Button variant="contained" color='primary' onClick={handleCheckout(prod_id)} >Buy Now</Button>
        </CardActions>
    </Card>
  );
}

export default ItineraryCard;