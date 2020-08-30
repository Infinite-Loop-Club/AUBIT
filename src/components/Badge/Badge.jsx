import React from 'react';
import classes from './Badge.module.scss';

export default function Badge({ color, size, style, children }) {
  return (
    <div style={{ color, fontSize: size, ...style }} className={classes.badge}>
      {children}
    </div>
  );
}
