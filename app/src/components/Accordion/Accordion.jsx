import React, { useState, useRef, useEffect } from "react";

import styles from "./style.module.scss";

import cx from "classnames";

const Accordion = (props) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleActive = () => {
    setActive(!active);
  };


  return (
    <div className={styles.accordion_section} style={props.style}>
      <button className={styles.accordion_title} onClick={toggleActive}>
        <h6 className={styles.heading_primary_main}>{props.title}</h6>
        <span
          className={
            active
              ? cx(cx(`icon-chevron-right`, styles.accordion_icon), styles.rotate)
              : cx(`icon-chevron-right`, styles.accordion_icon)
          }
        >
        </span>
      </button>

      <div ref={contentRef} className={styles.accordion_content}>
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;