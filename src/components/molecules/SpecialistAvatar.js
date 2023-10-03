import { Avatar, Box, Typography } from '@mui/material';

const SpecialistAvatar = ({ specialist }) => {
  const { firstName, lastName, title, image, id } = specialist;
  return (
    <Box component="a" href={`/explore/${id}`} sx={{ textDecoration: 'none', mx: 'auto' , mt: { xs: 4, sm: 3} }}>
      <Avatar src={image} sx={{ height: 200, width: 200 }}/>
      <Typography variant="h5" align="center" sx={{mt: { xs: 3, sm: 3}}}>
        {firstName} {lastName}
      </Typography>
      <Typography variant="h5" align="center" color="secondary.main" sx={{mt: { xs: 1, sm: 1}}}>
        {title}
      </Typography>
    </Box>
  );
};

export default SpecialistAvatar;