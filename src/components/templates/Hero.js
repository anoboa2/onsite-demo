import { Box } from "@mui/material";

const Hero = ({ children, image }) => {

  const style = image ? (
    {
      backgroundImage: image,
      backgroundSize: "cover",
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
    }
  ) : {};

  return (
    <Box
      component="div"
      sx={{
        height: { xs: '75vh', sm: '500px' },
        width: '100%',
        display: 'block',
        position: 'relative',
        ...style
      }}
    >
      {children}
    </Box>
)};

export default Hero;