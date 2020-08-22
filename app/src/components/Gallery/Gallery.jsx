import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from './Gallery.module.scss';

export default function Gallery() {
  return (
    <CarouselProvider
      naturalSlideWidth={50}
      naturalSlideHeight={5}
      totalSlides={3}
      className={styles.carousel}
    >
      <ButtonBack className={styles.galleryBtn}>{"<"}</ButtonBack>
      <Slider className={styles.slider}>
        <Slide index={0}>
          <img src='images/slide-1.png' alt='slide' />
        </Slide>
        <Slide index={1}>
          <img src='images/slide-2.png' alt='slide' />
        </Slide>
        <Slide index={2}>
          <img src='images/slide-3.png' alt='slide' />
        </Slide>
      </Slider>
      <ButtonNext className={styles.galleryBtn}> {">"} </ButtonNext>
    </CarouselProvider>
  );
}
