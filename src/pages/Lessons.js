import React from 'react'
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Typography } from '@mui/material';
import YouTubePlayer from '../components/YouTubePlayer';
import FaqsMotion from './FaqsMotion.js';
import { useTranslation } from 'react-i18next';
 const Lessons = () => {


const {t}=useTranslation();

  return (
<Box className='lessons'> 
        <Navbar />
        <Box className='lessons-header'>
                    <FaqsMotion duration={{ duration: 1.5 }} move={   {
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}>
                        <Typography variant='h2'>{t("lessonsheading")}</Typography>
                        
                    </FaqsMotion>
            </Box>
            <Box className='lessons-container'> 
                   <Box className='lessons-list'>
                  <Box>
                        <YouTubePlayer youtubeLink='0LegO-u1JpU' className='home-video ' /> 
                  
                    <Typography variant='h5' className='lessons-subheader'>{t('lesson1')}</Typography>
                  </Box>


                  <Box>
                        <YouTubePlayer youtubeLink='_8rRp8A_6OQ' className='home-video ' />
                   
                     
                     <Typography variant='h5' className='lessons-subheader'>{t('lesson2')} </Typography>
                    </Box>
                 
                    <Box>
                                <YouTubePlayer youtubeLink='vyyWIhvzfX0' className='home-video  ' />
                       
                    
                    <Typography variant='h5' className='lessons-subheader'>{t('lesson3')} </Typography>
                    </Box>
                  
             <Box>
               
                    <YouTubePlayer youtubeLink='vRr1PvITdcY' className='home-video ' />
               
                    <Typography variant='h5' className='lessons-subheader'>{t('lesson4')} </Typography>
             </Box>

              <Box>
               
                     <YouTubePlayer youtubeLink='9_1mPDvGDnw' className='home-video ' />
                                  
                     <Typography variant='h5' className='lessons-subheader'>{t('lesson5')} </Typography>
             </Box> 
                 

             <Box>
               
                     <YouTubePlayer youtubeLink='Fy8ogjbp3vc' className='home-video  ' />
                                 
                    <Typography variant='h5' className='lessons-subheader'>{t('lesson6')}</Typography>
               </Box>

               <Box>
               
                <YouTubePlayer youtubeLink='Kp7BXGFX_zs' className='home-video ' />
               
                      <Typography variant='h5' className='lessons-subheader'>{t('lesson7')}</Typography>
               </Box>
                  
            
               <Box>
               
                       <YouTubePlayer youtubeLink='818DYRexviM' className='home-video ' /> 
                              
                    <Typography variant='h5' className='lessons-subheader'>{t('lesson8')}</Typography>
               </Box>
                  
               <Box>
               
                     <YouTubePlayer youtubeLink='xKyMZBqmn50' className='home-video  ' />
                                   
                     <Typography variant='h5' className='lessons-subheader'>{t('lesson9')} </Typography>
               </Box>
                 

               <Box>
                        <YouTubePlayer youtubeLink='VNW5EeQPS-o' className='home-video ' />
                                     
                     <Typography variant='h5' className='lessons-subheader'>{t('lesson10')}</Typography>
               </Box>

               <Box>
               
                     <YouTubePlayer youtubeLink='3jv0XQAjDDk' className='home-video ' />
               
                    
                     <Typography variant='h5' className='lessons-subheader'>{t('lesson11')} </Typography>
               </Box>
                 
            
               <Box>
               
                    <YouTubePlayer youtubeLink='4li2NWig6Xs' className='home-video  ' />
                              
                    <Typography variant='h5' className='lessons-subheader'>{t('lesson12')} </Typography>
               </Box>
                 
                  
                
               <Box>
               
                     <YouTubePlayer youtubeLink='V5X-g5xoOIE' className='home-video ' />
              
                    
                     <Typography variant='h5' className='lessons-subheader'>{t('lesson13')}</Typography>
               </Box>
                 

               <Box>
               
                     <YouTubePlayer youtubeLink='4cGEwzNYoNQ' className='home-video ' />
              
                    
                     <Typography variant='h5' className='lessons-subheader'>{t('lesson14')} </Typography>
               </Box>

               <Box>
               
                     <YouTubePlayer youtubeLink='BA4Gcb5-ULI' className='home-video  ' />
              
                    
                     <Typography variant='h5' className='lessons-subheader'>{t('lesson15')}</Typography>
               </Box>
                 
                 
               <Box>
               
                      <YouTubePlayer youtubeLink='i-L8MAULGX8' className='home-video ' />
              
                  
                    <Typography variant='h5' className='lessons-subheader'>{t('lesson16')} </Typography>
               </Box>
                  
               <Box>
               
                     <YouTubePlayer youtubeLink='BA4Gcb5-ULI' className='home-video ' />
              
                   
                    <Typography variant='h5' className='lessons-subheader'>{t('lesson17')} </Typography>
               </Box>
                  


              
               <Box>
               
                      <YouTubePlayer youtubeLink='7v8XK4PHecM' className='home-video ' />
              
                 <Typography variant='h5' className='lessons-subheader'>{t('lesson18')}</Typography>
               </Box>
                  

               <Box>
               
                      <YouTubePlayer youtubeLink='ppzjvvujVEk' className='home-video  ' />
              
                  
                    <Typography variant='h5' className='lessons-subheader'>{t('lesson19')}</Typography>
               </Box>


               <Box>
               
                 <YouTubePlayer youtubeLink='ufPtlkC6oNU' className='home-video ' />  
                           
                     <Typography variant='h5' className='lessons-subheader'>{t('lesson20')}</Typography>
               </Box>
                  
               <Box>
               
                      <YouTubePlayer youtubeLink='yE165QmtPkQ' className='home-video ' />
              
                  
                    <Typography variant='h5' className='lessons-subheader'>{t('lesson21')}</Typography>
               </Box>
                 
               <Box>
               
                         <YouTubePlayer youtubeLink='jNFAnV129mo' className='home-video  ' />
              
                
                     <Typography variant='h5' className='lessons-subheader'>{t('lesson22')}</Typography>
               </Box>
                 
               <Box>
               
                   <YouTubePlayer youtubeLink='o7AzOdCNzFE' className='home-video ' />
              
                 
                    <Typography variant='h5' className='lessons-subheader'>{t('lesson23')}</Typography>
               </Box>
                  

               <Box>
               
                     <YouTubePlayer youtubeLink='PEdiCxZARC8' className='home-video ' />
              
                    
                     <Typography variant='h5' className='lessons-subheader'>{t('lesson24')}</Typography>
               </Box>

               <Box>
               
                    <YouTubePlayer youtubeLink='z1IJ7mAQT-k' className='home-video  ' />
              
                   
                     <Typography variant='h5' className='lessons-subheader'>{t('lesson25')}</Typography>
               </Box>
                 

               <Box>
               
                       <YouTubePlayer youtubeLink='YGhCzhVAz9g' className='home-video ' />
              
                 
                    <Typography variant='h5' className='lessons-subheader'>{t('lesson26')}</Typography>
               </Box>
                 
                  
               <Box>
               
                     <YouTubePlayer youtubeLink='aeYS_ePpmX4' className='home-video ' />
              
                    
                     <Typography variant='h5' className='lessons-subheader'>{t('lesson27')} </Typography>
               </Box>
                 
                
                
                        
              </Box>
         </Box>


        

        <Box className='footer-contaner'>
          <Footer/>
            </Box> 
</Box>
    )
}


export default Lessons;