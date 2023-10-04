import { Container } from '@mui/material'
import BasePage from '../components/templates/BasePage';
import CheckoutSnackbar from '../components/atoms/CheckoutSnackbar';
import Specialist from '../components/templates/Specialist';
import MemberBenefits from '../components/organisms/MemberBenefits';
import { StartBookingBanner } from '../components/organisms/Banners';


const SpecialistProfile = () => {

  return (
    <BasePage>
      <CheckoutSnackbar />
      <Specialist />
      <Container sx={{ minHeight: '40vh', mt: -10 }}>
        <MemberBenefits />
      </Container>
      <StartBookingBanner />
    </BasePage>
  );
}

export default SpecialistProfile;