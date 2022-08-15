import NavBar from '../components/organisms/NavBar';
import HomeHero from '../components/organisms/HomeHero';
import Services from '../components/organisms/Services';
import ProductSection from '../components/organisms/ProductSection';
import FounderQuote from '../components/organisms/FounderQuote';
import Banner from '../components/molecules/Banner';
import Testimonies from '../components/organisms/Testimonies';
import InstagramFeed from '../components/organisms/InstagramFeed';
import Footer from '../components/organisms/Footer';
import StartBookingBanner from '../content/StartBookingBanner';
import SubscribeEmailBanner from '../content/SubscribeEmailBanner';


const Home = () => {
  return (
      <>
        <NavBar />
        <HomeHero />
        <ProductSection />
        <Services />
        <Banner content={StartBookingBanner}/>
        <Testimonies />
        <InstagramFeed />
        <FounderQuote />
        <Banner content={SubscribeEmailBanner} />
        <Footer />
      </>
  );
}

export default Home;
