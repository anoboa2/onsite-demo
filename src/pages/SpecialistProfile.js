import CheckoutSnackbar from '../components/atoms/CheckoutSnackbar';
import NavBar from '../components/organisms/NavBar';
import Specialist from '../components/templates/Specialist';
import OnsiteTravelerIcons from '../components/organisms/OnsiteTravelerIcons';
import Banner from '../components/molecules/Banner';
import AboutPageBanner from '../content/AboutPageBanner';
import Footer from '../components/organisms/Footer';

const SpecialistProfile = () => {

  return (
    <div>
      <CheckoutSnackbar />
      <NavBar />
      <Specialist />
      <OnsiteTravelerIcons />
      <Banner content={AboutPageBanner} />
      <Footer />
    </div>
  );
}

export default SpecialistProfile;