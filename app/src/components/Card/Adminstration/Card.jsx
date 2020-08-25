import React from "react";
import styles from "./card.module.scss";

export default (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={props.image} alt={props.designation} />
      </div>
      <div className={styles.details}>
        <div className={styles.basic}>
          <h3 className={styles.heading_primary_main}>{props.name}</h3>
          <p className={styles.designation}>{props.designation}</p>
        </div>
        {!!props.inter && <p className={styles.inter}>Intercom : {props.inter}</p>}
        {!!props.office && <div className={styles.details__office}>
          <span className="icon-office" style={{ color: "#a61d22", marginBottom: ".5rem" }}></span>
          <a href={props.office}>Office</a>
        </div>}
        <div className={styles.details__phn}>
          <span className="icon-phone" style={{ color: "#a61d22" }}></span>
          <a href={`tel:${props.phn}`}>{props.phn}</a>
        </div>
        <div className={styles.details__mail}>
          <span className="icon-mail" style={{ color: "#a61d22" }}></span>
          <a href={`mailto:${props.mail}`}>{props.mail}</a>
        </div>
      </div>
    </div>
  );
};
