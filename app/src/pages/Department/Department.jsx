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
          <Card name="Automobile Engineering" image="./images/department.jpg" />
          <Card name="Automobile Engineering" image="./images/department.jpg" />
          <Card name="Automobile Engineering" image="./images/department.jpg" />
        </div>

        <div className="row">
          <Card name="Automobile Engineering" image="./images/department.jpg" />
          <Card name="Automobile Engineering" image="./images/department.jpg" />
          <Card name="Automobile Engineering" image="./images/department.jpg" />
        </div>

        <div className="row">
          <Card name="Automobile Engineering" image="./images/department.jpg" />
          <Card name="Automobile Engineering" image="./images/department.jpg" />
          <Card name="Automobile Engineering" image="./images/department.jpg" />
        </div>

        <div className="row">
          <Card name="Automobile Engineering" image="./images/department.jpg" />
          <Card name="Automobile Engineering" image="./images/department.jpg" />
          <Card name="Automobile Engineering" image="./images/department.jpg" />
        </div>

        <div className="row">
          <Card name="Automobile Engineering" image="./images/department.jpg" />
          <Card name="Automobile Engineering" image="./images/department.jpg" />
          <Card name="Automobile Engineering" image="./images/department.jpg" />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
