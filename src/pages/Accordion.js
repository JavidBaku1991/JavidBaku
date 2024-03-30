import React from 'react'
import { Typography } from '@mui/material';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import colorstheme from  '../data/theme.js'

 const AccordionElement = ({question,answer}) => {

    const colors=colorstheme;

  return (
    <Accordion  sx={{backgroundColor:colors.bronze1,borderRadius:'10px'}}> 
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography  variant="h5">
        {question}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
       {answer}
      </Typography>
    </AccordionDetails>
  </Accordion >
  )
}


export default AccordionElement;