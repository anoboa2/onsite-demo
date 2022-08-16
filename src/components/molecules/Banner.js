import { Grid, Typography } from '@mui/material';

const Banner = ({ content }) => {
  const { title, subtitle, cta, background } = content;

  const style = {
    px: { xs: 2, sm: 10},
    py: 5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundImage: `url(${background})`,
    backgroundSize: {xs: 'cover', md: '100%'},
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
  }

  return (
    <Grid container spacing={{xs: 1, sm: 3}} sx={style}>
      <Grid item xs={12}>
        <Typography variant='h4'>{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body1' sx={{ px: { xs: 1, sm: 10 } }}>{subtitle}</Typography>
        </Grid>
      <Grid item xs={12}>
        {cta}
      </Grid>
    </Grid>
  );
}

export default Banner;