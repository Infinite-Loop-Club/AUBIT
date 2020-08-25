import React, { Fragment } from "react";
import styles from "./style.module.scss";


import StaffCard from "../../../components/Card/Staff/StaffCard";

import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";


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

        <StaffCard
          image='./images/administration/dean.png'
          name='Dr.T. Senthilkumar'
          designation='Professor & Dean'
          resume='#test'
          mail='santhoshvelr@gmail.com'
        />

        <div className="row">
          <div className="col-1-of-4">
            <StaffCard
              image='./images/administration/vc.png'
              name='Sandy'
              designation='Sandy pola varuma'
              resume='#test'
              mail='santhoshvelr@gmail.com'
            />
          </div>
          <div className="col-1-of-4">
            <StaffCard
              image='./images/administration/vc.png'
              name='Sandy'
              designation='Sandy pola varuma'
              resume='#test'
              mail='santhoshvelr@gmail.com'
            />
          </div>
          <div className="col-1-of-4">
            <StaffCard
              image='./images/administration/vc.png'
              name='Sandy'
              designation='Sandy pola varuma'
              resume='#test'
              mail='santhoshvelr@gmail.com'
            />
          </div>
          <div className="col-1-of-4">
            <StaffCard
              image='./images/administration/vc.png'
              name='Sandy'
              designation='Sandy pola varuma'
              resume='#test'
              mail='santhoshvelr@gmail.com'
            />
          </div>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <StaffCard
              image='./images/administration/vc.png'
              name='Sandy'
              designation='Sandy pola varuma'
              resume='#test'
              mail='santhoshvelr@gmail.com'
            />
          </div>
          <div className="col-1-of-2">
            <StaffCard
              image='./images/administration/vc.png'
              name='Sandy'
              designation='Sandy pola varuma'
              resume='#test'
              mail='santhoshvelr@gmail.com'
            />
          </div>
          <div className="col-1-of-2">
            <StaffCard
              image='./images/administration/vc.png'
              name='Sandy'
              designation='Sandy pola varuma'
              resume='#test'
              mail='santhoshvelr@gmail.com'
            />
          </div>
          <div className="col-1-of-2">
            <StaffCard
              image='./images/administration/vc.png'
              name='Sandy'
              designation='Sandy pola varuma'
              resume='#test'
              mail='santhoshvelr@gmail.com'
            />
          </div>
        </div>

      </main>
      <Footer />
    </Fragment>
  );
};


