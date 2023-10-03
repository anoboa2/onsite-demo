import CheckoutSnackbar from '../components/atoms/CheckoutSnackbar';
import NavBar from '../components/organisms/NavBar';
import Specialist from '../components/templates/Specialist';
import MemberBenefits from '../components/organisms/MemberBenefits';
import { StartBookingBanner } from '../components/organisms/Banners';
import Footer from '../components/organisms/Footer';

const SpecialistProfile = () => {

  return (
    <div>
      <CheckoutSnackbar />
      <NavBar />
      <Specialist />
      <MemberBenefits />
      <StartBookingBanner />
      <Footer />
    </div>
  );
}

export default SpecialistProfile;