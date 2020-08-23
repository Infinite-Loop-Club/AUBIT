import React from "react";
import styles from "./card.module.scss";



export default (props) => {
  return <div className={styles.card}>
    <div className={styles.img}>
      <img src={props.image} alt={"vice chancellor"} />
    </div>
    <div className={styles.details}>
      <h3 className={styles.heading_primary_main}>
        {props.name}
      </h3>
      <p className={styles.description}>{props.designation}</p>
      <h6>Intercom : {props.inter}</h6>
      <div className={styles.details__phn}>
        <span className="icon-phone" style={{ color: "#a61d22" }}></span>
        <p>{props.phn}</p>
      </div>
      <div className={styles.details__mail}>
        <span className="icon-mail" style={{ color: "#a61d22" }}></span>
        <p>{props.mail}</p>
      </div>
    </div>
  </div>
}