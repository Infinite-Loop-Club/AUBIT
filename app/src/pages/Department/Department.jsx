import React, { Fragment } from "react";
import styles from "./style.module.scss";
import cs from "classnames";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Card(props) {
  return (
    <div
      className={cs(`col-1-of-3`, styles.card)}
      style={{
        backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${props.image})`,
      }}
    >
      <h5 className={styles.text}>{props.name}</h5>
    </div>
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
          />
          <Card
            name="Information Technology"
            image="./images/departments/it-logo.png"
          />
          <Card
            name="Computer Application"
            image="./images/departments/ca-logo.png"
          />
        </div>

        <div className="row">
          <Card
            name="Electrical and Electronics Engineering"
            image="./images/departments/eee-logo.png"
          />
          <Card
            name="Electronics and Communcation Engineering"
            image="./images/departments/ece-logo.png"
          />
          <Card
            name="Civil Engineering"
            image="./images/departments/civil-logo.png"
          />
        </div>

        <div className="row">
          <Card
            name="Bio-Technology"
            image="./images/departments/biotech-logo.png"
          />
          <Card
            name="Petrochemical Technology"
            image="./images/departments/petro-logo.png"
          />
          <Card
            name="Pharmaceutical Technology"
            image="./images/departments/pharma-logo.png"
          />
        </div>

        <div className="row">
          <Card
            name="Management Studies"
            image="./images/departments/management-studies-logo.png"
          />
          <Card
            name="Chemistry"
            image="./images/departments/chemistry-logo.png"
          />
          <Card name="Physics" image="./images/departments/physics-logo.png" />
        </div>

        <div className="row">
          <Card name="English" image="./images/departments/english-logo.png" />
          <Card name="Maths" image="./images/departments/maths-logo.png" />
          <Card
            name="Physical Education"
            image="./images/departments/physical-dept-logo.png"
          />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
