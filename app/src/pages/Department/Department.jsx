import React, { Fragment } from "react";
import styles from "./style.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Card(props) {
  return (
    <a href={props.link} className="col-1-of-3" style={{ textDecoration: "none" }}>
      <div
        className={styles.card}
        style={{
          backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${props.image})`,
        }}
      >
        <h5 className={styles.text}>{props.name}</h5>
      </div>
    </a>
  );
}

export default () => {
  return (
    <Fragment>
      <Header sticky />
      <main className={styles.main}>
        <h3
          className={styles.heading_primary_main}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          Departments
        </h3>
        <div className="row">
          <Card
            name="Automobile Engineering"
            image="./images/departments/auto-logo.jpg"
            link="/department/automobile"
          />
          <Card
            name="Information Technology"
            image="./images/departments/it-logo.png"
            link="/department/IT"
          />
          <Card
            name="Computer Application"
            image="./images/departments/ca-logo.png"
            link="/department/computerApplication"
          />
        </div>

        <div className="row">
          <Card
            name="Electrical and Electronics Engineering"
            image="./images/departments/eee-logo.png"
            link="/department/EEE"
          />
          <Card
            name="Electronics and Communcation Engineering"
            image="./images/departments/ece-logo.png"
            link="/department/ECE"
          />
          <Card
            name="Civil Engineering"
            image="./images/departments/civil-logo.png"
            link="/department/civil"
          />
        </div>

        <div className="row">
          <Card
            name="Bio-Technology"
            image="./images/departments/biotech-logo.png"
            link="/department/bioTech"
          />
          <Card
            name="Petrochemical Technology"
            image="./images/departments/petro-logo.png"
            link="/department/petrochemical"
          />
          <Card
            name="Pharmaceutical Technology"
            image="./images/departments/pharma-logo.png"
            link="/department/pharmaceutical"
          />
        </div>

        <div className="row">
          <Card
            name="Management Studies"
            image="./images/departments/management-studies-logo.png"
            link="/department/management"
          />
          <Card
            name="Chemistry"
            image="./images/departments/chemistry-logo.png"
            link="/department/chemistry"
          />
          <Card
            name="Physics"
            image="./images/departments/physics-logo.png"
            link="/department/physics"
          />
        </div>

        <div className="row">
          <Card
            name="English"
            image="./images/departments/english-logo.png"
            link="/department/english"
          />
          <Card
            name="Maths"
            image="./images/departments/maths-logo.png"
            link="/department/maths"
          />
          <Card
            name="Physical Education"
            image="./images/departments/physical-dept-logo.png"
            link="/department/physicalEducation"
          />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
