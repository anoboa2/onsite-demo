import { Avatar, Box, Grid, Typography } from '@mui/material';

const Advisors = [
  {
    firstName: 'Izanna',
    lastName: 'Levintova',
    image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/izanna.lev/profile.jpeg',
    id: 'izanna.lev'
  },
  {
    firstName: 'Alyssa',
    lastName: 'Bennett',
    image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/alyssaandthecity/profile.jpeg',
    id: 'alyssaandthecity'
  },
  {
    firstName: 'Mustafa',
    lastName: 'Ansari',
    image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/mustafa23ansari/profile.jpeg',
    id: 'mustafa23ansari'
  }
]

const PopularAdvisors = () => {
  return (
    <Grid container spacing={2} sx={{ alignContent: 'center', justifyContent: 'center' }}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" gutterBottom sx={{ pb: 2 }}>
          Popular Advisors
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        {Advisors.map(({ firstName, lastName, image, id }) => (
          <Grid item key={id} xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
            <Box component="a" href={`/explore/${id}`} sx={{ textDecoration: 'none', mx: 'auto' }}>
                <Avatar src={image} sx={{ height: 200, width: 200 }}/>
                <Typography variant="h5" align="center">
                  {firstName} {lastName}
                </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default PopularAdvisors;