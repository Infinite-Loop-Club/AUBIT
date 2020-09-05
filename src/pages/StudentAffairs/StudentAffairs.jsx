import React, { Fragment } from "react";
import styles from "./style.module.scss";

import { Header, Footer, Accordion } from '../../components';

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
          <h6 className={styles.heading_primary_main}>The main objectives are:</h6>
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
        </div>

        <div className={styles.co_ordinator}>
          <h6
            className={styles.heading_primary_main}
            style={{ marginBottom: "1rem" }}
          >
            Coordinator
          </h6>

          <div className={styles.details}>
            <p className={styles.description}> Mr.D.B.Sivakumar </p>
          </div>
          <h6
            className={styles.heading_primary_main}
            style={{ marginBottom: "1rem", marginTop: "2rem" }}
          >
            Contact :
          </h6>
          <div className={styles.contact}>
            <div className={styles.phn}>
              <span className="icon-phone"></span>
              <p>+91 0431 2407956</p>
            </div>
            <div className={styles.phn}>
              <span className="icon-phone"></span>
              <p>+91 0431 2407954</p>
            </div>
            <div className={styles.mail}>
              <span className="icon-mail"></span>
              <p>cfsaaubit@gmail.com</p>
            </div>
          </div>
        </div>

        <Accordion title="CFSA:" style={{ margin: "3rem 0" }}>
          <div className={styles.procedure}>
            <p
              className={styles.description}
              style={{ marginBottom: "2rem", textIndent: "5rem" }}
            >
              Welcome to this page and thank you for taking a moment to read
              these words introducing you to student affairs. Office of the
              Student Affairs is a multi-faceted office that strives to provide
              students with the necessary tools and support to make difficult
              situations more manageable. The staffs in the Office of the
              Student Affairs provide a student-centered approach to enhance the
              student experience by servicing and maintain an inclusive,
              welcoming, and safe campus community.
            </p>
            <h6 className={styles.heading_primary_main}>The main objectives are:</h6>
            <ul>
              <li>
                Admission Process of UG(B.E. &
                B.Tech.)/PG(M.E.,M.Tech.,M.B.A.,M.C.A.) both Fulltime/Part time
              </li>
              <li>
                Helps in receiving the receipt of approval orders related with
                Readmission, Transfer (from DOTE) through Center of student
                affairs, Chennai.
              </li>
              <li>
                Helps in receiving the approval orders for name change of
                students and Break of study based on medical certificate from
                Center of Student affairs ,Chennai.
              </li>
              <li>
                To solve the discrepancy that arises at the time of payment of
                semester fees to AUKDC, Chennai.
              </li>
              <li>
                To issue all kinds of Bonafide certificates, Transfer
                certificates and Course completion certificates.
              </li>
              <li>To avail Scholarships for all categories</li>
            </ul>
          </div>
        </Accordion>

        <div className={styles.bottom_links}>
          <ul>
            <li><a href="#ab">Staff</a></li>
          </ul>
        </div>

      </main>
      <Footer />
    </Fragment>
  );
};
