import * as React from 'react';
import ProductCategories from '../modules/views/ProductCategories';
import AppFooter from '../modules/views/AppFooter';
import ProductHero from '../modules/views/ProductHero';
import ProductValues from '../modules/views/ProductValues';
import ProductHowItWorks from '../modules/views/ProductHowItWorks';
import ProductCTA from '../modules/views/ProductCTA';
import AppAppBar from '../modules/views/AppAppBar';
import TestModal from '../modules/views/TestModal';
import withRoot from '../modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <TestModal />
      <ProductHowItWorks />
      <ProductCTA />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
