import { Card, CardContent, CardMedia, Typography , Box , Avatar} from "@mui/material";
import styled from "styled-components";


const AvatarContainer = styled.div`
  display: flex;
  margin-bottom: 14px;
  & > * {
    margin: 4px;
  }
`;

const AvatarLabel = styled.div`
  display: flex;
  align-items: center;
`;

const PopularCountryCard = (content) => {
  const { image, alt, title, description, imagenSpecialist } = content; 
  

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component='img'
        alt={alt}
        height='250'
        image={image}
      />
      <CardContent>
        <Typography variant="h5" sx={{mt: {xs: 2 , sm: 2} , mb: {xs: 2 , sm: 2}}}>{title}</Typography>
        {/* <Typography variant="body1"  sx={{mt: {xs: 2 , sm: 2} , mb: {xs: 2 , sm: 2}}}>{description}</Typography> */}

      <AvatarContainer>
      <AvatarLabel>
        <Avatar
          style={{ marginRight: "14px" }}
          alt="Izanna Levintova"
          src='/img/team/IzannaL-Profile.jpg'
        />
        <Typography variant="body2" fontSize={13} fontWeight={400}>{description} <br />
        <Box component="span" fontWeight={500} sx={{ color:"secondary.main"}} >Izanna L.</Box>
        </Typography>
      </AvatarLabel>
      </AvatarContainer>

      </CardContent>
    </Card>
  );
}

export default PopularCountryCard;