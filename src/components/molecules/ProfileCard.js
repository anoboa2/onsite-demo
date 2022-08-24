import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import SpecialistSocials from './SpecialistSocials';

const ProductCard = ({ content, onClick }) => {
  const { name, bio, id, image_url, socials  } = content;

  return (
    <Card key={id} sx={{ width: '80%' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box component="img" src={image_url} sx={{ height: 300, width: 300, objectFit: 'cover' }}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>{name}</Typography>
              <SpecialistSocials socials={socials}/>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>About</Typography>
              <Typography variant="body1">{bio}</Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ProductCard;