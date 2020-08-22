import React, { useEffect, useState } from "react";
import cx from 'classnames';

import styles from "./header.module.scss";


export default function Footer() {

  const [sticky, setSticky] = useState(false);


  useEffect(() => {
    window.onscroll = (event) => {
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
  }, []);


  return (
    <header>
      <nav className={sticky ? cx(styles.nav, styles.sticky) : styles.nav}>
        <div className={styles.nav_container} style={sticky ? { padding: "1.5rem 0" } : {}}>
          <div className={styles.nav__brand}>
            <img src="images/logo-maroon.png" alt="aubit" className={styles.nav__brand_logo} />
            <h5 className={styles.nav__brand_text}>AUBIT</h5>
          </div>

          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a href="#ab" className={styles.nav__link}>Home</a>
            </li>
            <li className={styles.nav__item}>
              <a href="#ab" className={styles.nav__link}>Administration </a>
              <div className={styles.nav__dropdown}>
                <ol className={styles.nav__dropdown_list}>
                  <a href="#ab" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Dean</li>
                  </a>
                  <a href="#ab" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Vice Chancellor</li>
                  </a>
                  <a href="#ab" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Registrar</li>
                  </a >
                  <a href="#ab" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Additional Registrar</li>
                  </a >
                </ol >
              </div >
            </li >
            <li className={styles.nav__item}>
              <a href="#ab" className={styles.nav__link}>Academic</a>
              <div className={styles.nav__dropdown}>
                <ol className={styles.nav__dropdown_list}>
                  <a href="#ab" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Admission</li>
                  </a>
                  <a href="#ab" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Courses</li>
                  </a >
                  <a href="#ab" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Departments</li>
                  </a >
                </ol >
              </div >
            </li >
            <li className={styles.nav__item}>
              <a href="#ab" className={styles.nav__link}>Features & Services</a>
              <div className={styles.nav__dropdown}>
                <ol className={styles.nav__dropdown_list}>
                  <a href="#ab" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Hostel</li>
                  </a>
                  <a href="#ab" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Library</li>
                  </a >
                  <a href="#ab" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Placement</li>
                  </a >
                  <a href="#ab" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Student Affairs</li>
                  </a >
                </ol >
              </div >
            </li >
          </ul >

          <div className={styles.burger}>
            <div className={styles.burger__line}>&nbsp;</div>
          </div>
        </div >
      </nav >
    </header >
  );
}