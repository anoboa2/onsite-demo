import NavBar from '../components/organisms/NavBar';
import FormHero from '../components/organisms/FormHero';
import HowItWorks from '../components/organisms/HowItWorks';
import Banner from '../components/molecules/Banner';
import AboutPageBanner from '../content/AboutPageBanner';
import FAQ from '../components/organisms/FAQ';
import Footer from '../components/organisms/Footer';

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
      <FAQ />
      <Footer />
    </div>
  );
}

export default Match;