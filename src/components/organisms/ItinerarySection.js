import { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const ItinerarySection = () => {
  const [content, setContent] = useState([]);

  const fetchItineraries = async () => {
    try {
      const response = await fetch(`https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/planning/getallitineraries`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      setContent(data)
      return data
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchItineraries();
  } , []);

  const handleCheckout = prod_id => event => {
    event.preventDefault();
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
    <Grid container spacing={3}>
      {content.map((itinerary) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275, minHeight: 400 }}>
              <CardMedia
                component='img'
                alt='Contemplative Reptile'
                height='140'
                image='https://source.unsplash.com/random'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography variant="h6">{itinerary.title}</Typography>
                <Typography variant="body1">{itinerary.prod_id}</Typography>
                <Typography variant="body1">${itinerary.price/100}</Typography>
              </CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', mt: 10 }}>
                {/* <Button variant="text" color="primary" sx={{ m: 2 }}>Preview Itinerary</Button> */}
                <Button variant="contained" color='primary' onClick={handleCheckout} sx={{ m: 2 }}>Buy Now</Button>
              </Box>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ItinerarySection;