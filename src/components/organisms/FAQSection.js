import { Box, Grid, Typography } from '@mui/material';
import AccordionItem from '../molecules/AccordionItem';
import { AboutSection , SpecialistSection, TravelerSection } from '../../content/FAQs';

const FAQSection = () => {
  return (
    <Grid container spacing={3} sx={{ px: 10 }}>
      <Grid item xs={12} md={6} sx={{ mt: 6, display: 'flex', justifyContent: "space-around", borderRadius: 50 }}>
      <Box sx={{ display: 'flex', flexDirection: "column" }}>
        <Typography variant="h4" component="h1" align="center">
          About Onsite
        </Typography>
        <Box sx={{ px: "15%" }}>
          {AboutSection.map((faq) => (
            <AccordionItem key={faq.order} content={faq} />
          ))}
        </Box>
      </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{ mt: 6, display: 'flex', justifyContent: "space-around", borderRadius: 50 }}>
      <Box sx={{ display: 'flex', flexDirection: "column" }}>
        <Typography variant="h4" component="h1" align="center">
          Specialist
        </Typography>
        <Box sx={{ px: "15%" }}>
          {SpecialistSection.map((faq) => (
            <AccordionItem key={faq.order} content={faq} />
          ))}
        </Box>
      </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{ mt: 6, display: 'flex', justifyContent: "space-around", borderRadius: 50 }}>
      <Box sx={{ display: 'flex', flexDirection: "column" }}>
        <Typography variant="h4" component="h1" align="center">
          Travelers
        </Typography>
        <Box sx={{ px: "15%" }}>
          {TravelerSection.map((faq) => (
            <AccordionItem key={faq.order} content={faq} />
          ))}
        </Box>
      </Box>
      </Grid>
    </Grid>
  )
}

export default FAQSection;