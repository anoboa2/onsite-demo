import { Typography } from '@mui/material'
import EmailSubscribeButton from '../components/atoms/EmailSubscribeButton';
import Banner from '../components/templates/Banner'

const SubscribeEmailBanner = () => {
  return (
    <Banner>
      <Typography>Not ready to book yet?</Typography>
      <Typography>Sign up to receive our latest travel tips and inspiration.</Typography>
      <EmailSubscribeButton />
    </Banner>
  )
}

export default SubscribeEmailBanner;