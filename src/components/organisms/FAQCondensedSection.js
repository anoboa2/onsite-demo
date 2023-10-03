import { Box, Typography } from '@mui/material';
import AccordionItem from '../molecules/AccordionItem';

const FAQCondensedSection = ({ faqsection }) => {

  return (
    <Box component="div" sx={{ display: 'block' }}>
      <Typography variant="h2" align="center">
        Have Questions?
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.primary" sx={{ mt: 2 }}>
        We've got all your answers right here
      </Typography>
      <Box component="div" sx={{ display: 'block', mt: 6 }}>
      {faqsection && faqsection.map((faq) => (
        <AccordionItem key={faq.order} content={faq} />
      ))}
      </Box>
    </Box>
  )
}

export default FAQCondensedSection;

