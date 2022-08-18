import { Box, Grid, Typography } from '@mui/material';
import AccordionItem from '../molecules/AccordionItem';
import { AboutSection , SpecialistSection, TravelerSection } from '../../content/FAQs';

const Sections = [
  {
    title: 'About Onsite',
    content: AboutSection,
  },
  {
    title: 'Specialist',
    content: SpecialistSection,
  },
  {
    title: 'Travelers',
    content: TravelerSection,
  },
]

const FAQSection = () => {
  return (
    <Grid container spacing={3} sx={{ py: 10, px: {xs: 1, sm: 3, md: 8} }}>
      {Sections.map((section) => (
          <Grid item xs={12} sx={{ mt: 6, display: 'flex', justifyContent: "center", borderRadius: 50 }}>
          <Box sx={{ display: 'flex', flexDirection: "column" }}>
            <Typography variant="h4" component="h1" align="center">
              {section.title}
            </Typography>
            <Box sx={{ px: "10%" }}>
              {section.content.map((faq) => (
                <AccordionItem key={faq.order} content={faq} />
              ))}
            </Box>
          </Box>
          </Grid>
      ))}
    </Grid>
  )
}

export default FAQSection;