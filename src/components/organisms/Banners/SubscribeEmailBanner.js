import { Typography } from '@mui/material'
import EmailSubscribeButton from '../../atoms/EmailSubscribeButton';
import Banner from '../../templates/Banner'

const SubscribeEmailBanner = () => {
  return (
    <Banner>
      <Typography
        variant="h4"
        align="center"
        sx={{
          pb: 1
        }}
      >
        Not ready to book yet?
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          mb: 2
        }}
      >
        Sign up to receive our latest travel tips and inspiration.
      </Typography>
      <EmailSubscribeButton />
    </Banner>
  )
}

export default SubscribeEmailBanner;