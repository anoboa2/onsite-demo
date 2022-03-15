import * as React from 'react';
import ProductCategories from '../modules/views/ProductCategories';
import AppFooter from '../modules/views/AppFooter';
import ProductHero from '../modules/views/ProductHero';
import ProductValues from '../modules/views/ProductValues';
import ProductHowItWorks from '../modules/views/ProductHowItWorks';
import ProductCTA from '../modules/views/ProductCTA';
import AppAppBar from '../modules/views/AppAppBar';
import Typography from '../modules/components/Typography';
import ProductHeroLayout from '../modules/views/ProductHeroLayout';
import BookingForm from '../modules/form/BookingForm';
import withRoot from '../modules/withRoot';

const backgroundImage = '/img/nyc-skyline.jpg';

function Index() {


  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHeroLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'bottom',
            }}
            >
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{ display: 'none' }}
                src={backgroundImage}
                alt="increase priority"
            />
            <Typography color="inherit" align="center" variant="h2" marked="center" sx={{mt: 5}}>
            Travel booking, reinvented
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
            >
                Get the most out of your travel by leaving the planning to us
            </Typography>
            <BookingForm />      
      </ProductHeroLayout>
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
