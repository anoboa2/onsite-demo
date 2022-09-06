import CheckoutSnackbar from '../components/atoms/CheckoutSnackbar';
import NavBar from '../components/organisms/NavBar';
import Specialist from '../components/templates/Specialist';
import OnsiteTravelerIcons from '../components/organisms/OnsiteTravelerIcons';
import Banner from '../components/molecules/Banner';
import ExploreBanner from '../content/ExploreBanner';
import Footer from '../components/organisms/Footer';
import StickySpecialistMobile from '../components/organisms/StickySpecialistMobile';
import StickyBox from "react-sticky-box";
import ThankYou from "../components/organisms/ThankYou";

const SpecialistProfile = () => {

  return (
    <div>
      <CheckoutSnackbar />
      <NavBar />
      <Specialist />
      <OnsiteTravelerIcons />
      <Banner content={ExploreBanner} />
      <Footer />
      <StickySpecialistMobile />
      <ThankYou />
    </div>
  );
}

export default SpecialistProfile;