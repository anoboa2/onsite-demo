import CheckoutSnackbar from '../components/atoms/CheckoutSnackbar';
import NavBar from '../components/organisms/NavBar';
import Specialist from '../components/templates/Specialist';
import HowItWorks from '../components/organisms/HowItWorks';
import Banner from '../components/molecules/Banner';
import AboutPageBanner from '../content/AboutPageBanner';
import Footer from '../components/organisms/Footer';

const SpecialistProfile = () => {

  return (
    <div>
      <CheckoutSnackbar />
      <NavBar />
      <Specialist />
      <HowItWorks />
      <Banner content={AboutPageBanner} />
      <Footer />
    </div>
  );
}

export default SpecialistProfile;