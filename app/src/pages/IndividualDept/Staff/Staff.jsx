import React, { Fragment } from "react";
import styles from "./style.module.scss";

import StaffCard from "../../../components/Card/Staff/StaffCard";

import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

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

        <div className={styles.flexContainer}>{data.map(Item)}</div>

        <h6
          className={styles.heading_primary_main}
          style={{ margin: "3rem 0" }}
        >
          Non - Teaching Staff
        </h6>

        <div className={styles.flexContainer}>{data.map(Item)}</div>
      </main>
      <Footer />
    </Fragment>
  );
};

const data = [
  {
    image:
      "http://www.aubit.edu.in/departments/AutomobileEngineering/img/Dr.P.%20Gopal.jpg",
    name: "Dr. P. Gopal",
    designation: "Head & Assistant Professor (Sl.Gr.)",
    resume: "#test",
    mail: "santhoshvelr@gmail.com",
  },
  {
    image:
      "http://www.aubit.edu.in/departments/AutomobileEngineering/img/picture-navin.jpg",
    name: "Dr.P. Navaneetha Krishnan",
    designation: "Assistant Professor (Sr.Gr.)",
    resume: "#test",
    mail: "santhoshvelr@gmail.com",
  },
  {
    image:
      "http://www.aubit.edu.in/departments/AutomobileEngineering/img/pillai.jpg",
    name: "Dr.T. Parameshwaran Pillai",
    designation: "Assistant Professor (Sr.Gr.)",
    resume: "#test",
    mail: "santhoshvelr@gmail.com",
  },
  {
    image:
      "http://www.aubit.edu.in/departments/AutomobileEngineering/img/Mr.B.%20Kumarakurubaran.jpg",
    name: "Dr.B. Kumaragurubaran",
    designation: "Assistant Professor (Sr.Gr.)",
    resume: "#test",
    mail: "santhoshvelr@gmail.com",
  },
];
