import React, { Fragment } from "react";
import styles from "./style.module.scss";

import { Header, Footer, StaffCard } from '../../../components';

import { teaching, nonteaching } from "../../../constants/Staff/automobile";



function Item(value, index) {
  return (
    <div key={index} className={styles.flexItem}>
      <StaffCard {...value} />
    </div>
  );
}

export default () => {
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

        <h6
          className={styles.heading_primary_main}
          style={{ marginBottom: "3rem" }}
        >
          Head of the Department
        </h6>

        <StaffCard
          image="/images/administration/dean.png"
          name="Dr.T. Senthilkumar"
          designation="Professor & Dean"
          resume="#test"
          mail="santhoshvelr@gmail.com"
        />

        <h6
          className={styles.heading_primary_main}
          style={{ margin: "3rem 0" }}
        >
          Teaching Staff
        </h6>

        <div className={styles.flexContainer}>{teaching.map(Item)}</div>

        <h6
          className={styles.heading_primary_main}
          style={{ margin: "3rem 0" }}
        >
          Non - Teaching Staff
        </h6>

        <div className={styles.flexContainer}>{nonteaching.map(Item)}</div>
      </main>
      <Footer />
    </Fragment>
  );
};

