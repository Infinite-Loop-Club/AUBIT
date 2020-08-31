import React from 'react';
import classes from './Badge.module.scss';
import cx from "classnames";

export default function Badge({ color, size, style, animate, children }) {
  return (
    <div style={{ color, fontSize: size, ...style }} className={animate ? cx(classes.badge, classes.badge_animate) : classes.badge}>
      {children}
    </div>
  );
}
