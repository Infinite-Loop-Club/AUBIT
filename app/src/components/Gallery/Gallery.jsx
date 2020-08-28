import React, { useState, useEffect } from "react";
import styles from "./Gallery.module.scss";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const [counter, SetCounter] = React.useState(null);

  const slides = [
    "images/slide-1.png",
    "images/slide-2.png",
    "images/slide-3.png",
    "images/slide-4.png",
    "images/slide-5.png"
  ];

  function handleStart() {
    SetCounter(setInterval(() => {
      setIndex(old => {
        old = old + 1;
        old = old % slides.length;
        console.log(old);
        return old;
      }
      )
    }, 3000));
  }

  function handleStop() {
    SetCounter(clearInterval(counter));
    if (!!counter) {
      setTimeout(handleStart, 3000);
    }
  }

  useEffect(() => {
    handleStart();
    // eslint-disable-next-line
  }, []);

  const previousSlide = () => {
    handleStop();
    if (index <= 0) {
      setIndex(slides.length - 1);
    } else setIndex(index - 1);
  };

  const nextSlide = () => {
    handleStop();
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
            style={{ filter: 'brightness(50%)' }}
          />
          <img
            className={styles.galleryImage}
            src={slides[(index + 1) % slides.length]}
            alt={slides[(index + 1) % slides.length]}
          />
          <img
            className={styles.galleryImage}
            src={slides[(index + 2) % slides.length]}
            alt={slides[(index + 2) % slides.length]}
            style={{ filter: 'brightness(50%)' }}
          />
        </div>
        <button className={styles.btn} onClick={nextSlide}>
          <span className='icon-chevron-right' />
        </button>
      </div>
    </div>
  );
}
