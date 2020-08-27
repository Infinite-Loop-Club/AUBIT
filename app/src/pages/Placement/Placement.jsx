import React, { Fragment } from "react";

import styles from "./style.module.scss";

import Accordion from "../../components/Accordion/Accordion";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";




export default () => {
  return (
    <Fragment>
      <Header sticky />
      <main className={styles.main}>
        <h3
          className={styles.heading_primary_main}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          Placement Cell
        </h3>
        <div className={styles.container}>
          <p className={styles.description} style={{ marginBottom: "2rem", textIndent: "5rem" }}>
            The placement and Training Cell is headed by the Placement Coordinator, Dr. S. Venkatesan / Associate Professor – Petrochemical Department. The Student Coordinators are elected from each department during their pre-final year and the activities of the Placement and Training Cell are taken care of by them.
            </p>
          <p className={styles.description} style={{ textIndent: "5rem" }}>
            The students are given training in their Aptitude, Technical, Communication, Logical & Verbal Reasoning and Soft Skills from the third year of their Under Graduation. Apart from this, Guest Lectures and Training Programs by experts from various engineering industries are catered. A number of well-reputed companies are invited for the On-Campus Recruitment Drive every year and thus the placements of the students are facilitated.
            </p>
        </div>
        <div className={styles.co_ordinator}>
          <h6
            className={styles.heading_primary_main}
            style={{ marginBottom: "1rem" }}
          >
            Coordinators
            </h6>
          <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}> Placement Co-ordinator : </p>
          <div className={styles.details}>
            <p className={styles.description}> Dr. S. Venkatesan , </p>
            <p className={styles.description}> Professor, Petro Chemical Department .</p>
          </div>
          <hr />
          <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}> Placement Staff : </p>
          <div className={styles.details}>
            <p className={styles.description}> Mr. T. Nepholian , </p>
            <p className={styles.description}> Staff, Placement Cell . </p>
          </div>
          <h6
            className={styles.heading_primary_main}
            style={{ marginBottom: "1rem", marginTop: "2rem" }}
          >
            Contact :
          </h6>
          <div className={styles.contact}>
            <div className={styles.phn}>
              <span className="icon-phone"></span>
              <p>+91–0431–2407976</p>
            </div>
            <div className={styles.mail}>
              <span className="icon-mail"></span>
              <p>aubit.placement@gmail.com</p>
            </div>
          </div>
        </div>
        <Accordion
          title="Placement Recruitment Procedure:"
          style={{ margin: "3rem 0" }}
        >
          <div className={styles.procedure}>
            <ol>
              <li>
                Invitations are sent to companies/organizations in the form of brochures with relevant information along with response sheets enquiring about the recruitment details. Soft copies of the brochure and response sheet are also sent.
              </li>
              <li>
                The company fills the response sheet and sends it by e-mail/post to the Training and Placement Department, BIT Trichy.
              </li>
              <li>
                Once the details are received, the placement officer and coordinators get in touch with the company and a mutually convenient date is fixed for the Campus Placement process.
              </li>
              <li>
                The travel plans are obtained from the company and the necessary arrangements are made as follows.
                 <ul>
                  <li>Pickups/Drops from/to the railway station or airport can be arranged by the department on request if the place of stay is the institute guest house.</li>
                  <li>Accommodation/Food are provided at the institute guest house on Prior Intimation and the costs for these are borne by the college. In case the Company wishes to stay outside the campus, arrangements will be made on request but the costs for these are to be borne by the company.</li>
                  <li>OHP, Slide Projector, LCD, Laptop etc. will be provided for the Pre-Placement Talk.</li>
                  <li>Halls will be arranged suitably for the Pre-Placement Talk, Written tests, Group Discussions and Activities and Personal Interviews.</li>
                  <li>If a company desires to hold online tests for the candidates, the arrangements will be made in the computer center on prior intimation. Up to 100 students can take up the test at a time.
                  </li>
                </ul>
              </li>
              <li>
                The offers are made by the company after the selection process and the offer letters are signed and accepted by the concerned students and sent to the company through the Training and Placement Department. The Department recommends offers to be made on the spot after the process with a letter of confirmation signed by the visiting company representatives. Short listed or waitlisted candidates will be allowed to sit for the companies that follow as long as their confirmation is put on hold.
              </li>
            </ol>
          </div>
        </Accordion>
      </main>
      <Footer />
    </Fragment>
  );
};
