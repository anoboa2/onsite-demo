import CheckoutSnackbar from '../components/atoms/CheckoutSnackbar';
import NavBar from '../components/organisms/NavBar';
import Specialist from '../components/templates/Specialist';
import OnsiteTravelerIcons from '../components/organisms/OnsiteTravelerIcons';
import { StartBookingBanner } from '../components/organisms/Banners';
import Footer from '../components/organisms/Footer';

const SpecialistProfile = () => {

  return (
    <div>
      <CheckoutSnackbar />
      <NavBar />
      <Specialist />
      <OnsiteTravelerIcons />
      <StartBookingBanner />
      <Footer />
    </div>
  );
}

export default SpecialistProfile;