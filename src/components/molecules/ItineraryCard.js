import { useEffect, useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

const ItineraryCard = ({ content }) => {
  const { title, price, description, prod_id, static_image, hover_image, author } = content
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
    <Box sx={{ width: 400, height: 700 }}>
      <Box
        component='img'
        alt='itinerary image'
        src={image}
        title={title}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          width: 400,
          height: 500,
          objectFit: 'cover',
        }}
      />
      <Box sx={{ display: 'flex', height: 100, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column' }}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Typography variant="body1">${price/100}</Typography>
      </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'flex-end', justifyContent: 'flex-end', justifyItems: 'flex-end' }}>
          <Button variant="contained" color='primary' onClick={handleCheckout(prod_id)} sx={{ m: 2 }}>Buy Now</Button>
        </Box>
    </Box>
  );
}

export default ItineraryCard;