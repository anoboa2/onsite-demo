import { Card, CardContent, CardMedia, CardActionArea, Typography , Box , Avatar, Grid} from "@mui/material";
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

const Advisors = [
  {
    id: 'izanna.lev'
  }
  // {
  //   firstName: 'Alyssa',
  //   lastName: 'Chlebek',
  //   title: "Specialist",
  //   image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/alyssaandthecity/profile.jpeg',
  //   id: 'alyssaandthecity'
  // },
  // {
  //   firstName: 'Mustafa',
  //   lastName: 'Ansari',
  //   title: "Specialist",
  //   image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/mustafa23ansari/profile.jpeg',
  //   id: 'mustafa23ansari'
  // }
]

const PopularCountryCard = (content) => {
  const { image, alt, title, description } = content; 
  

  return (

    <Grid  >
     {Advisors.map(({ id }) => ( 

    <Card sx={{ maxWidth: 400}}>

    <CardActionArea href={`/explore/${id}`}>
      <CardMedia
        component='img'
        alt={alt}
        height='250'
        image={image}
        
      />
      
      <CardContent >
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
      </CardActionArea>
     
    </Card>
    
     ))}

     </Grid>
  );
}

export default PopularCountryCard;