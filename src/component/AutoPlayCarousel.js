import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: 'https://img1.wsimg.com/isteam/ip/f863bd48-81b2-42aa-a01d-a64fb9a165d3/2023-03-16%20(1).png/:/rs=w:719,h:864',
    thumbnail: 'https://img1.wsimg.com/isteam/ip/f863bd48-81b2-42aa-a01d-a64fb9a165d3/2023-03-16%20(1).png/:/rs=w:719,h:864',
  },
  {
    original: 'https://img1.wsimg.com/isteam/ip/f863bd48-81b2-42aa-a01d-a64fb9a165d3/2023-03-16%20(2).png/:/rs=w:1160,h:721',
    thumbnail: 'https://img1.wsimg.com/isteam/ip/f863bd48-81b2-42aa-a01d-a64fb9a165d3/2023-03-16%20(2).png/:/rs=w:1160,h:721',
  },
  {
    original: 'https://img1.wsimg.com/isteam/ip/f863bd48-81b2-42aa-a01d-a64fb9a165d3/2023-03-16.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25',
    thumbnail: 'https://img1.wsimg.com/isteam/ip/f863bd48-81b2-42aa-a01d-a64fb9a165d3/2023-03-16.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25',
  },
  {
    original: 'https://img1.wsimg.com/isteam/ip/f863bd48-81b2-42aa-a01d-a64fb9a165d3/2023-03-16%20(4).png/:/rs=w:1160,h:465',
    thumbnail: 'https://img1.wsimg.com/isteam/ip/f863bd48-81b2-42aa-a01d-a64fb9a165d3/2023-03-16%20(4).png/:/rs=w:1160,h:465',
  },
  {
    original: 'https://img1.wsimg.com/isteam/ip/f863bd48-81b2-42aa-a01d-a64fb9a165d3/2023-03-16%20(3).png/:/rs=w:984,h:349',
    thumbnail: 'https://img1.wsimg.com/isteam/ip/f863bd48-81b2-42aa-a01d-a64fb9a165d3/2023-03-16%20(3).png/:/rs=w:984,h:349',
  },
];

const AutoPlayImageGallery = () => {
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    // Function to handle auto-play
    const autoPlayInterval = setInterval(() => {
      setAutoPlay((prevAutoPlay) => (prevAutoPlay ? false : true));
    }, 2000);

    // Clean up the interval on unmount
    return () => clearInterval(autoPlayInterval);
  }, []);

  return (
    <ImageGallery
      items={images}
      autoPlay={autoPlay}
      slideInterval={3000} // Set the duration between slides in milliseconds
      onMouseOver={() => setAutoPlay(false)} // Pause auto-play on mouseover
      onMouseLeave={() => setAutoPlay(true)} // Resume auto-play on mouseout
    />
  );
};

export default AutoPlayImageGallery;
