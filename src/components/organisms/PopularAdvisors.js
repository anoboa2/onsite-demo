import { Avatar, Box, Grid, Typography } from '@mui/material';

const Advisors = [
  {
    firstName: 'Izanna',
    lastName: 'Levintova',
    title: "Advisor",
    image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/izanna.lev/profile.jpeg',
    id: 'izanna.lev'
  },
  {
    firstName: 'Alyssa',
    lastName: 'Chlebek',
    title: "Advisor",
    image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/alyssaandthecity/profile.jpeg',
    id: 'alyssaandthecity'
  },
  {
    firstName: 'Mustafa',
    lastName: 'Ansari',
    title: "Advisor",
    image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/mustafa23ansari/profile.jpeg',
    id: 'mustafa23ansari'
  }
]

const PopularAdvisors = () => {
  return (
    <Grid  container spacing={3} sx={{ px: { xs: 3, sm: "20%" }, py: 5, mb: 10, mt: { xs: 12, sm: 8 }, overflow: "hidden" }}>
      <Grid item xs={12}>
        <Typography variant="h2"  fontWeight="300" align="left" sx={{ py: 1,  mt: { xs: -3, sm: -10 } , mb: { xs: 8, sm: 8 } ,  textAlign:{ xs: "center" , sm: "center" }}} color="primary.contrastText">Our Popular <b>Advisors</b></Typography>
      </Grid>
      <Grid container spacing={3}>
        {Advisors.map(({ firstName, lastName, title, image, id }) => (
          <Grid item key={id} xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' , mt: { xs: -2, sm: -2} }}>
            <Box component="a" href={`/explore/${id}`} sx={{ textDecoration: 'none', mx: 'auto' , mt: { xs: 4, sm: 3} }}>
                <Avatar src={image} sx={{ height: 200, width: 200 }}/>
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
    </Grid>
  )
}

export default PopularAdvisors;