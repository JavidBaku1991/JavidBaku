import React from 'react'
import Navbar from '../components/Navbar';
import { Box, Typography } from '@mui/material';
import Footer from '../components/Footer.js';
import YouTubePlayer from '../components/YouTubePlayer.js';
import Carousel from '../components/Carousel.tsx';
import FaqsMotion from './FaqsMotion.js';
import  PhotosList  from '../components/PhotosList.js'

import { useTranslation } from 'react-i18next';



 const Home = () => {

const {t}=useTranslation();

  return (
    <>
    <Box className='flex-column'>
    <Box  className='home'>
    
              
    <Navbar  /> 
<Box className='home-hero'>
  
    <Box className='home-hero'>
      <Box className='carousel-hero'>
    <Carousel />
  </Box>
  <Box  className='hero-header-slider' > 
     <FaqsMotion move={{
                  hidden: { opacity: 0, y: 70 },
                  visible: { opacity: 1, x: 50 },
                }}
                duration={{duration:2}}>
                            <h1  className='hero-header-up'> {t("welcome")}</h1>

        </FaqsMotion>
     <FaqsMotion move={{
                  hidden: { opacity: 0, x: 0 },
                  visible: { opacity: 1, y: 30 },
                }}
                duration={{duration:2}}>
                            <h3  className='hero-header-down'>{t("tomywebsite")}</h3>

        </FaqsMotion>
  </Box>

</Box>   
</Box>

</Box>   
<Box className='videos'>
<FaqsMotion move={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, x: 80 },
                }}
                duration={{duration:2}}>
       <Typography variant='h3' className='hero-video-header'>{t("videos")}</Typography>
</FaqsMotion>
<Box className='videos-container'>                 
<Box className='home-videos'>
  
  <YouTubePlayer youtubeLink='jH9IqbN4Vnw'  />
  <YouTubePlayer youtubeLink='twOc-lR5gD8'  />
  <YouTubePlayer youtubeLink='0a1PHxHdYJ4' />
  <YouTubePlayer youtubeLink='7HltUfJ1jL4'  />
  <YouTubePlayer youtubeLink='KCMiPHCPQJg'  />
  <YouTubePlayer youtubeLink='fMTgqKliDc4' />
  <YouTubePlayer youtubeLink='sRxQf7r5Ajo'  />
  <YouTubePlayer youtubeLink='Ma6rVUR63gc' />

        
</Box>
</Box>
</Box> 

    <Box className='photolist'>
      <PhotosList/>
    </Box>
    <Box className='home-footer-container'>
       <Footer/>
    </Box>

    </Box>
   
   
   
    </>




    )
}


export default Home;