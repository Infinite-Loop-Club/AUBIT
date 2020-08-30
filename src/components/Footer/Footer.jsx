import React from "react";

import styles from "./footer.module.scss";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.footer__top_inner}>
          <div className={styles.footer__social}>
            <h4 className={styles.footer__heading}>AUBIT</h4>
            <ul className={styles.social__list}>
              <li className={styles.social__list_item}>
                <a href=" #ab">
                  <span className="icon-mail" style={{ marginRight: "1rem" }}></span>
                  <p className={styles.social__list_text}>annauniv@gmail.com</p>
                </a>
              </li>
              <li className={styles.social__list_item}>
                <a href="https://www.facebook.com/Anna-University-BIT-Campus-Trichy-324036518102939/">
                  <span className="icon-facebook" style={{ marginRight: "1rem" }}></span>
                  <p className={styles.social__list_text}>Anna University,Trichy</p>
                </a>
              </li>
              <li className={styles.social__list_item}>
                <a href="https://twitter.com/aubittrichy">
                  <span className="icon-twitter" style={{ marginRight: "1rem" }}></span>
                  <p className={styles.social__list_text}>@aubittrichy</p>
                </a>
              </li>
              <li className={styles.social__list_item}>
                <a href=" #ab">
                  <span className="icon-linkedin" style={{ marginRight: "1rem" }}></span>
                  <p className={styles.social__list_text}>aubit</p>
                </a>
              </li>
              <li className={styles.social__list_item}>
                <a href=" #ab">
                  <span className="icon-youtube" style={{ marginRight: "1rem" }}></span>
                  <p className={styles.social__list_text}>aubit</p>
                </a>
              </li>
            </ul >
          </div >
          <div className={styles.footer__quick}>
            <h4 className={styles.footer__heading}>Quick Links</h4>
            <ul className={styles.quick__link}>
              <li className={styles.quick__link_item}><a href=" #ab">Scholarship</a></li>
              <li className={styles.quick__link_item}>
                <a href=" #ab">First year & Academic Co - ordinar</a>
              </li>
              <li className={styles.quick__link_item}><a href=" #ab">Patents</a></li>
              <li className={styles.quick__link_item}>
                <a href=" #ab">Funding Agencies</a>
              </li>
              <li className={styles.quick__link_item}>
                <a href=" #ab">RTI Mandatory Disclosure</a>
              </li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h4 className={styles.footer__heading}>Contact US</h4>
            <h5 className={styles.contact__heading}>University College of Engineering</h5>
            <p className={styles.contact__heading2}>
              Bharathidasan Institute of Technology,
          </p>
            <p className={styles.contact__detail}>Anna University,</p>
            <p className={styles.contact__detail}>Tiruchirappalli - 620 024,</p>
            <p className={styles.contact__detail}>Landline: 0431-2407946,</p>
            <p className={styles.contact__detail}>Fax: 0431-2407999.</p>
          </div>
        </div >
      </div >
      <div className={styles.copyrights}>
        &copy; Copyright 2020 - All rights reserved
    </div>
    </footer >
  );
}