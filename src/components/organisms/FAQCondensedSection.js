import { Box, Grid, Typography } from '@mui/material';
import AccordionItem from '../molecules/AccordionItem';
import { CondensedSection } from '../../content/FAQs';

const FAQCondensedSection = () => {

  return (
    <Grid container sx={{ my: 12 }}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center">
          Have Questions?
        </Typography>
        <Typography variant="subtitle1" align="center">
          We've got all your answers right here
        </Typography>
      </Grid>
        <Box sx={{ mt: 6, display: 'flex', justifyContent: "space-around", borderRadius: 50 }}>
          <Box sx={{ px: "15%" }}>
            {CondensedSection.map((faq) => (
              <AccordionItem key={faq.order} content={faq} />
            ))}
          </Box>
        </Box>
    </Grid>
  )
}

export default FAQCondensedSection;