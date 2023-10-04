import { Box , Typography } from '@mui/material';
import AppleAppStoreButton from '../components/atoms/AppleAppStoreButton';

const AppPreviews = [
  {
    header: <Typography variant="h2" fontWeight="300" >You Value Price Transparency<br />We Value You</Typography>,
    description: 'We are the fastest growing and most valued travel company because we believe in growing trustworthy relationships with our travelers. We are transparent with our travelers about pricing, for 7% of your total trip cost, Onsite does everything from plan until you arrive home. Our travelers don’t have to worry about doing anything.',
    image: <Box marginLeft={4} component="img" src="/img/content/itinerary-desktop-mockup.png" alt="" sx={{ height: { xs: 300, sm: 200, md: 300 }, width: { xs: 380, sm: 200, md: 380 }, marginTop: { xs: 7, sm: 8 } , marginBottom: { xs: -2, sm: 8 } , marginLeft:{ xs: 0, sm: 4} }} />,
    alt: 'Onsite Travel',
    orientation: { imageSide: 1, textSide: 2 }
  },
  // {
  //   header: 'Local Travel Professionals',
  //   description: 'We connect you with local, knowledgeable travel specialists from wherever you are looking to go and let them plan the perfect trip based on their personal experience and your occasion, time and preferences. We currently have travel specialists in New York City and Miami and we\'re expanding throughout the US.',
  //   image: <Box component="img" src='/img/content/itinerary-iphone-mockup.webp' alt="" sx={{ height: { xs: 400, sm: 600 }, width: { xs: 400, sm: 600 }, alignItems: "right" }} />,
  //   alt: 'Offsite Travel',
  //   orientation: { imageSide: 2, textSide: 1 }
  // },
  {
    header: <Typography variant="h2" fontWeight="300" >Everything in one place</Typography>,
    description: 'Our app will allow you to see your complete itinerary, day by day, including maps, tickets, images and reviews as well as chat with your personal specialist any time you have a question or need to make a change.',
    image: <Box component="img" src='/img/content/three-phone-mockup.webp' alt="" sx={{ height: { xs: 300, sm: 200, md: 400 }, width: { xs: 300, sm: 200, md: 400 } }} />,
    alt: 'Private Travel',
    // cta: <Box component="img" src='/img/coming-soon.gif' alt="text of coming soon in flashing green and blue" height="166px" width="228px" sx={{ mt: 5, alignSelf: "center" }} />,
    cta: <Box component="div" sx={{ m:2 }}><AppleAppStoreButton /></Box>,
    orientation: { imageSide: 2, textSide: 1 }
  }
]

export default AppPreviews;


