import { useEffect, useState } from 'react';
import ProductCard from '../molecules/ProductCard';
import ProfileCard from '../molecules/ProfileCard';
import { Button, Grid, Typography } from '@mui/material';

const Influencers = () => {

  const products = [
    {
      'description': 'Itinerary for 3 days in the magical Paris, France',
      'image_url': '',
      'price': '999',
      'prod_id': 'prod_M3gRlnAKzowhmD',
      'author': 'izanna.lev',
      'title': 'Paris'
    },
    {
      'description': 'Itinerary for 7 days in Iceland',
      'image_url': '',
      'price': '999',
      'prod_id': 'prod_M3gSPAjSf4ey64',
      'author': 'izanna.lev',
      'title': 'Iceland'
    },
    {
      'description': 'Itinerary for 2 days in the Florence, 2 days in Rome, 5 days in Positano Italy',
      'image_url': '',
      'price': '999',
      'prod_id': 'prod_M3gNSuwBEOfg1K',
      'author': 'izanna.lev',
      'title': 'Italy'
    }
  ]

  const handleClick = () => {
    fetch(`https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/planning/getitineraries`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'sec-fetch-mode': 'no-cors'
      },
      queryParams: {
        'author': 'izanna.lev'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setProducts(data);
      }
      );
  };


  const profile = {
    name: 'Izanna Levintova',
    image_url: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/izanna.lev/profile.jpeg',
    description: 'Izanna has had a passion for traveling the world ever since she was a little girl. From organizing family trips to now inspiring others to pack their bags and book that trip.',
    influencerId: 'izanna.lev'
  }

  const onClick = product_id => event => {
    event.preventDefault();
    let url = "https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/product/createcheckoutsession"
    let body = {
      "product_id": product_id
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
    <>
      <Grid container spacing={3} sx={{ px: 20, my: 15, mt: 20 }}>
        <ProfileCard
          key={profile.influencerId}
          content={profile}
        />
      </Grid>
      <Grid container spacing={3} sx={{ px: 20, mb: 15 }}>
        <Grid item xs={12}>
          <Typography variant="h4">Recent Trips</Typography>
          <Button onClick={handleClick}>Let's Test</Button>
        </Grid>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.prod_id}>
          <ProductCard
            key={product.prod_id}
            product={product}
            onClick={onClick(product.prod_id)}
          />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Influencers;