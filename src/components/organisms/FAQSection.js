import { Box, Typography } from '@mui/material';
import AccordionItem from '../molecules/AccordionItem';
import { AboutSection , SpecialistSection, TravelerSection } from '../../content/faqs';

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
    <Box component="div" sx={{ display: 'block' }}>
      {Sections.map((section) => (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", borderRadius: 50 }}>
          <Typography variant="h3" component="h1" align="center" sx={{ mt: 4, py: 1 }}>
            {section.title}
          </Typography>
          <Box sx={{ px: "5%" , mt: 2}}>
          {section.content.map((faq) => (
            <AccordionItem key={faq.order} content={faq} />
          ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default FAQSection;