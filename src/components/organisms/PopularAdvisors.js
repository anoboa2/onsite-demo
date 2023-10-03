import { Avatar, Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const Advisors = [
  {
    firstName: 'Izanna',
    lastName: 'Levintova',
    title: "Specialist",
    image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/izanna.lev/profile.jpeg',
    id: 'izanna.lev'
  },
  {
    firstName: 'Alyssa',
    lastName: 'Chlebek',
    title: "Specialist",
    image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/alyssaandthecity/profile.jpeg',
    id: 'alyssaandthecity'
  },
  {
    firstName: 'Mustafa',
    lastName: 'Ansari',
    title: "Specialist",
    image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/mustafa23ansari/profile.jpeg',
    id: 'mustafa23ansari'
  }
]

const PopularAdvisors = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" color="primary.contrastText">Our Popular Specialists</Typography>
      <Grid container spacing={3}>
        {Advisors.map(({ firstName, lastName, title, image, id }) => (
          <Grid key={id} xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
            <Box component="a" href={`/explore/${id}`} sx={{ textDecoration: 'none', mx: 'auto' , mt: { xs: 4, sm: 3} }}>
              <Avatar src={image} sx={{ height: 200, width: 200 }} />
              <Typography variant="h5" align="center" sx={{mt: { xs: 3, sm: 3}}}>
                {firstName} {lastName}
              </Typography>
              <Typography variant="h5" align="center" color="secondary.main" sx={{mt: { xs: 1, sm: 1}}}>
                {title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default PopularAdvisors;