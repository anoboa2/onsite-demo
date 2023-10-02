import NavBar from '../components/organisms/NavBar';
import HomeHero from '../components/organisms/HomeHero';
import Services from '../components/organisms/Services';
import ProductSection from '../components/organisms/ProductSection';
import Banner from '../components/molecules/Banner';
import ReviewSlider from '../components/organisms/ReviewSlider';
import Footer from '../components/organisms/Footer';
import StartBookingBanner from '../content/StartBookingBanner';
import SubscribeEmailBanner from '../content/SubscribeEmailBanner';

import HowItWorks from '../components/organisms/HowItWorks';
import { home } from "../content/HeroConstants"



const Home = () => {
  return (
      <>
        <NavBar />
        <HomeHero details={home}/>
        <HowItWorks />
        <ProductSection />
        <Services />
        <Banner content={StartBookingBanner}/>
        <ReviewSlider />
        <Banner content={SubscribeEmailBanner} />
        <Footer />
      </>
  );
}

export default Home;
