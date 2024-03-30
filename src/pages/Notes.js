import { Box } from '@mui/material';
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.js';
import MyPdfViewer from '../components/MyPdfViewer';
import qubaninagalmasi from '../pdf/quba.pdf';
import girdimyarinbagcasina from '../pdf/girdim.pdf';
import lacin from '../pdf/lacin.pdf';
import sari  from '../pdf/sari.pdf'
import kucelere from '../pdf/kucelere.pdf'
import arzu from '../pdf/arzu.pdf'
import hardasan from '../pdf/hardasan.pdf'
import komde from '../pdf/komdeninarzulari.pdf'
import sensiz from '../pdf/sensiz.pdf'
import himn from '../pdf/himn.pdf'
import hicran from '../pdf/hicran.pdf'

import cargah from '../pdf/cargah.pdf'
import laylay from '../pdf/laylay.pdf'
import sevgilim from '../pdf/sevgilim.pdf'
import sevgilicanan from '../pdf/sevgilicanan.pdf'

import { useTranslation } from 'react-i18next';








 const Notes = () => {


const {t}=useTranslation();

  return (
  <>
  <Navbar />
    <div className='notes'>
   
            <h1 className='notes-header'>{t("noteHeading")}</h1>
          <Box className='national'>    
                 <MyPdfViewer  pdf={qubaninagalmasi} title ={t("Quba")}/>
                  <MyPdfViewer pdf={girdimyarinbagcasina} title ={t("girdim")}/>
                  <MyPdfViewer pdf={lacin} title ={t("lacin")}/>
                  <MyPdfViewer pdf={sari} title ={t("sari")}/>
                  <MyPdfViewer pdf={kucelere} title ={t("kucelere")}/>

       

      </Box>
      <h1 className='notes-header'>{t("composer")}</h1>
      <Box className='composer'>
        
          
                          <MyPdfViewer pdf={himn} title ={t("himn")}/>
                          <MyPdfViewer pdf={sensiz} title ={t("sensiz")}/>
                          <MyPdfViewer pdf={arzu} title ={t("arzu")}/>
                          <MyPdfViewer pdf={hardasan} title ={t("hardasan")}/>
                          <MyPdfViewer pdf={komde} title ={t("komde")}/>
                          <MyPdfViewer pdf={hicran} title ={t("hicran")}/>
                  <MyPdfViewer pdf={cargah} title ={t("cargah")}/>
                  <MyPdfViewer pdf={laylay} title ={t("laylay")}/>
                  <MyPdfViewer pdf={sevgilicanan} title ={t("sevgilicanan")}/>
                  <MyPdfViewer pdf={sevgilim} title ={t("sevgilim")}/>


      </Box>


 
  
</div>
<Box className='footer-container'>
          <Footer/>
            </Box>   </>
)

}


export default Notes;
