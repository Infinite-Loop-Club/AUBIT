import React, { Fragment } from "react";
import styles from "./style.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


export default () => {
  return <Fragment>
    <Header sticky />
    <main className={styles.main}>
      <h3 className={styles.heading_primary_main} style={{ textAlign: "center", marginBottom: "3rem" }}>
        Departments
      </h3>
      <div className="row">
        <div className="col-1-of-3">
          <img className={styles.img} src="./images/department.jpg" alt="department"></img>
        </div>
        <div className="col-1-of-3">
          <img className={styles.img} src="./images/department.jpg" alt="department"></img>
        </div>
        <div className="col-1-of-3">
          <img className={styles.img} src="./images/department.jpg" alt="department"></img>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <img className={styles.img} src="./images/department.jpg" alt="department"></img>
        </div>
        <div className="col-1-of-3">
          <img className={styles.img} src="./images/department.jpg" alt="department"></img>
        </div>
        <div className="col-1-of-3">
          <img className={styles.img} src="./images/department.jpg" alt="department"></img>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <img className={styles.img} src="./images/department.jpg" alt="department"></img>
        </div>
        <div className="col-1-of-3">
          <img className={styles.img} src="./images/department.jpg" alt="department"></img>
        </div>
        <div className="col-1-of-3">
          <img className={styles.img} src="./images/department.jpg" alt="department"></img>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <img className={styles.img} src="./images/department.jpg" alt="department"></img>
        </div>
        <div className="col-1-of-3">
          <img className={styles.img} src="./images/department.jpg" alt="department"></img>
        </div>
        <div className="col-1-of-3">
          <img className={styles.img} src="./images/department.jpg" alt="department"></img>
        </div>
      </div>
    </main>
    <Footer />
  </Fragment>
}