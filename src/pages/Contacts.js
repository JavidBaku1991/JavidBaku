import {Box,FormControl,TextField} from '@mui/material'
import emailjs from 'emailjs-com'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Logo from '../images/jb.png'
import FaqsMotion from './FaqsMotion.js';
import { useTranslation } from 'react-i18next';

function Contacts(){

  const  {t}=useTranslation();
  const navigate=useNavigate();
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

  
  const sendEmail =(e)=>{

      e.preventDefault()
      emailjs.sendForm('service_ysyc8i5','template_euythy7',e.target,'i3sxReahkPichYdF9').then(res=>{
        console.log(res);
      }).catch(err=>console.log(err))
      navigate('/')
  }
  


    return(
<>
    <Navbar />
  <Box className='contacts'>            
              <Box className='contacts-container'> 
                <Box className='left'>
                <img className='contacts-logo' src={Logo}  alt='image'/>
                  <FaqsMotion move={moveValuesLeft}  duration={{duration:1}}>
                     <h1  className='contacts-left-header '>{t("contactsheading")}</h1>
                  </FaqsMotion>
             
              <FaqsMotion move={moveValues} duration={{duration:1}}>
              <h3 className='contacts-info'> <PhoneAndroidIcon className='contacts-info-icon'/>  +994(70)-920-97-47</h3>
              </FaqsMotion>
              <FaqsMotion move={moveValuesLeft} duration={{duration:1}}>
              <h3 className='contacts-info'> <MarkEmailReadIcon className='contacts-info-icon'/>  javidbaku1991@gmail.com</h3>
              </FaqsMotion>
                
                
                </Box>
               <Box class='right'
            
                   >                

                <form  className="form-contacts"  onSubmit={sendEmail}>
                  <FormControl class='control'>
                <TextField
                type='text'
                label={t("namelabel")}
                name='name'
                variant="outlined"
                autoComplete="none"
                sx={{backgroundColor:'primary.veryLight'}}
                fullWidth 
                required
               
                />
                </FormControl>
               
                
                <FormControl class='control'>
                <TextField
                label={t("emaillabel")}
                type="email"
                variant="outlined"
                fullWidth 
                sx={{backgroundColor:'primary.veryLight'}}
                name='email'
                required
                />
                </FormControl>
                
                <FormControl class='control'>
                <TextField
                label={t("contactslabel")}
                type="number"
                variant="outlined"
                fullWidth 
                autoComplete="new-password"
                sx={{backgroundColor:'primary.veryLight'}}
                name='number'
                required
                />
                </FormControl>
                <FormControl  className='control'>
                 <TextField
                id="my-textarea"
                label={t('message')}
                multiline
                rows={4} // Number of visible rows
                variant="outlined"
                name='message'
                sx={{backgroundColor:'primary.veryLight'}}
                required
                />
                </FormControl>
                <button type="submit"  className='form-button' sx={{marginTop:'10px'}}
               >
               {t('send')}
                </button>
                </form>
              </Box>
            
            </Box>
  <Footer />
</Box>

</>

               
 
        
               
    )
}

export default Contacts;


// npm install --legacy-peer-deps --save typescript packagename 