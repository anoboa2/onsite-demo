import CheckoutSnackbar from '../components/atoms/CheckoutSnackbar';
import NavBar from '../components/organisms/NavBar';
import PopularItineraries from '../components/organisms/PopularItineraries';
import Banner from '../components/molecules/Banner';
import Footer from '../components/organisms/Footer';
import FAQCondensedSection from '../components/organisms/FAQCondensedSection';
import { SpecialistSection } from '../content/FAQItems';
import PopularAdvisors from '../components/organisms/PopularAdvisors';
import ExploreHero from '../components/organisms/ExploreHero';
import StartBookingBanner from '../content/StartBookingBanner';
import OnsiteTravelerIcons from '../components/organisms/OnsiteTravelerIcons';
import SpecialistSignupBanner from '../content/SpecialistSignupBanner';


const Explore = () => {

  return (
    <div>
      <NavBar />
      <ExploreHero/>
      <CheckoutSnackbar />
      <PopularAdvisors />
      <Banner content={StartBookingBanner}/>
      <PopularItineraries />
      <OnsiteTravelerIcons/>
      <FAQCondensedSection faqsection={SpecialistSection} />
      <Banner content={SpecialistSignupBanner}/>
      <Footer />
    </div>
  );
}

export default Explore;