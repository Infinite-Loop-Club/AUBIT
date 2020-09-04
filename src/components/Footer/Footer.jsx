import React from "react";
import classes from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__top}>
        <div className={classes.footer__top_inner}>
          <div className={classes.footer__social}>
            <h4 className={classes.footer__heading}>AUBIT</h4>
            <ul className={classes.social__list}>
              <li className={classes.social__list_item}>
                <a href="#ab">
                  <span className="icon-mail"></span>
                  <p className={classes.social__list_text}>annauniv@gmail.com</p>
                </a>
              </li>
              <li className={classes.social__list_item}>
                <a href="https://www.facebook.com/Anna-University-BIT-Campus-Trichy-324036518102939/">
                  <span className="icon-facebook"></span>
                  <p className={classes.social__list_text}>Anna University,Trichy</p>
                </a>
              </li>
              <li className={classes.social__list_item}>
                <a href="https://twitter.com/aubittrichy">
                  <span className="icon-twitter"></span>
                  <p className={classes.social__list_text}>@aubittrichy</p>
                </a>
              </li>
              <li className={classes.social__list_item}>
                <a href="#ab">
                  <span className="icon-linkedin"></span>
                  <p className={classes.social__list_text}>aubit</p>
                </a>
              </li>
              <li className={classes.social__list_item}>
                <a href="#ab">
                  <span className="icon-youtube"></span>
                  <p className={classes.social__list_text}>aubit</p>
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.footer__quick}>
            <h4 className={classes.footer__heading}>Quick Links</h4>
            <ul className={classes.quick__link}>
              <li className={classes.quick__link_item}><a href="#ab">Scholarship</a></li>
              <li className={classes.quick__link_item}>
                <a href="#ab">First year & Academic Co - ordinar</a>
              </li>
              <li className={classes.quick__link_item}><a href="#ab">Patents</a></li>
              <li className={classes.quick__link_item}>
                <a href="#ab">Funding Agencies</a>
              </li>
              <li className={classes.quick__link_item}>
                <a href="#ab">RTI Mandatory Disclosure</a>
              </li>
            </ul>
          </div>
          <div className={classes.contact}>
            <h4 className={classes.footer__heading}>Contact US</h4>
            <h5 className={classes.contact__heading}>University College of Engineering</h5>
            <p className={classes.contact__heading2}>
              Bharathidasan Institute of Technology,
          </p>
            <p className={classes.contact__detail}>Anna University,</p>
            <p className={classes.contact__detail}>Tiruchirappalli - 620 024,</p>
            <p className={classes.contact__detail}>Landline: 0431-2407946,</p>
            <p className={classes.contact__detail}>Fax: 0431-2407999.</p>
          </div>
        </div>
      </div>
      <div className={classes.copyrights}>
        &copy; Copyright 2020 - All rights reserved
      </div>
    </footer>
  );
}
