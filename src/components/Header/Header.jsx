import React, { useState, useEffect } from "react";
import cx from "classnames";

import styles from "./header.module.scss";

export default function Header(props) {
  const [ham, setHam] = useState(false);

  // to close ham burger while scrolling
  useEffect(() => {
    window.onscroll = (event) => {
      setHam(false);
    };
  }, []);

  // to open the hamburger
  function handleClick() {
    setHam((old) => !old);
  }

  // inorder to make a nav sticky  add keywork 'sticky' to props

  return (
    <header>
      <nav
        className={
          props.sticky
            ? ham
              ? cx(styles.nav, styles.white_bg, styles.sticky)
              : cx(styles.nav, styles.sticky)
            : ham
            ? cx(styles.nav, styles.white_bg)
            : styles.nav
        }
      >
        <div
          className={styles.nav_container}
          style={props.sticky ? { padding: "1.5rem 0" } : {}}
        >
          <a
            className={styles.nav__brand}
            href="/"
            style={{ textDecoration: "none" }}
          >
            <img
              src="/images/logo-maroon.png"
              alt="aubit"
              className={styles.nav__brand_logo}
            />
            <h5 className={styles.nav__brand_text}>AUBIT</h5>
          </a>

          <ul
            className={
              ham ? cx(styles.nav__list, styles.nav__active) : styles.nav__list
            }
          >
            <li className={styles.nav__item}>
              <a href="/" className={styles.nav__link}>
                Home
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="/administration" className={styles.nav__link}>
                Administration{" "}
              </a>
            </li>
            <li className={styles.nav__item}>
              <p className={styles.nav__link} style={{ cursor: "pointer" }}>
                Academic
              </p>
              <div className={styles.nav__dropdown}>
                <ol className={styles.nav__dropdown_list}>
                  <a href="/courses" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>
                      Courses Offered
                    </li>
                  </a>
                  <a href="/departments" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Departments</li>
                  </a>
                </ol>
              </div>
            </li>
            <li className={styles.nav__item}>
              <p className={styles.nav__link} style={{ cursor: "pointer" }}>
                Features & Services
              </p>
              <div className={styles.nav__dropdown}>
                <ol className={styles.nav__dropdown_list}>
                  <a href="/hostel" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Hostel</li>
                  </a>
                  <a href="/library" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Library</li>
                  </a>
                  <a href="/placement" className={styles.nav__dropdown_link}>
                    <li className={styles.nav__dropdown_item}>Placement</li>
                  </a>
                  <a
                    href="/studentAffairs"
                    className={styles.nav__dropdown_link}
                  >
                    <li className={styles.nav__dropdown_item}>
                      Student Affairs
                    </li>
                  </a>
                </ol>
              </div>
            </li>
          </ul>

          <div className={styles.burger} onClick={handleClick}>
            <div
              className={
                ham
                  ? cx(styles.burger__line, styles.burger__line_toggle)
                  : styles.burger__line
              }
            >
              &nbsp;
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
