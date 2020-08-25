import React, { Fragment } from "react";
import styles from "./style.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Courses() {
  return (
    <Fragment>
      <Header sticky />
      <main className={styles.main}>
        <h4
          className={styles.heading_primary_main}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          Department of Automobile Engineering
        </h4>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Courses;
