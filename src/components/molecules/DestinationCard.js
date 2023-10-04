import { Box, Typography } from '@mui/material';

const DestinationCard = ({ destination, image, path }) => {
  return (
    <Box
      component="a"
      href={path}
      sx={{
        textDecoration: 'none'
      }}
    >
      <Box
        component="div"
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${image})`,
          backgroundSize: 'cover',
          borderRadius: '20px',
          m: '30',
          px: 2,
          minHeight: '350px',
          maxHeight: '500px',
          minWidth: '250px',
          maxWidth: '280px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'background 500ms ease-in-out',
          '&:hover': {
            background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${image})`,
            backgroundSize: 'cover'
          }
        }}
      >
        <Typography
          variant="h3"
          color="white"
        >
          {destination}
        </Typography>
      </Box>
    </Box>
  )
}

export default DestinationCard;