import React, { Fragment } from "react";
import styles from "./style.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";



export default () => {
  return <Fragment>
    <Header sticky />
    <main className={styles.main}>
      <h5 className={styles.heading_primary_main} style={{ textAlign: "center", marginBottom: "3rem" }}>
        Department of Automobile Engineering
      </h5>

      <div className={styles.vmContainer}>
        <div className={styles.vision}>
          <h6 className={styles.heading_primary_main} style={{ marginBottom: "1rem" }}>
            Vision :
           </h6>
          <p className={styles.description}>Committed to serve the society by state of art engineering education to develop attitudes, skills, and values while establishing development in pioneer areas of automobile engineering.</p>
        </div>
        <div className={styles.mission}>
          <h6 className={styles.heading_primary_main} style={{ marginBottom: "1rem" }}>
            Mission :
           </h6>
          <p className={styles.description}>To provide a scholarly and vibrant learning environment for achieving professional competency to create successful professionals who contribute their knowledge, skill and attitudes to design, re-design, research & development in the automotive industry to make their noteworthy contributions in developing the society through continuous learning - teaching methodology</p>
        </div>
      </div>

      <div className={styles.courses}>
        <h6 className={styles.heading_primary_main} style={{ marginBottom: "1rem" }}>
          Course Offered :
        </h6>
        <div className={styles.courses__container}>
          <ul>
            <li>B.E. Automobile Engineering</li>
            <li>B.E. Mechanical Engineering</li>
            <li>B.E. Mechanical Engineering (Tamil Medium)</li>
          </ul>
          <ul>
            <li>M.E. Energy Engineering(Full Time)</li>
            <li>M.E. Manufacturing Engineering(Part Time)</li>
            <li>M.E. Thermal Engineering(Part Time)</li>
          </ul>
        </div>
      </div>


    </main>
    <Footer />
  </Fragment>
}