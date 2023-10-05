import { Box, Link, Stack } from '@mui/material';

const iconStyle = {
  width: 28,
  height: 28,
  borderRadius: "6px",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'primary.light',
  mr: 1,
  '&:hover': {
    bgcolor: "#0FAACD",
  },
};

const SpecialistSocials = ({ socials }) => {
  return (
    <Stack spacing={1} direction="column" sx={{ display: 'flex', justifyItems: 'center', mt: -1, mb: 1 }}>
    {socials.instagram && (
      <Link href={`https://instagram.com/${socials.instagram}`} underline="hover" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Box sx={ iconStyle }>
          <Box component="img" src="/icon/instagram.png" alt="instagram logo" height={24} width={24} />
        </Box>
          {socials.instagram}
      </Link>
    )}
    {socials.tiktok && (
      <Link href={`https://tiktok.com/@${socials.tiktok}`} underline="hover" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Box sx={ iconStyle }>
          <Box component="img" src="/icon/tiktok.png" alt="tiktok logo" height={24} width={24} />
        </Box>
          {socials.tiktok}
      </Link>
    )}
    {socials.twitter && (
      <Link href={`https://twitter.com/${socials.twitter}`} underline="hover" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Box sx={ iconStyle }>
          <Box component="img" src="/icon/twitter.png" alt="twitter logo" height={24} width={24} />
        </Box>
          {socials.twitter}
      </Link>
    )}
    {socials.youtube && (
      <Link href={`https://youtube.com/${socials.youtube}`} underline="hover" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Box sx={ iconStyle }>
          <Box component="img" src="/icon/youtube.png" alt="youtube logo" height={24} width={24} />
        </Box>
          {socials.youtube}
      </Link>
    )}
    </Stack>
  );
}

export default SpecialistSocials; 