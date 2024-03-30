import React from 'react'
import  Navbar  from '../components/Navbar.js'
import { Box, Paper,Divider, Typography } from '@mui/material'
import Footer from '../components/Footer.js'

import men from '../images/1.jpg'
import { useTranslation } from 'react-i18next'



 const About = () => {

const {t}=useTranslation();

  return (
    <Box>

      <Navbar />
        <Paper className='about' sx={{backgroundColor:'black'  }}>
          <Box className='about-image-container'>
                <img src={men} className='about-img' alt='javidbaku'/>
          </Box>
      
          <Typography variant='h6' className='about-p'> 
            
{t('aboutme')}
          </Typography>
        </Paper>

<Box>


</Box>
   
      
        <Divider/>
      <Footer/>
    </Box>
 
    )
}


export default About;