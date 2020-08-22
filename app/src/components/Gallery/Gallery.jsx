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
          I am the first Slide.
        </Slide>
        <Slide index={1}>
          I am the second Slide.
        </Slide>
        <Slide index={2}>
          I am the third Slide.
        </Slide>
      </Slider>
      <ButtonNext className={styles.galleryBtn}> {">"} </ButtonNext>
    </CarouselProvider>
  );
}
