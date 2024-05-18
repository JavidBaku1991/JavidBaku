import React, { useState } from 'react';
import { Box, Modal, Button, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.js';
import MyPdfViewer from '../components/MyPdfViewer';
import PDFViewer from '../components/PDFViewer.js'; // Ensure the correct path
import { useTranslation } from 'react-i18next';

// Import PDF files
import qubaninagalmasi from '../pdf/quba.pdf';
import girdimyarinbagcasina from '../pdf/girdim.pdf';
import lacin from '../pdf/lacin.pdf';
import sari from '../pdf/sari.pdf';
import kucelere from '../pdf/kucelere.pdf';
import arzu from '../pdf/arzu.pdf';
import hardasan from '../pdf/hardasan.pdf';
import komde from '../pdf/komdeninarzulari.pdf';
import sensiz from '../pdf/sensiz.pdf';
import himn from '../pdf/himn.pdf';
import hicran from '../pdf/hicran.pdf';
import cargah from '../pdf/cargah.pdf';
import laylay from '../pdf/laylay.pdf';
import sevgilim from '../pdf/sevgilim.pdf';
import sevgilicanan from '../pdf/sevgilicanan.pdf';

import CloseIcon from '@mui/icons-material/Close';


const Notes = () => {
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  const handleOpen = (pdf) => {
    setFile(pdf);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Navbar />
      <div className='notes'>
        <div >
          <div>
            <h1 className='notes-header'>{t("noteHeading")}</h1>
            <Box className='national'>
              <MyPdfViewer openPdf={() => handleOpen(qubaninagalmasi)} pdf={qubaninagalmasi} title={t("Quba")} />
              <MyPdfViewer openPdf={() => handleOpen(girdimyarinbagcasina)} pdf={girdimyarinbagcasina} title={t("girdim")} />
              <MyPdfViewer openPdf={() => handleOpen(lacin)} pdf={lacin} title={t("lacin")} />
              <MyPdfViewer openPdf={() => handleOpen(sari)} pdf={sari} title={t("sari")} />
              <MyPdfViewer openPdf={() => handleOpen(kucelere)} pdf={kucelere} title={t("kucelere")} />
            </Box>
          </div>
        </div>
        <h1 className='notes-header'>{t("composer")}</h1>
        <Box className='composer'>
          <MyPdfViewer openPdf={() => handleOpen(himn)} pdf={himn} title={t("himn")} />
          <MyPdfViewer openPdf={() => handleOpen(sensiz)} pdf={sensiz} title={t("sensiz")} />
          <MyPdfViewer openPdf={() => handleOpen(arzu)} pdf={arzu} title={t("arzu")} />
          <MyPdfViewer openPdf={() => handleOpen(hardasan)} pdf={hardasan} title={t("hardasan")} />
          <MyPdfViewer openPdf={() => handleOpen(komde)} pdf={komde} title={t("komde")} />
          <MyPdfViewer openPdf={() => handleOpen(hicran)} pdf={hicran} title={t("hicran")} />
          <MyPdfViewer openPdf={() => handleOpen(cargah)} pdf={cargah} title={t("cargah")} />
          <MyPdfViewer openPdf={() => handleOpen(laylay)} pdf={laylay} title={t("laylay")} />
          <MyPdfViewer openPdf={() => handleOpen(sevgilicanan)} pdf={sevgilicanan} title={t("sevgilicanan")} />
          <MyPdfViewer openPdf={() => handleOpen(sevgilim)} pdf={sevgilim} title={t("sevgilim")} />
        </Box>
      </div>
      <Box className='footer-container'>
        <Footer />
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -54%)', width: '50%', height:'90%', bgcolor: 'background.paper', boxShadow: 24, p: 4, m:4}}>
                <CloseIcon className='pdf-modal-close  '  onClick={handleClose} >Close</CloseIcon>

          {file && 
          
          <div style={{marginBottom:'40px'}}>
            <PDFViewer fileUrl={file} />
          </div>
          }
        </Box>
      </Modal>
    </>
  );
};

export default Notes;
