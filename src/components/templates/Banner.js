import { Box } from "@mui/material";

const Banner = ({ children }) => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        px: { xs: 2, sm: 10},
        py: 5,
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: `url("/img/BannerBackground.webp")`,
        backgroundSize: {xs: 'cover', md: '100%'},
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ width: '95%', maxWidth: '1400px' }}>
        {children}
      </Box>
    </Box>
)};

export default Banner;