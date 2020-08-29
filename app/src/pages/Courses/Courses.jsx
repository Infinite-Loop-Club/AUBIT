import React, { Fragment, useState } from "react";
import styles from "./style.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Table from "../../components/Table/Table";

import cx from 'classnames';

export default function Courses() {

  const [ug, setUg] = useState(false);

  return (
    <Fragment>
      <Header sticky />
      <main className={styles.main}>
        <div className={styles.btn__container}>
          <button onClick={() => setUg(true)} className={ug ? cx(styles.btn1, styles.active) : styles.btn1}>UG Courses</button>
          <button onClick={() => setUg(false)} className={ug ? styles.btn2 : cx(styles.btn2, styles.active)}>PG Courses</button>
        </div>
        {ug ?
          <div style={{ marginTop: "5rem" }}>
            <h4 className={styles.hero__sub_heading}>UG Courses</h4>
            <Table data={ugCourses} />
          </div> :
          <div style={{ marginTop: "5rem" }}>
            <h4 className={styles.hero__sub_heading}>PG Courses</h4>
            <Table data={pgCourses} />
          </div>}
      </main>
      <Footer />
    </Fragment>
  );
}

const ugCourses = {
  header: ["Department", "Course"],
  values: [
    ["Department of Automobile Engineering",
      <>
        <p>B.E. Automobile Engineering</p>
        <br />
        <p>B.E. Mechanical Engineering</p>
        <br />
        <p>B.E. Mechanical Engineering(Tamil Medium)</p>
      </>
    ],
    ["Department of Bio-Technology", "B.Tech Bio-Technology"],
    ["Department of Civil Engineering",
      <>
        <p>B.E. Civil Engineering</p>
        <br />
        <p>B.E. Civil Engineering(Tamil Medium)</p>
      </>
    ],
    ["Department of Electrical & Electronics Engineering", "B.E. Electrical & Electronics Engineering"],
    ["Department of Electronics and Communication Engineering", "B.E. Electronics and Communication Engineering"],
    ["Department of Information Technology",
      <>
        <p>B.Tech Information Technology</p>
        <br />
        <p>B.E. Computer Science Engineering</p>
      </>
    ],
    ["Department of Petrochemical Technology", "B.Tech Petrochemical Technology"],
    ["Department of Pharmaceutical Technology", "B.Tech Pharmaceutical Technology"]
  ]
};


const pgCourses = {
  header: ["Department", "Course"],
  values: [
    ["Department of Automobile Engineering",
      <>
        <p>M.E. Energy Engineering(Full Time)</p>
        <br />
        <p>M.E. Manufacturing Engineering(Part Time)</p>
        <br />
        <p>M.E. Thermal Engineering(Part Time)</p>
      </>
    ],
    ["Department of Bio-Technology", "M.Tech Bio-Technology(Full Time)"],
    ["Department of Computer Applications",
      <>
        <p>MCA</p>
        <br />
        <p>MCA Lateral Entry</p>
      </>
    ],
    ["Department of Civil Engineering",
      <>
        <p>M.E. Environment Engineering(Full Time)</p>
        <br />
        <p>M.E. Structural Engineering(Part Time)</p>
      </>
    ],
    ["Department of Electrical & Electronics Engineering", "M.E. Power System Engineering(Part Time)"],
    ["Department of Electronics and Communication Engineering", "M.E. Communication Systems(Part Time)"],
    ["Department of Information Technology",
      <>
        <p>M.E. Computer Science and Engineering(Full Time)</p>
        <br />
        <p>M.E. Computer Science and Engineering(Part Time)</p>
        <br />
        <p>M.E. Mobile & Pervasive Computing(Full Time)</p>
        <br />
        <p>M.E. Software Engineering(Full Time)</p>
      </>
    ],
    ["Department of Management Studies", "M.B.A.(Full Time)"],
    ["Department of Physics", "M.Tech Nano Science and Technology(Full Time)"]
  ]
};
