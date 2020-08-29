import React, { useState } from 'react';
import classes from './ImageGallery.module.scss';

import Viewer from 'react-viewer';



export default function ImageGallery(props) {
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

  return (
    <>
      <div className={classes.gallery__container}>
        {
          props.sources.map((source, index) => <GalleryItem src={source.src} alt={!!source.alt ? `slide-${index}` : source.alt} index={index} />)
        }
      </div>
      <Viewer
        visible={isVisible}
        onClose={() => {
          setVisible(false);
        }}
        images={props.sources}
        activeIndex={activeIndex}
        downloadable
      />
    </>
  )
}
