import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import AmbassadorsContent from '../../content/Ambassadors';
import RecommendedItineraries from '../../content/RecommendedItineraries';

const Ambassador = () => {
  const { id } = useParams();
  const history = useHistory();

  // use the id to make a get request to an external api url to get the ambassador
  const ambassador = () => {
    fetch(`https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/planning/getallambassadors`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data.records[0];
      }
      );
  }


  return (
    <Grid container spacing={2} sx={{ mt: 10 }}>
      <Grid item xs={12}>
        <Typography variant="h6">
          Our Ambassadors
        </Typography>
      </Grid>
      <Grid container item xs={12} sm={6} md={4}>
        {AmbassadorsContent.map((ambassador) => (
          <Grid item key={ambassador.name} xs={12}>
            <Card>
              <CardMedia
                image={ambassador.img}
                title={ambassador.alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {ambassador.name}
                </Typography>
                <Typography>
                  {ambassador.handle}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {ambassador.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h6">
          Recommended Itineraries
        </Typography>
      </Grid>
      <Grid container item xs={12} sm={6} md={4}>
        {RecommendedItineraries.map((itinerary) => (
          <Grid item key={itinerary.name} xs={12}>
            <Card>
              <CardMedia
                image={itinerary.img}
                title={itinerary.alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {itinerary.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {itinerary.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Ambassador;