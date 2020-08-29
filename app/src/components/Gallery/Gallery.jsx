import React, { useRef } from "react";
import TinySlider from "tiny-slider-react";
import { sources, settings, imgStyles, options } from './data';

import classes from './Gallery.module.scss';

export default function Gallery() {
  const sliderRef = useRef(null);
  const onGoTo = direction => sliderRef.current.slider.goTo(direction);

  return (
    <div className={classes.gallery}>
      <button className={classes.btn} onClick={() => onGoTo('prev')}>
        <span style={{ transform: 'rotate(180deg)' }} className='icon-chevron-right' />
      </button>
      <TinySlider settings={settings} ref={sliderRef} {...options}>
        {
          sources.map((el, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                className={`tns-lazy-img`}
                data-src={el.src}
                alt={el.alt}
                style={imgStyles}
              />
            </div>
          ))
        }
      </TinySlider>
      <button className={classes.btn} style={{ position: "absolute", right: 0, top: '50%', transform: 'translateY(-50%)' }} onClick={() => onGoTo('next')}>
        <span className='icon-chevron-right' />
      </button>
    </div>
  );
}
