import React from 'react'
import Logo from '../images/jb.png'
import { Box} from '@mui/material'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HomeIcon from '@mui/icons-material/Home';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from 'react-router-dom'
import { motion } from "framer-motion";
import FaqsMotion from '../pages/FaqsMotion';
import { useTranslation } from 'react-i18next';

 const Footer = () => {

  const {t}=useTranslation();
  return (
<footer  className='footer-container' >
    <Box className='footer'>
        <Box className='footer-up'>
                  <FaqsMotion sx={{width:'33%'}}
            duration={{ duration: 0.5 }}
            move={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }} >
        <img  src={Logo} className='footer-logo' alt='image'/>
        <Box sx={{display:'flex',flexDirection:'column'}} className='footer-info-container'>      
              <h3 className='footer-info'><PhoneAndroidIcon  className='footer-icon' />+(994)70-920-97-47 </h3>
              <h3 className='footer-info'>  <MarkEmailReadIcon className='footer-icon'/>  cavid-de-baku91@mail.ru </h3>
              <h3 className='footer-info'>  <HomeIcon className='footer-icon'/>{t("adress1")} </h3>
              <h3 className='footer-info'> {t("adress2")}    </h3>
        </Box>
 </FaqsMotion>
   </Box>
 
    <motion.div className='rights'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
      }}
    >
         <h1 className='rights-info' >{t("name")} &copy;{t("right")} </h1> 
        </motion.div>
          </Box>
        <Box  className='footer-down'>        
              <Link to='/contacts' className='footer-link'>
                <LocalPostOfficeIcon  className='footer-down-icon'/>
                </Link>
                <Link to='https://www.instagram.com/javid_baku_/'  className='footer-link' target='_blank'>

                <InstagramIcon className='footer-down-icon' />
                </Link>

                <Link to="https://wa.me/+994709209747"  className='footer-link' target='_blank'>
                <WhatsAppIcon  className='footer-down-icon' />
                </Link>

                <Link to='https://www.facebook.com/cavid.baku.7/'  className='footer-link' target='_blank' >
                <FacebookIcon  className='footer-down-icon' />
                </Link>
                <Link to='https://www.youtube.com/channel/UChR9zh9v-8FeeGyzk9uPDsA'  className='footer-link' target='_blank' >
                <YouTubeIcon  className='footer-down-icon' />
                </Link>                

        </Box>
</footer>
    )
}

export default Footer;

