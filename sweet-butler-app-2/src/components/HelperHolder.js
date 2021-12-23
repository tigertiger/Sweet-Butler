import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import Helper from './Helper';

export default function HelperHolder() {
  return (
    <div>
      <Accordion id="accrobion" sx={{backgroundColor:'transparent', margin:'2% auto'}}>
        <AccordionSummary expandIcon={<ExpandCircleDownOutlinedIcon sx={{padding:'0 0 0 5px',}} />}>
          <Typography>Add Something to Your List</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Helper />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}