import React, { Fragment } from "react";
import styles from "./style.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Table from "../../components/Table/Table";

export default () => {
  return (
    <Fragment>
      <Header sticky />
      <main className={styles.main}>
        <h3
          className={styles.heading_primary_main}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          Library
        </h3>
        <div className={styles.container}>
          <p className={styles.description} style={{ marginBottom: "2rem", textIndent: "5rem" }}>
            BIT Central library is the knowledge centre of the institute for an academic and research activities. It has been catering to the information needs of the intellectuals and ignited minds of the institute. Library has 45,971 volumes covering all major fields of Science and Engineering. The library covers an area of 748 sqm spanning the ground floor and first floor with an ample study space (180 sqm). The ground floor is Air-conditioned. The Library has the following facilities for the faculty, staffs and the students: Multimedia, Internet, Reprography and a CD-ROM collection.
            </p>
          <p className={styles.description} style={{ textIndent: "5rem" }}>
            Our college library subscribed the most important databases like DELNET, J-Gate for the benefit of engineering and technology students. It includes collection of books and journals from various publications such as Elsevier, Emerald Group, Nature Publishing Group, National Research Council of Canada, Sage Publications,Business Media, Taylor and Francis, Urban & Fischer Verlag journals,etc., The total number of Print and Online journals subscribed is: 7000+. Total number of CD's is 1370 and the total seating capacity is 300. A library committee headed by the Dean, comprising of all the Heads of Departments, and Student Representatives, meets every semester to discuss the functioning of the library.
            </p>
        </div>

        <div className={styles.vmContainer}>
          <div className={styles.vision}>
            <h6
              className={styles.heading_primary_main}
              style={{ marginBottom: "1rem" }}
            >
              Vision :
            </h6>
            <ul>
              <li>To serve our users by providing right information at the right time</li>
              <li>To evolve into a centre of excellence by providing a digital repository of teaching and      research materials</li>
              <li>To have a modern building with adequate infrastructure facilities.</li>
            </ul>
          </div>
          <div className={styles.mission}>
            <h6
              className={styles.heading_primary_main}
              style={{ marginBottom: "1rem" }}
            >
              Mission :
            </h6>
            <ul>
              <li>Mission of the Library is to make every student self-reliant with good conduct and character to make India occupy a prestigious place in the country of Nations.</li>
              <li>Acquiring and preserving records of human knowledge and creativity in both print and non-print such as those in monographs, digital, audiovisual, online and other appropriate formats</li>
              <li>Providing access to these records by organizing, cataloging and indexing them</li>
              <li> Assisting and instructing users of the Library through orientations, formal lectures or one-on-one interaction in order to help them in the retrieval of these records and those held by other libraries and databases throughout the world</li>
              <li>Providing maximum, effective and fast retrieval of information through the computerization of the library services and operations</li>
              <li>Sharing of these resources with a community of researchers and scholars.</li>
            </ul>
          </div>
        </div>

        <div className={styles.tt}>
          <h5
            className={styles.heading_primary_main}
            style={{ marginBottom: "1rem" }}
          >
            Working Hours :
            </h5>
          <Table data={data} />
        </div>

        <div className={styles.bottom_links}>
          <ul>
            <li>
              <a href="#ab">Terms & Service</a>
            </li>
            <li>
              <a href="#ab">Staff Profile</a>
            </li>
            <li>
              <a href="#ab">E - Resources</a>
            </li>
            <li>
              <a href="#ab">Collections</a>
            </li>
            <li>
              <a href="#ab">Gallery</a>
            </li>
            <li>
              <a href="#ab">Others</a>
            </li>
          </ul>
        </div>

      </main>
      <Footer />
    </Fragment>
  );
};


const data = {
  header: ["", ""],
  values: [
    ["Academic Working Days", "8:00 a.m. To 8.00 p.m."],
    ["Academic Weekend", "08.00a.m To. 6.00 P.m."],
    ["Transaction Hours (Counter Timings) Issuing of Books", "9.00 a.m. To 6.00 p.m."],
    ["Vacation & Holidays", "9.00 a.m. To 4.00 p.m."]
  ]
}