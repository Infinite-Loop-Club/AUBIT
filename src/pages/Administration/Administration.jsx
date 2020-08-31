import React, { Fragment } from "react";
import styles from "./style.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Adminstration/Card";


import Accordion from "../../components/Accordion/Accordion";

import Table from "../../components/Table/Table";

import { bog } from "../../constants/Table/administration";

export default () => {
  return (
    <Fragment>
      <Header sticky />
      <main className={styles.main}>
        <Card
          name="Dr.M.K. Surrapa"
          designation="Vice chancellor"
          image="./images/administration/vc.png"
          inter="7005"
          phn="22357006 / 22353445"
          mail="vc@annauniv.edu"
        />
        <Card
          name="Dr.L. Karunamoorthy"
          designation="Registrar"
          image="./images/administration/registrar.png"
          inter="7003 / 9403"
          phn="22352161"
          mail="registrar@annauniv.edu"
        />
        <Card
          name="Dr.S. Selladurai"
          designation="Additional Registrar"
          image="./images/administration/addlregistrar.png"
          inter="9405"
          phn="22357010"
          mail="ssdurai@annauniv.edu"
        />
        <Card
          name="Dr.T. Senthil Kumar"
          designation="Professor & Dean"
          image="./images/administration/dean.png"
          office="#ab"
          phn="0431-2407946"
          mail="kmtsenthil@gmail.com"
        />
        <div className={styles.tableContainer}>
          <Accordion title="Board of Governors :">
            <Table data={bog} />
          </Accordion>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};


