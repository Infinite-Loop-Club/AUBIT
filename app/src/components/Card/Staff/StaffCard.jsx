import React from 'react';
import classes from './StaffCard.module.scss';

export default function StaffCard() {
  return (
    <div className={classes.card}>
      <div className={classes.card__frame}>
        <div className={classes.card__figure}>
          <img className={classes.card__image} src='./images/administration/vc.png' />
        </div>
        <div className={classes.card__details}>
          <h3 className={classes.card__details_name}>Santhosh</h3>
          <p className={classes.card__details_designation}>Sandy pola varuma?</p>
        </div>
      </div>

      <div className={classes.card__cta}>
        <a href='#link' className={classes.card__link}>
          <span className='icon-mail' />
        </a>
        <a href='#link' className={classes.card__link}>
          <span className='icon-paperclip' /></a>
      </div>
    </div>
  )
}
