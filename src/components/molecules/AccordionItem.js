import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionItem = ({ content }) => {
  const { question, answer, order } = content;

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === `panel${order}`}
      onChange={handleChange(`panel${order}`)}
      sx={{ backgroundColor: 'transparent', boxShadow: 'none'}}
    >
      <AccordionSummary
        id={`panel${order}bh-header`}
        aria-controls={`panel${order}bh-content`}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography sx={{ width: '100%', flexShrink: 0, fontSize: '16px', fontWeight: '500' }}>
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="#000" align="justify">
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionItem;