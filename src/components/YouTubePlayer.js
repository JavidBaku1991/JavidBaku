import React from 'react';
import { Box } from '@mui/material';




const YouTubePlayer = ({youtubeLink}) => {

  return (
    <Box >

<iframe
              style={{height: '300px', width:'320px' }}
              title="Youtube"
              aria-hidden="true"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${youtubeLink}/?autoplay=1><img src=https://img.youtube.com/vi/${youtubeLink}/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>`}
            ></iframe>    </Box>
  );
};

  

export default YouTubePlayer;
