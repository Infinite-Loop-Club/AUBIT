import React, { useRef } from "react";
import TinySlider from "tiny-slider-react";
import cx from "classnames";

import { sources, settings } from './data';
import classes from './Gallery.module.scss';

export default function Gallery() {
  const sliderRef = useRef(null);
  const onGoTo = direction => sliderRef.current.slider.goTo(direction);

  return (
    <div className={classes.gallery}>
      <button className={classes.btn} style={{ left: 0 }} onClick={() => onGoTo('prev')}>
        <span style={{ transform: 'rotate(180deg)' }} className='icon-chevron-right' />
      </button>
      <TinySlider settings={settings} ref={sliderRef}>
        {
          sources.map((el, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                className={cx(`tns-lazy-img`, classes.galleryImage)}
                data-src={el.src}
                alt={el.alt}
              />
            </div>
          ))
        }
      </TinySlider>
      <button className={classes.btn} style={{ right: 0 }} onClick={() => onGoTo('next')}>
        <span style={{ transform: 'translateX(.5rem)' }} className='icon-chevron-right' />
      </button>
    </div>
  );
}
