import NavBar from '../components/organisms/NavBar';
import FormHero from '../components/organisms/FormHero';
import HowItWorks from '../components/organisms/HowItWorks';
import Banner from '../components/molecules/Banner';
import AboutPageBanner from '../content/AboutPageBanner';
import FAQCondensedSection from '../components/organisms/FAQCondensedSection';
import Footer from '../components/organisms/Footer';
import { CondensedSection } from '../content/FAQItems';
import SubscribeEmailBanner from '../content/SubscribeEmailBanner';

const Match = () => {
  // const [isLoading, setIsLoading] = useState(false);

  // const queryParams = new URLSearchParams(window.location.search);
  // const indicator = queryParams.get('indicator');


  return (
    <div>
      <NavBar />
      <FormHero />
      <HowItWorks />
      <Banner content={AboutPageBanner} />
      <FAQCondensedSection faqsection={CondensedSection}/>
      <Banner content={SubscribeEmailBanner} />
      <Footer />
    </div>
  );
}

export default Match;