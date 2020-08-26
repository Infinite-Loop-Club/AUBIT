import React, { Fragment } from "react";
import styles from "./style.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Accordion from "../../components/Accordion/Accordion";

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

        <div className={styles.vmContainer}>
          <div className={styles.vision}>
            <h6
              className={styles.heading_primary_main}
              style={{ marginBottom: "1rem" }}
            >
              Vision :
            </h6>
            <p className={styles.description}>
              Committed to serve the society by state of art engineering
              education to develop attitudes, skills, and values while
              establishing development in pioneer areas of automobile
              engineering.
            </p>
          </div>
          <div className={styles.mission}>
            <h6
              className={styles.heading_primary_main}
              style={{ marginBottom: "1rem" }}
            >
              Mission :
            </h6>
            <p className={styles.description}>
              To provide a scholarly and vibrant learning environment for
              achieving professional competency to create successful
              professionals who contribute their knowledge, skill and attitudes
              to design, re-design, research & development in the automotive
              industry to make their noteworthy contributions in developing the
              society through continuous learning - teaching methodology
            </p>
          </div>
        </div>

        <div className={styles.courses}>
          <h6
            className={styles.heading_primary_main}
            style={{ marginBottom: "1rem" }}
          >
            Course Offered :
          </h6>
          <div className={styles.courses__container}>
            <ul>
              <h6
                className={styles.heading_primary_main}
                style={{ marginBottom: "1rem", fontSize: "1.7rem" }}
              >
                UG Courses :
              </h6>
              <li>B.E. Automobile Engineering</li>
              <li>B.E. Mechanical Engineering</li>
              <li>B.E. Mechanical Engineering (Tamil Medium)</li>
            </ul>
            <ul>
              <h6
                className={styles.heading_primary_main}
                style={{ marginBottom: "1rem", fontSize: "1.7rem" }}
              >
                PG Courses :
              </h6>
              <li>M.E. Energy Engineering(Full Time)</li>
              <li>M.E. Manufacturing Engineering(Part Time)</li>
              <li>M.E. Thermal Engineering(Part Time)</li>
            </ul>
          </div>
        </div>

        <Accordion title="Program Outcomes:" style={{ margin: "3rem 0" }}>
          <div className={styles.po}>
            <p className={styles.description}>
              The programme outcomes are in align with the NBA graduate
              attributes. The programme is preparing the graduates.
            </p>
            <ol>
              <li>
                To apply knowledge of mathematics, science and engineering in
                the field of automobile engineering.
              </li>
              <li>
                To design and conduct experiments, as well as to analyze and
                interpret data related to automobile engineering.
              </li>
              <li>
                To design a system, component, or process to meet desired the
                automotive needs within realistic constraints such as economic,
                environmental, social, political, ethical, health and safety,
                manufacturability & sustainability.
              </li>
              <li>
                To identify, formulate, and solve complex automobile engineering
                problems.
              </li>
              <li>
                To use the techniques, skills, and modern engineering tools
                necessary for automobile engineering practice.
              </li>
              <li>
                To apply knowledge to assess societal, health, safety, legal,
                and cultural issues and the consequent responsibilities relevant
                to the professional engineering practice.
              </li>
              <li>
                To understand the impact of engineering solutions in a global,
                economic, environmental, and societal context.
              </li>
              <li>To demonstrate professional and ethical responsibility.</li>
              <li>
                To work in teams and apply interpersonal skills in engineering
                contexts.
              </li>
              <li>
                To communicate effectively with a wide range of both engineering
                and non-engineering personnel.
              </li>
              <li>
                To follow management and financial principles and apply them in
                execution of projects.
              </li>
              <li>
                To lay a foundation for continued learning beyond graduation.
              </li>
            </ol>
          </div>
        </Accordion>

        <Accordion
          title="Programme Educational Objectives:"
          style={{ margin: "3rem 0" }}
        >
          <div className={styles.peo}>
            <ol>
              <li>
                The Graduates will Be successful in their professional careers
                in automobile industries that meet the needs of Indian and
                Multinational companies.
              </li>
              <li>
                Develop the ability to synthesize data for application in
                automotive design
              </li>
              <li>
                Build up the attitude of self-reliance, creativity, professional
                ethics and the capacity for continuing professional and
                intellectual growth.
              </li>
              <li>
                Demonstrate leadership qualities in activities related to
                sustainable development of society.
              </li>
            </ol>
          </div>
        </Accordion>

        <div className={styles.links}>
          <p
            className={styles.heading_primary_main}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            Quick Links
          </p>
          <ul>
            <li>
              <a href="/department/automobile/staff">Faculty</a>
            </li>
            <li>
              <a href="#ab">Lab Facility</a>
            </li>
            <li>
              <a href="#ab">Alumini</a>
            </li>
            <li>
              <a href="#ab">Placement</a>
            </li>
            <li>
              <a href="#ab">Sponer Projects</a>
            </li>
            <li>
              <a href="#ab">Program Organized</a>
            </li>
            <li>
              <a href="#ab">Book Published</a>
            </li>
            <li>
              <a href="#ab">Gallery</a>
            </li>
            <li>
              <a href="#ab">Blog</a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
