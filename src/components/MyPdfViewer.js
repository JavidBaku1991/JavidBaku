import { Box } from '@mui/material'
import React ,{useState}from 'react'



 const MyPdfViewer = ({pdf,title}) => {

const [showPdf,setShowPdf]=useState(false);


const downloadFile=(url)=>{
fetch(url).then(response=>response.blob()).then(blob=>{
  const blobURL =window.URL.createObjectURL(new Blob([blob]))
  
  const fileName=url;
  const aTag =document.createElement('a')
  aTag.href=blobURL;
  aTag.setAttribute('download',fileName)
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
})




}


  return (
    <div className='pdf-viewer'>
       <p className='note-title'>{title}</p>
        <button onClick={()=>{downloadFile(pdf)}} className='note-button'>
            YÜKLƏ
        </button>
    </div>
  )
}


export default MyPdfViewer;