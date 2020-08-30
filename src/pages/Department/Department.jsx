import React, { Fragment } from "react";
import styles from "./style.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Card({ name, image, link, ...props }) {
  return (
    <a href={link} className="col-1-of-3" style={{ textDecoration: "none" }} {...props}>
      <div
        className={styles.card}
        style={{
          backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${image})`,
        }}
      >
        <h5 className={styles.text}>{name}</h5>
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
            data-aos="zoom-in-right"
            data-aos-delay="50"
          />
          <Card
            name="Information Technology"
            image="./images/departments/it-logo.png"
            link="/department/IT"
            data-aos="zoom-in-up"
            data-aos-delay="50"
          />
          <Card
            name="Computer Application"
            image="./images/departments/ca-logo.png"
            link="/department/computerApplication"
            data-aos="zoom-in-left"
            data-aos-delay="50"
          />
        </div>

        <div className="row">
          <Card
            name="Electrical and Electronics Engineering"
            image="./images/departments/eee-logo.png"
            link="/department/EEE"
            data-aos="zoom-in-right"
            data-aos-delay="50"
          />
          <Card
            name="Electronics and Communcation Engineering"
            image="./images/departments/ece-logo.png"
            link="/department/ECE"
            data-aos="zoom-in-up"
          />
          <Card
            name="Civil Engineering"
            image="./images/departments/civil-logo.png"
            link="/department/civil"
            data-aos="zoom-in-left"
            data-aos-delay="50"
          />
        </div>

        <div className="row">
          <Card
            name="Bio-Technology"
            image="./images/departments/biotech-logo.png"
            link="/department/bioTech"
            data-aos="zoom-in-right"
            data-aos-delay="50"
          />
          <Card
            name="Petrochemical Technology"
            image="./images/departments/petro-logo.png"
            link="/department/petrochemical"
            data-aos="zoom-in-up"
            data-aos-delay="50"
          />
          <Card
            name="Pharmaceutical Technology"
            image="./images/departments/pharma-logo.png"
            link="/department/pharmaceutical"
            data-aos="zoom-in-left"
            data-aos-delay="50"
          />
        </div>

        <div className="row">
          <Card
            name="Management Studies"
            image="./images/departments/management-studies-logo.png"
            link="/department/management"
            data-aos="zoom-in-right"
            data-aos-delay="50"
          />
          <Card
            name="Chemistry"
            image="./images/departments/chemistry-logo.png"
            link="/department/chemistry"
            data-aos="zoom-in-up"
            data-aos-delay="50"
          />
          <Card
            name="Physics"
            image="./images/departments/physics-logo.png"
            link="/department/physics"
            data-aos="zoom-in-left"
            data-aos-delay="50"
          />
        </div>

        <div className="row">
          <Card
            name="English"
            image="./images/departments/english-logo.png"
            link="/department/english"
            data-aos="zoom-in-right"
            data-aos-delay="50"
          />
          <Card
            name="Maths"
            image="./images/departments/maths-logo.png"
            link="/department/maths"
            data-aos="zoom-in-up"
            data-aos-delay="50"
          />
          <Card
            name="Physical Education"
            image="./images/departments/physical-dept-logo.png"
            link="/department/physicalEducation"
            data-aos="zoom-in-left"
            data-aos-delay="50"
          />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
