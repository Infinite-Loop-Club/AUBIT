import React, { useState } from 'react';
import classes from './ImageGallery.module.scss';

import Viewer from 'react-viewer';

const sources = [{
  src: './images/slide-1.png',
  alt: 'slide-1'
}, {
  src: './images/slide-2.png',
  alt: 'slide-2'
}, {
  src: './images/slide-3.png',
  alt: 'slide-3'
}, {
  src: './images/slide-4.png',
  alt: 'slide-4'
}, {
  src: './images/slide-1.png',
  alt: 'slide-1'
}, {
  src: './images/slide-2.png',
  alt: 'slide-2'
}, {
  src: './images/slide-3.png',
  alt: 'slide-3'
}, {
  src: './images/slide-4.png',
  alt: 'slide-4'
},
]

export default function ImageGallery() {
  const [isVisible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  function GalleryItem({ src, alt, index }) {
    return <img
      className={classes.gallery__image}
      src={src}
      alt={alt}
      onClick={() => { setVisible(true); setActiveIndex(index); }}
    />
  }

  console.log(sources);
  return (
    <>
      <div className={classes.gallery__container}>
        {
          sources.map((source, index) => <GalleryItem src={source.src} alt={source.alt} index={index} />)
        }
      </div>
      <Viewer
        visible={isVisible}
        onClose={() => {
          setVisible(false);
        }}
        images={sources}
        activeIndex={activeIndex}
        downloadable
      />
    </>
  )
}
