import React from "react";
import styles from "./card.module.scss";



export default () => {
  return <div className={styles.card}>
    <div className={styles.img}>
      <img src="./images/VC.png" alt={"vice chancellor"} />
    </div>
    <div className={styles.details}>
      <h3 className={styles.heading_primary_main}>
        Dr.M.K. Surrapa
      </h3>
      <p className={styles.description}>VICE CHANCELLOR</p>
      <h6>Intercom : 7005</h6>
      <div className={styles.details__phn}>
        <span className="icon-phone" style={{ color: "#a61d22" }}></span>
        <p>22357006 / 22353445</p>
      </div>
      <div className={styles.details__mail}>
        <span className="icon-mail" style={{ color: "#a61d22" }}></span>
        <p>vc@annauniv.edu</p>
      </div>
    </div>
  </div>
}