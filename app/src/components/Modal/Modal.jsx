import React, { useState } from 'react';
import classes from './Modal.module.scss';

export default function Modal({ style, title, children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={classes.modal__container}
      style={!isOpen ? { zIndex: -10, opacity: 0 } : {
        zIndex: 10, opacity: 1
      }}
    >
      <div style={style} className={classes.modal}>
        <div className={classes.modal__header}>
          <h2 className={classes.modal__title}>{title}</h2>
          <div className={classes.close_btn} onClick={() => setIsOpen(false)}>
            <span className='icon-cross' />
          </div>
        </div>

        <div className={classes.modal__inner}>
          {children}
        </div>
      </div>
    </div >
  )
}
