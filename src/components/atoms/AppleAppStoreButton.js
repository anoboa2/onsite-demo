import { IconButton, Link } from '@mui/material';

const AppleAppStoreButton = () => {
  return (
    <IconButton
      edge='start'
      color='inherit'
      aria-label='menu'
      sx={{ p:2, '&:hover': { backgroundColor: '#fff' } }}
    >
      <Link
        underline="none"
        href="https://apps.apple.com/us/app/onsite-we-plan-you-enjoy/id1659976501"
        target="_blank"
      >
        <img
            src="/img/apple-app-store.jpeg"
            alt="Apple App Store logo"
            height='55px'
            width='188px'
        />
      </Link>
    </IconButton>
  );
}

export default AppleAppStoreButton;