import { Button , Typography } from '@mui/material';
import Banner from '../../templates/Banner'

const SpecialistSignupBanner = () => {
  return (
    <Banner>
      <Typography
        variant="h4"
        align="center"
        sx={{
          pb: 1
        }}
      >
        Think you have what it takes to become a specialist?
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          pb: 1
        }}
      >
        We're looking for experienced travlers who are passionate about planning the best experiences!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="https://tally.so/r/3laB76"
        target="_blank"
        sx={{
          my: 2
        }}
      >
        Apply to Join Onsite
      </Button>
    </Banner>
  )
}

export default SpecialistSignupBanner;