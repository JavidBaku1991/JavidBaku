import React from 'react'
import Navbar from '../components/Navbar';
import { Box, Typography } from '@mui/material';

import Footer from '../components/Footer';
import colorstheme from  '../data/theme.js'
import FaqsMotion from './FaqsMotion.js';
import AccordionElement from './Accordion.js';
import { useTranslation } from 'react-i18next';

const colors=colorstheme;
const moveValues=
  {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
  }
const moveValuesLeft=
  {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  }

 const FAQS = () => {

  const {t}=useTranslation();
  return (
    <Box>
         <Navbar/>
 
    <Box className='faqs'>
 



<FaqsMotion duration={{ duration: 1.5 }} move={ moveValues} >
 <Typography variant='h2' sx={{marginLeft:'10%',color:colors.bronze1, marginTop:'90px'}} >{t("questions")}</Typography>
</FaqsMotion>

    <Typography variant='h6' sx={{marginLeft:'10%',color:colors.bronze1}} > {t('subheading1')}  <span className='faqs-span'>   {t('subheading2')}</span></Typography>

   
    <Box mr="10px">
      <Box className='questions'>

 <FaqsMotion duration={{duration:.5}} move={moveValues}  > 
        <Box className='accordion-faqs'> 
        <AccordionElement question={t("question1")} answer={t("answer1")}  />
        </Box>
</FaqsMotion>


<FaqsMotion duration={{duration:1.6}} move={moveValuesLeft} >
<Box className='accordion-faqs'>
<AccordionElement 
question={t("question2")} answer ={t("answer2")}/>
</Box></FaqsMotion>

 <FaqsMotion duration={{duration:2.3}} move={moveValues} >
<Box className='accordion-faqs'> 
<AccordionElement  
question={t("question3")} answer={t("answer3")}
/>
</Box></FaqsMotion>
</Box>
 </Box>
<Footer/>
    </Box>
    </Box>
   
   
  
  )
}


export default FAQS;