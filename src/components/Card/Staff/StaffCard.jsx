import React from 'react';
import classes from './StaffCard.module.scss';

export default function StaffCard({ image, name, designation, mail, resume }) {
  return (
    <div className={classes.card}>
      <div className={classes.card__frame}>
        <div className={classes.card__figure}>
          <img className={classes.card__image} src={image} alt={name} />
        </div>
        <div className={classes.card__details}>
          <h3 className={classes.card__details_name}>{name}</h3>
          <p className={classes.card__details_designation}>{designation}</p>
        </div>
      </div>

      <div className={classes.card__cta}>
        <a href={`mailto: ${mail}`} className={classes.card__link}>
          <span className='icon-mail' />
        </a>
        <a href={resume} className={classes.card__link}>
          <span className='icon-paperclip' /></a>
      </div>
    </div>
  )
}
