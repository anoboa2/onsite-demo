import NavBar from '../components/organisms/NavBar';
import PopularItineraries from '../components/organisms/PopularItineraries';
import Banner from '../components/molecules/Banner';
import Footer from '../components/organisms/Footer';
import ExploreBanner from '../content/ExploreBanner';
import FAQCondensedSection from '../components/organisms/FAQCondensedSection';
import { SpecialistSection } from '../content/FAQItems';


const Explore = () => {

  return (
    <div>
      <NavBar />
      <PopularItineraries />
      <FAQCondensedSection faqsection={SpecialistSection} />
      <Banner content={ExploreBanner}/>
      <Footer />
    </div>
  );
}

export default Explore;