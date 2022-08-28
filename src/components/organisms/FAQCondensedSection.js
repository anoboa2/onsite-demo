import { Box, Grid, Typography } from '@mui/material';
import AccordionItem from '../molecules/AccordionItem';

const FAQCondensedSection = ({ faqsection }) => {

  return (
    <Grid container sx={{ my: 12 }}>
      <Grid item xs={12}>
        <Typography variant="h2" align="center">
          Have Questions?
        </Typography>
        <Typography variant="subtitle1" color="text.primary" align="center" marginTop={2}>
          We've got all your answers right here
        </Typography>
      </Grid>
        <Box sx={{ mt: 6, display: 'flex', justifyContent: "space-around", borderRadius: 50 }}>
          <Box sx={{ px: "15%" }}>
            {faqsection && faqsection.map((faq) => (
              <AccordionItem key={faq.order} content={faq} />
            ))}
          </Box>
        </Box>
    </Grid>
  )
}

export default FAQCondensedSection;

