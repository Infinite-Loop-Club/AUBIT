import React, { Fragment } from "react";
import styles from "./style.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default () => {
  return (
    <Fragment>
      <Header sticky />
      <main className={styles.main}>
        <h3
          className={styles.heading_primary_main}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          Student Affairs
        </h3>
        <div className={styles.container}>
          <p
            className={styles.description}
            style={{ marginBottom: "2rem", textIndent: "5rem" }}
          >
            Welcome to this page and thank you for taking a moment to read these
            words introducing you to student affairs. Office of the Student
            Affairs is a multi-faceted office that strives to provide students
            with the necessary tools and support to make difficult situations
            more manageable. The staffs in the Office of the Student Affairs
            provide a student-centered approach to enhance the student
            experience by servicing and maintain an inclusive, welcoming, and
            safe campus community.
          </p>
          <h5>The main objectives are:</h5>
          <p className={styles.description} style={{ textIndent: "5rem" }}>
            <ul>
              <li>
                Helps in receiving the receipt of approval orders related with
                Readmission, Transfer (from DOTE) through Center of student
                affairs, Chennai.
              </li>
              <li>
                Helps in receiving the approval orders for name change of
                students and break of study based on medical certificate from
                Center of Student affairs ,Chennai.
              </li>
              <li>
                To solve the discrepancy that arises at the time of payment of
                semester fees to AUKDC, Chennai.
              </li>
              <li>
                To issue all kinds of Bonafide certificates, Transfer
                certificates and course completion certificates .
              </li>
              <li>To avail Scholarships for all categories</li>
            </ul>
          </p>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
