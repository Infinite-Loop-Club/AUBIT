import React from 'react';
import classes from './ImageGallery.module.scss';

function GalleryItem({ source, name }) {
  return (
    <a className={classes.gallery__item}>
      <img className={classes.gallery__image} src={source} alt={name} />
    </a>
  );
}

export default function ImageGallery() {
  const sources = [{
    source: './images/slide-1.png',
    name: 'slide-1'
  }, {
    source: './images/slide-2.png',
    name: 'slide-2'
  }, {
    source: './images/slide-3.png',
    name: 'slide-3'
  }, {
    source: './images/slide-4.png',
    name: 'slide-4'
  }, {
    source: './images/slide-1.png',
    name: 'slide-1'
  }, {
    source: './images/slide-2.png',
    name: 'slide-2'
  }, {
    source: './images/slide-3.png',
    name: 'slide-3'
  }, {
    source: './images/slide-4.png',
    name: 'slide-4'
  },
  ]
  return (
    <div className={classes.gallery__container}>
      {
        sources.map(({ source, name }) => <GalleryItem source={source} name={name} />)
      }
    </div>
  )
}
