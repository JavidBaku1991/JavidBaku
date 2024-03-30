import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import colorstheme from  '../data/theme.js'

import men1 from '../images/about6.jpg'
import men2 from '../images/about7.jpg'
import men4 from '../images/hero1.jpg'
import men6 from '../images/hero3.jpg'
import men7 from '../images/hero4.jpg'
import men8 from '../images/hero5.jpg'
import men9 from '../images/hero11.jpg'
import men10 from '../images/hero7.JPG'
import men11 from '../images/hero9.JPG'
import men12 from '../images/hero10.jpg'



const colors=colorstheme;

  const screenWidth = window.innerWidth>900;

const ImageListContainer =() =>{
  return (
    <Box className='photos-container' >
          <Box className='hero-photos' sx={{backgroundColor:colors.bronze,  scrollbarWidth:'none'}}>
      <ImageList variant="masonry" cols={screenWidth?3:2} gap={20}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img className='hero-photo'
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
           
               <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </Box>

  );
}

const itemData = [
  {
    img: men1,
    title: 'Bed',
  },
  {
    img:men2,
    title: 'Books',
  },
  {
    img: men4,
    title: 'Sink',
  },

  {
    img: men6,
    title: 'Blinds',
  }, {
    img:men9,
    title: 'Storage',
  },
  {
    img: men7,
    title: 'Chairs',
  },
  {
    img:men8,
    title: 'Laptop',
  },

  {
    img:men10,
    title: 'Coffee',
  },
 
  {
    img: men12,
    title: 'Candle',
  },
  {
    img: men11,
    title: 'Candle',
  },
 
];


export default ImageListContainer;