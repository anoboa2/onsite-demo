import { IconButton, Link } from '@mui/material';

const GooglePlayStoreButton = () => {
  return (
    <IconButton
      edge='start'
      color='inherit'
      aria-label='menu'
      sx={{ p: 2, '&:hover': { backgroundColor: '#fff' } }}
    >
      <Link
        underline="none"
        href="https://apps.apple.com/us/app/onsite-for-students/id1498425701"
      >
        <img
            src="/img/google-play-store.jpeg"
            alt="Google Play Store logo"
            height='55px'
            width='188px'
        />
      </Link>
    </IconButton>
  );
}

export default GooglePlayStoreButton;