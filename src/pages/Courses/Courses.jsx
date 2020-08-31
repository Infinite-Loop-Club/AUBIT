import React, { Fragment, useState } from "react";
import styles from "./style.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Table from "../../components/Table/Table";

import cx from "classnames";

import { ugCourses, pgCourses } from "../../constants/Table/courses";

export default function Courses() {
  const [ug, setUg] = useState(true);

  return (
    <Fragment>
      <Header sticky />
      <main className={styles.main}>
        <div className={styles.btn__container}>
          <button
            onClick={() => setUg(true)}
            className={ug ? cx(styles.btn1, styles.active) : styles.btn1}
          >
            UG Courses
          </button>
          <button
            onClick={() => setUg(false)}
            className={ug ? styles.btn2 : cx(styles.btn2, styles.active)}
          >
            PG Courses
          </button>
        </div>
        {ug ? (
          <div style={{ marginTop: "5rem" }}>
            <h4 className={styles.hero__sub_heading}>UG Courses</h4>
            <Table data={ugCourses} />
          </div>
        ) : (
            <div style={{ marginTop: "5rem" }}>
              <h4 className={styles.hero__sub_heading}>PG Courses</h4>
              <Table data={pgCourses} />
            </div>
          )}
      </main>
      <Footer />
    </Fragment>
  );
}

