import React, { useState } from "react";
import styles from "./Gallery.module.scss";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const slides = [
    "images/slide-2.png",
    "images/slide-3.png",
    "images/slide-31.png",
    "images/slide-1.png",
    "images/slide-5.png"
  ];

  const previousSlide = () => {
    if (index <= 0) {
      setIndex(slides.length - 3);
    } else setIndex(index - 1);
  };

  const nextSlide = () => {
    if (index === slides.length - 3) setIndex(0);
    else setIndex(index + 1);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryWrapper}>
        <button className={styles.btn} onClick={previousSlide}>
          <span className='icon-chevron-right' style={{ transform: 'rotate(180deg)' }} />
        </button>
        <div className={styles.slider}>
          <img
            className={styles.galleryImage}
            src={slides[index]}
            alt="slide"
          />
          <img
            className={styles.galleryImage}
            src={slides[index + 1]}
            alt={slides[index + 1]}
          />
          <img
            className={styles.galleryImage}
            src={slides[index + 2]}
            alt={slides[index + 2]}
          />
        </div>
        <button className={styles.btn} onClick={nextSlide}>
          <span className='icon-chevron-right' />
        </button>
      </div>
    </div>
  );
}
