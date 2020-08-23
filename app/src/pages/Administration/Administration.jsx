import React, { Fragment } from "react";
import styles from "./style.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Adminstration/Card";


export default () => {
  return <Fragment>
    <Header sticky />
    <main className={styles.main}>
      <Card
        name="Dr.M.K. Surrapa"
        designation="VICE CHANCELLOR"
        image="./images/VC.png"
        inter="7005"
        phn="22357006 / 22353445"
        mail="vc@annauniv.edu"
      />
      <Card
        name="Dr.M.K. Surrapa"
        designation="VICE CHANCELLOR"
        image="./images/VC.png"
        inter="7005"
        phn="22357006 / 22353445"
        mail="vc@annauniv.edu"
      />
      <Card
        name="Dr.M.K. Surrapa"
        designation="VICE CHANCELLOR"
        image="./images/VC.png"
        inter="7005"
        phn="22357006 / 22353445"
        mail="vc@annauniv.edu"
      />
      <Card
        name="Dr.M.K. Surrapa"
        designation="VICE CHANCELLOR"
        image="./images/VC.png"
        inter="7005"
        phn="22357006 / 22353445"
        mail="vc@annauniv.edu"
      />
    </main>
    <Footer />
  </Fragment>
}