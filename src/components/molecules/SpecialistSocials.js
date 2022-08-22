import { Link, Stack } from '@mui/material';

const SpecialistSocials = ({ socials }) => {
  return (
    <Stack spacing={1} direction="column">
      {socials.instagram && (
        <Link href={`https://instagram.com/${socials.instagram}`}>@{socials.instagram}</Link>
      )}
      {socials.tiktok && (
        <Link href={`https://tiktok.com/@${socials.tiktok}`}>@{socials.tiktok}</Link>
      )}
      {socials.twitter && (
        <Link href={`https://twitter.com/${socials.twitter}`}>@{socials.twitter}</Link>
      )}
      {socials.facebook && (
        <Link href={`https://facebook.com/${socials.facebook}`}>@{socials.facebook}</Link>
      )}
      {socials.youtube && (
        <Link href={`https://youtube.com/${socials.youtube}`}>@{socials.youtube}</Link>
      )}
    </Stack>
  );
}

export default SpecialistSocials; 