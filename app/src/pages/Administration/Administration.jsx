import React, { Fragment } from "react";
import styles from "./style.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Adminstration/Card";


export default () => {
  return <Fragment>
    <Header sticky />
    <main className={styles.main}>
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
    <Footer />
  </Fragment>
}