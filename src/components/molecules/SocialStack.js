import { Box, Stack, Link } from '@mui/material';

const iconStyle = {
  width: 48,
  height: 48,
  borderRadius: "10px",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'primary.light',
  mr: 1,
  '&:hover': {
    bgcolor: "#0FAACD",
  },
};

const socials = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/OnsiteTravelPlanning/',
    icon: '/icon/facebook.png',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/Onsitetravelapp/',
    icon: '/icon/instagram.png',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/OnsiteTravelApp',
    icon: '/icon/twitter.png',
  }
]

const SocialStack = () => {
  return (
    <Stack spacing={1} direction="row">
      {socials.map(({ name, url, icon }) => (
        <Link href={url} key={name}>
          <Box sx={iconStyle}>
            <img src={icon} alt={name} height={30} width={30}/>
          </Box>
        </Link>
      ))}
    </Stack>
  );
}

export default SocialStack;