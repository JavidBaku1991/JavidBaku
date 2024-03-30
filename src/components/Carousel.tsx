import * as React from "react";
import  {ImageSlider}  from "../components/ImageSlider.tsx"
import men1 from '../images/1.jpg';
import men2 from '../images/2.jpg';
import men3 from '../images/3.jpg';
import men4 from '../images/4.jpg';
import men5 from '../images/5.jpg';


const images = [
  { url: men1, alt: "Car One" },
  { url: men2, alt: "Car Two" },
  { url: men3, alt: "Car Three" },
  { url: men4, alt: "Car Four" },
  { url: men5, alt: "Car Five" },
]

 const Carousel = () => {



  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={images} />
    
    </div>
  )
  
  ;
};

export default Carousel;
