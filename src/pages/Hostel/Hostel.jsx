import React, { Fragment } from "react";
import styles from "./style.module.scss";

import { Header, Footer, Accordion, ImageGallery as Gallery, Table } from '../../components';

import { sources } from "../../constants/Gallery/hostel";
import { data } from "../../constants/Table/hostel";

export default () => {
  return (
    <Fragment>
      <Header sticky />
      <main className={styles.main}>
        <h3
          className={styles.heading_primary_main}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          Hostel
        </h3>
        <div className={styles.container}>
          <p className={styles.description} style={{ marginBottom: "2rem", textIndent: "5rem" }}>
            Anna University, Bharathidasan Institute of Technology (BIT) Campus, Trichirappalli – 620 024 is
            provides accommodation to students wishing to reside in the hostels. Hostel administration is an
            independent unit in respect to its internal administration under the overall supervision of the Hostel
            administration headed by the Warden followed by Executive Warden, Deputy Wardens (Boys and Girls
            Hostels) and Residential Tutors. The Non – Teaching staffs and Steward in all matters relating to the
            hostel were who actively take part in hostel day to day affairs.
            </p>
          <p className={styles.description} style={{ textIndent: "5rem" }}>
            The messes are run by the student committees with the support of Hostel Administration. The
            mess bills are shared by the inmates in No loss No gain basis (Dividing system).
            </p>
        </div>
        <Accordion title="Hostel Administration" style={{ margin: "3rem 0" }}>
          <Table data={data} />
        </Accordion>

        <h5
          className={styles.heading_primary_main}
          style={{ textAlign: "center" }}
        >
          Gallery
        </h5>
        <Gallery sources={sources} />
      </main>
      <Footer />
    </Fragment>
  );
};



